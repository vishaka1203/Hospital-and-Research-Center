// Contact.jsx

import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_i7wfzks',
        'template_vyf85te',
        form.current,
        'i0NuPys6oya4Pko3j'
      )
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="heading">Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send</button>
        {done && (
          <span className="success-message">Thanks for contacting us!</span>
        )}
      </form>
    </div>
  );
};

export default Contact;
