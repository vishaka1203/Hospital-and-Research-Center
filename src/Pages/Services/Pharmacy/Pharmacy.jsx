import React from 'react';
import pharmacy from '../Pharmacy/pharmacy.jpg';

const Pharmacy = () => {
  return (
    <div
      class="container-xxl py-5"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${pharmacy})`,
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
            Services
          </p>
          <h1>Pharmacy</h1>
          <p
            style={{ textAlign: 'left', fontFamily: 'poppins', color: 'white' }}
          >
            At Dr. Dukle's Hospital and Research Center, we pride ourselves on
            being the premier destination for pharmaceutical services. With a
            commitment to excellence and patient care, our pharmacy is staffed
            with highly skilled professionals who ensure the highest quality
            medications and personalized care for every patient's needs. <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
