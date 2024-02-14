import React from 'react';
const ContactPage = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, feel free to reach out to us.</p>

      <div className="contact-form">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>

        <p>Email: <a href="mailto:info@yourjobportal.com">info@yourjobportal.com</a></p>
        <p>Phone: +1 555-123-4567</p>

        <p>Follow us on <a href="https://linkedin.com/yourjobportal" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </div>
  );
};

export default ContactPage;
