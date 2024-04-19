import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      {/* About  Box */}
      <div className="footer-box">
        <div className="footer-about">
          <span className="about-style">ABOUT US</span>
          <div className="about-us">
            <span>
              Dr Dugle's Hospital & Research Center: Committed to pioneering
              medical breakthoughs, providing compassionate care, and enhancing
              lives though innovative and exellence in healthcare.
            </span>
          </div>
        </div>
      </div>

      {/* Left Box */}
      <div className="footer-box">
        <div className="footer-left">
          <span className="contact-style">GET IN TOUCH</span>
          <div className="contact-info">
            <FaPhone /> +91-832-2489333/2489190
          </div>
          <div className="contact-info">
            <FaEnvelope /> drdukleshospital@gmail.com
          </div>
          <div className="contact-info">
            <FaMapMarker /> Fort Aguada Road Candolim, North Goa 403515
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="footer-box">
        <div className="footer-right">
          <div className="footer-r-heading">
            <span>QUICK LINKS</span>
          </div>
          <button className="contact-btn">Contact Us</button>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
