import React, { useState } from 'react';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';


function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form submitted');
    setLoading(true);
    setError('');
    setSuccess(false);

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Response received:', result);

      if (response.ok) {
        setSuccess(true);
        form.reset();
        setTimeout(() => {
          alert("Your Response Has Been Recorded. We will get back to you soon....");
          //console.log('Email Intiation');
        },10);
      }
        else {
        setError(result.error);
      }
    } catch (error) {
      setError('Error submitting form');
      //console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const closeSuccessPopup = () => {
    setSuccess(false);
  };

  return (
    <>
      <main id="main">
        <div className="breadcrumbs d-flex align-items-center" style={{ backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')" }}>
          <div className="container position-relative d-flex flex-column align-items-center" data-aos="fade">
            <h2>Contact</h2>
            <ol>
              <li><Link to="/">Home</Link></li>
              <li>Contact</li>
            </ol>
          </div>
        </div>

        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-map"></i>
                  <h3>Our Address</h3>
                  <p>Odessa, Florida</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>info@kryssolutions.com</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+1 656-217-1792</p>
                </div>
              </div>
            </div>

            <div className="row gy-4 mt-1">
              <div className="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41818930.35112194!2d-123.23237808038162!3d50.22796560381668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c295ba866ddaf1%3A0xe737c74580151604!2sOdessa%2C%20FL%2C%20USA!5e0!3m2!1sen!2sin!4v1714462530743!5m2!1sen!2sin" width="100%" height="384" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>

              <div className="col-lg-6">
                <form id="contactForm" onSubmit={handleSubmit} encType="multipart/form-data" className="php-email-form">
                  <div className="row gy-4">
                    <div className="col-lg-6 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-6 form-group">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="fileUpload" className="form-label" id="fileUpload">Upload your Resume</label>
                    <input className="form-control form-control-lg" id="fileUpload" name="fileUpload" type="file" required/>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" disabled={loading}>Send Message</button>
                  </div>
                  {loading && <p>The Form is being submitted. Please Wait!!...</p>}
                  {error && <p className="error-message">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {success && (
        <div id="successPopup" className="success-container">
          <div className="success-message">
            <div className="msg-body">
              <div className="main-msg">
                <div className="msg-border">
                  <div className="msg-tick">
                    <span style={{ fontSize: '71px', color: '#87cc6d' }}>&#10004;</span>
                  </div>
                </div>
              </div>
              <div className="successful-msg">Successfully Submitted</div>
              <div className="msg-copy">
                <div className="msg-link">We will get back to you soon!</div>
              </div>
              <div className="main_button">
                <button className="button_ok" onClick={closeSuccessPopup}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
