import React from 'react';
import './Testimonial.css';
import dr from '../Assets/dr.jpg';
import banner2 from '../Assets/banner2.jpg';

const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner2})`,
      }}
    >
      <div className="t-left">
        <img src={dr} alt="" />
      </div>
      <div className="t-right">
        <span className="text-style">
          Dr. Dukle’s Hospital & Research Centre was established in October
          2010.
        </span>
        <span className="text-style2">
          The hospital also aims to build on the emergent possibilities of
          clinical research, preventive medicine and medical tourism.
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
