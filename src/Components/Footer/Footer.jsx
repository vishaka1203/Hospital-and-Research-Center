import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FaFacebook, FaWhatsapp, FaInstagram, FaGoogle } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>About Us</h2>
                <p>
                  Dr. Dukle's Hospital and Research Center: Delivering
                  cutting-edge medical care and pioneering research, ensuring a
                  healthier tomorrow.
                </p>
                {/* Social */}
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GoMail />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGoogle />
                    </a>
                  </li>
                </ul>
                {/* End Social */}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer f-link">
                <h2>Quick Links</h2>
                <div className="row">
                  <div className="col-lg-6 col-md-1 col-12">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          OPD Schedule
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Open Hours</h2>
                <p>
                  <strong>
                    Monday-Saturday <br />
                  </strong>
                  8:00 AM - 8:00 PM.
                  <br />
                  <br />
                  Schedule appointments for personalized care
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Contact Us</h2>
                <p>For inquiries, contact us at:</p>
                <div className="contact-info">
                  <p>
                    <strong>Email:</strong> drdukleshospital@gmail.com
                  </p>
                  <p>
                    <strong>Phone:</strong> +91-832-2489333/2489190
                  </p>
                  <p>
                    <strong>Address:</strong> Fort Aguada Road Candolim, North
                    Goa 403515
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
