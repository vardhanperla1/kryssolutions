const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const port = 3000;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const MYSQL_HOST = process.env.MYSQL_HOST;
const MYSQL_PORT = process.env.MYSQL_PORT;
const MYSQL_USER = process.env.MYSQL_USER;
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
const MYSQL_DATABASE = process.env.MYSQL_DATABASE;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    port: MYSQL_PORT,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.send('Server is running');
});

function createMessage(name, email, message, fileBuffer, fileName) {
    return {
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: `Form Submission of: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        attachments: fileBuffer ? [{
            filename: fileName,
            content: fileBuffer
        }] : []
    };
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

app.post('/send-email', upload.single('fileUpload'), async (req, res) => {
    console.log('Form submission received');
    console.log('Request body:', req.body);
    console.log('Uploaded file:', req.file);

    const { name, email, message } = req.body;
    const fileBuffer = req.file ? req.file.buffer : null;
    const fileName = req.file ? req.file.originalname : null;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!fileBuffer || !fileName) {
        console.error('No file uploaded');
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const mailOptions = createMessage(name, email, message, fileBuffer, fileName);

    try {
        const query = 'INSERT INTO form_submissions (name, email, message, file_name, file_data) VALUES (?, ?, ?, ?, ?)';
        connection.query(query, [name, email, message, fileName, fileBuffer], (err, result) => {
            if (err) {
                console.error('Error saving data:', err);
                return res.status(500).json({ error: 'Error saving data' });
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                    return res.status(500).json({ error: 'Error sending email' });
                }
                console.log('Email sent: ' + info.response);
                res.json({ message: 'Email sent successfully' });
            });
        });
    } catch (error) {
        console.error('Error saving data or sending email:', error);
        res.status(500).json({ error: 'Error saving data or sending email' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'web.js'));
});

app.listen(port, '127.0.0.1', () => {
    console.log(`Server is running at http://localhost:${port}`);
});
