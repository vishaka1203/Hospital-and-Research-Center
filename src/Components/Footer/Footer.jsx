import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarker, FaFacebook } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

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
                      <i className="icofont-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-vimeo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icofont-pinterest"></i>
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
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          Home
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
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          Services
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          Consuling
                        </a>
                      </li>

                      <li>
                        <a href="#">
                          <i
                            className="fa fa-caret-right"
                            aria-hidden="true"
                          ></i>
                          Testimonials
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-footer">
                <h2>Open Hours</h2>
                <p>
                  We're open on Monday to Saturday, 8:00 AM - 8:00 PM. Schedule
                  appointments for personalized care and expert medical
                  services. Your health is our priority.
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
