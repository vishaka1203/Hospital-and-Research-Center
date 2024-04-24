import React from 'react';
import './Gallery.css';
import img1 from '../Gallery/img1.jpeg';
import img2 from '../Gallery/img2.jpeg';
import img3 from '../Gallery/img3.jpeg';
import img4 from '../Gallery/img4.jpeg';
import img5 from '../Gallery/img5.jpeg';
import img6 from '../Gallery/img6.jpeg';
import img7 from '../Gallery/img7.jpeg';
import img8 from '../Gallery/img8.jpeg';
import img9 from '../Gallery/img9.jpeg';
import img11 from '../Gallery/img11.jpeg';
import img12 from '../Gallery/img12.jpeg';

const Gallery = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="card-columns">
            <div className="card card-pin">
              <img className="card-img" src={img1} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img2} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img3} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img3} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img4} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img5} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img6} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img7} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img8} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img9} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img11} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
            <div className="card card-pin">
              <img className="card-img" src={img12} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
