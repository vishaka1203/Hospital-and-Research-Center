import React from 'react';
import patho1 from '../PathoLab/patho1.jpeg';

const PathoLab = () => {
  return (
    <div
      class="container-xxl py-5"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${patho1})`,
      }}
    >
      <div class="container">
        <div
          class="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <p
            style={{ color: 'white' }}
            class="d-inline-block border rounded-pill py-1 px-4"
          >
            Patho Lab in Candolim
          </p>
          <h1>Patho Lab</h1>

          <p
            style={{ textAlign: 'left', fontFamily: 'poppins', color: 'white' }}
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
  );
};

export default PathoLab;
