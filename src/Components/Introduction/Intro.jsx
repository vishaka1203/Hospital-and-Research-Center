import React from 'react';
import './Intro.css';
import banner from '../Assets/banner.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Intro = () => {
  return (
    <div
      className="intro"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${banner})`,
      }}
    >
      <div className="headerContainer">
        <div className="i-name">
          <span className="fadeInAnimation">
            WHAT WE ARE <br />
          </span>

          <span className="fadeInAnimation">
            We are a multi-specialty secondary health care hospital that aims to
            provide <br />
            quality affordable health care to the local population, besides
            attending to the healthcare <br />
            needs of the burgeoning domestic and international tourism industry.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Intro;
