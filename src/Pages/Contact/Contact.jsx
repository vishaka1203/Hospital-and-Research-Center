import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i7wfzks', 'template_vyf85te', form.current, {
        publicKey: 'i0NuPys6oya4Pko3j',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form ref={form} onSubmit={sendEmail}>
        <h1>Contact</h1>
        <input
          type="text"
          name="user_name"
          className="user"
          placeholder="Name"
        />
        <input
          type="email"
          name="user_email"
          className="user"
          placeholder="Email"
        />
        <textarea name="message" className="user" placeholder="Message" />
        <input type="submit" value="Send" className="button" />
        <span>{done && 'Thanks for contacting me!'}</span>
      </form>
    </div>
  );
};

export default Contact;
