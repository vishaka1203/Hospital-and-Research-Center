import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import Specialities from './../../Pages/Specialities/Specialities';
import OPDschedule from '../../Pages/OPD Schedule/OPDschedule';

const Navbar = () => {
  return (
    <div className="header">
      <div className="topbar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              {/* <!-- Contact --> */}
              <ul className="top-link">
                <li>
                  <img src={logo} alt="" />
                </li>
                <li>
                  <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                    {' '}
                    Dr. Dugkle's Hospital and Research Center{' '}
                  </span>
                </li>
              </ul>
              {/* <!-- End Contact --> */}
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              {/* <!-- Top Contact --> */}
              <ul className="top-contact">
                <li>
                  <i className="fa fa-phone"></i>+91-832-2489333/2489190
                </li>
                <li>
                  <i className="fa fa-envelope"></i>
                  <a href="mailto:support@yourmail.com">
                    drdukleshospital@gmail.com
                  </a>
                </li>
              </ul>
              {/* <!-- End Top Contact --> */}
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Top Bar --> */}

      {/* <!-- Header Inner --> */}
      <div className="header-inner">
        <div className="container">
          <div className="inner">
            <div className="row">
              <div className=" col-md-10 col-12">
                {/* <!-- Main Menu --> */}
                <div className="main-menu">
                  <nav className="navigation">
                    <ul className="nav menu">
                      <li className="active">
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/Specialities">Specialities</Link>
                      </li>
                      <li>
                        <Link to="/OPDSchedule"> OPD Schedule </Link>
                      </li>
                      <li>
                        <a href="#">
                          Services<i className="icofont-rounded-down"></i>
                        </a>
                        <ul className="dropdown">
                          <li>
                            <a href="404.html">Well Woman Clinic</a>
                          </li>
                          <li>
                            <a href="404.html">Patho Lab</a>
                          </li>
                          <li>
                            <a href="404.html">Health Checks</a>
                          </li>
                          <li>
                            <a href="404.html">Diagnostics</a>
                          </li>
                          <li>
                            <a href="404.html">Pharmacy</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          International Patients
                          <i className="icofont-rounded-down"></i>
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">Academics & Research</a>
                      </li>
                      <li>
                        <a href="contact.html">Gallery</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <!--/ End Main Menu --> */}
              </div>
              <div className="col-lg-2 col-12">
                <div className="get-quote">
                  <a href="appointment.html" className="btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--/ End Header Inner --> */}
    </div>
  );
};

export default Navbar;
