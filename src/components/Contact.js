import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <div className="contact-content">
          <p>Feel free to get in touch with me using the form below or through other contact methods.</p>

          {/* Contact Form */}
          <form className="contact-form" action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message:</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          {/* Contact Information */}
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:contact@yourdomain.com">contact@yourdomain.com</a></p>
            {/* Add more contact information as needed */}
          </div>

          {/* Social Media Links */}
          <div className="social-links">
            <p>Connect with me on:</p>
            <a href="https://linkedin.com/yourprofile" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
