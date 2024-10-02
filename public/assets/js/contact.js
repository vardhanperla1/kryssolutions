// JavaScript Document


const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 21;

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

app.use(bodyParser.urlencoded({ extended: true }));

// Setting up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Contact.html'));
});

function createMessage(name, email, message, filePath) {
    return {
        from: EMAIL_USER,
        to: EMAIL_USER,
        subject: `Form Submission of: ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        attachments: [
            {
                filename: path.basename(filePath),
                path: filePath
            }
        ]
    };
}

// Initializing connection to the Gmail SMTP server
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
    }
});

// Route to handle form submission with file upload
app.post('/send-email', upload.single('fileUpload'), async (req, res) => {
    const { name, email, message } = req.body;
    const filePath = req.file ? req.file.path : null;

    if (!filePath) {
        return res.send('No file uploaded');
    }

    const mailOptions = createMessage(name, email, message, filePath);

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.send('Error sending email');
    }
});

app.listen(port, () => {
    console.log(`68.178.145.131`);
});
