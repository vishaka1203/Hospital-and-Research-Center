import React from 'react';
import IntP from '../IntPatients/IntPatients.jpg';
import './IntPatients.css';
const IntPatients = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${IntP})`,
        }}
      ></div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              International Patients
            </p>
            <h3 className="h3">
              DHRC is proud to have been of service to patients from more than
              50 countries.
            </h3>

            <p
              style={{
                textAlign: 'left',
              }}
            >
              Dr. Dukle’s hospital & Research centre is located in the coastal
              village of Candolim, an international tourism destination.
              <br />
              Dr. Dukle’s Hospital & Research Centre has focussed its efforts
              towards being a hospital that exceeds the expectations of its
              international patients on all counts, be it quality of healthcare
              or other support services such as travel and stay. Dr. Dukle’s
              Hospital renders superlative services in the lines of
              International Patient Care, and has therefore carved a niche in
              the Medical Tourism sector.
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntPatients;
