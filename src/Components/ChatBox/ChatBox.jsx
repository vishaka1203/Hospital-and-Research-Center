// ChatBox.jsx

import React, { useState } from 'react';
import { FaCommentAlt } from 'react-icons/fa'; // Importing icon from React Icons
import './ChatBox.css'; // Import CSS file for styling
import logo from '../Assets/logo.png'; // Import your logo image

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message to the chat window
    setMessages([...messages, { text: input, user: true }]);

    // Check user input and provide appropriate responses
    if (input.trim().toLowerCase() === 'help') {
      // If user input is "help", provide menu options
      setMessages([
        ...messages,
        {
          text: 'How may I help you?',
          user: false,
        },
        {
          text: '1. Appointment booking',
          user: false,
        },
        {
          text: '2. Our Services',
          user: false,
        },
        {
          text: '3. Contact details',
          user: false,
        },
      ]);
    } else if (input.trim().toLowerCase() === '1') {
      // If user input is "1" (Appointment), redirect to Appointment booking form
      window.location.href = 'http://localhost:3000/OPDSchedule'; // Replace 'appointment-booking-form' with your actual URL
    } else if (input.trim().toLowerCase() === '2') {
      // If user input is "2" (Services), provide services information
      setMessages([
        ...messages,
        {
          text: 'Our Services:\n- Well Women Clinic\n- Patho Lab\n- Health Checks\n- Diagnostics\n- Pharmacy',
          user: false,
        },
      ]);
    } else if (input.trim().toLowerCase() === '3') {
      // If user input is "3" (Contact details), provide contact details
      setMessages([
        ...messages,
        {
          text: 'Call us at 8322489333',
          user: false,
        },
      ]);
    } else {
      // If user input does not match any specific condition, provide a generic response
      setMessages([
        ...messages,
        {
          text: "Hi! Welcome to Dr Dukle's Hospital and Research Center. Please enter 'Help' for further assistance.",
          user: false,
        },
      ]);
    }

    setInput('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="ChatBox-container">
      {/* Render chat icon */}
      {!showChat && (
        <div className="chat-icon" onClick={toggleChat}>
          <FaCommentAlt className="chat-icon-svg" />
        </div>
      )}

      {/* Render chat window if showChat is true */}
      {showChat && (
        <div className="chat-window">
          <div className="chat-header">
            <img src={logo} alt="Hospital Logo" className="logo" />
            <h2>Dr Dukle's Hospital and Research Center</h2>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={message.user ? 'user-message' : 'bot-message'}
              >
                {message.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Send </button>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
