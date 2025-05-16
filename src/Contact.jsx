import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^[6-9]\d{9}$/;
    if (phoneRegex.test(phone)) {
      setSubmitted(true);
      setError('');
      // Here, you can add logic to send the phone number to your backend or service
    } else {
      setError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p><strong>Give us your mobile number, and our agent will contact you soon.</strong></p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <label htmlFor="phone">Mobile Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter your mobile number"
            required
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        {submitted && !error && <p className="success-message">Thank you! Our agent will contact you shortly.</p>}
        <button type="submit" className="submit-btn">Get Call</button>
      </form>
    </div>
  );
}

export default Contact;
