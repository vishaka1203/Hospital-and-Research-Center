import React from 'react';
import pharmacy from '../Pharmacy/pharmacy.jpg';

const Pharmacy = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${pharmacy})`,
        }}
      ></div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
            <h1 className="heading1">Pharmacy</h1>
            <p
              style={{
                textAlign: 'left',
              }}
            >
              At Dr. Dukle's Hospital and Research Center, we pride ourselves on
              being the premier destination for pharmaceutical services. With a
              commitment to excellence and patient care, our pharmacy is staffed
              with highly skilled professionals who ensure the highest quality
              medications and personalized care for every patient's needs.{' '}
              <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
