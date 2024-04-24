import React from 'react';
import patho1 from '../PathoLab/patho1.jpeg';
import './PathoLab.css';

const PathoLab = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${patho1})`,
        }}
      ></div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">
              Patho Lab in Candolim
            </p>
            <h1 className="heading1">Patho Lab</h1>

            <p
              style={{
                textAlign: 'left',
              }}
            >
              Patho Lab Candolim was started in August 1991 as collaboration
              between Mrs. Lucia Vaz and Dr. Vasudev Dukle. For over 25 years it
              has continuously renewed its commitment to affordable and quality
              diagnostic services. Keeping pace with technological advances, the
              laboratory is equipped with the latest equipments in diagnostic
              medicine. <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PathoLab;
