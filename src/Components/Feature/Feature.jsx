import React from 'react';
import './Feature.css';
import dr from '../Assets/dr.jpg';

const Feature = () => {
  return (
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 feature-text py-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="p-lg-5 ps-lg-0">
              <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                Features
              </p>
              <h1 className="text-white mb-4">Why Choose Us</h1>
              <p className="text-white mb-4 pb-2">
                Dr. Dukle’s Hospital & Research Centre was established in
                October 2010.
                <br />
                The hospital aims to build on the emergent possibilities of
                clinical research, preventive medicine and medical tourism.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-user-md text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Experience</p>
                      <h5 className="text-white mb-0">Doctors</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: '55px', height: '55px' }}
                    >
                      <i className="fa fa-check text-primary"></i>
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Quality</p>
                      <h5 className="text-white mb-0">Service</h5>
                    </div>
                  </div>
                </div>

                {/* Add more feature items */}
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 pe-lg-0 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: '400px' }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src={dr}
                style={{ objectFit: 'cover' }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
