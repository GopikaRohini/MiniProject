import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p><strong>Address:</strong> Citadel Prison, TVM, Kerala, 123456</p>
        <p><strong>Phone:</strong> +91 ..........</p>
        <p><strong>Email:</strong> Citadel@prisnmanagement.com</p>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />
          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />
          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
      <br/> <br/> <br/> <br/>  
    </div>
  );
};

export default Contact;
