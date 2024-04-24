import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import medical from '../Assets/medical.jpg';
import orthopedics from '../Assets/orthopedics.jpg';
import ent from '../Assets/ent.jpg';
import respiratory from '../Assets/respiratory.jpg';
import pathology from '../Assets/pathology.jpg';
import dermatology from '../Assets/dermatology.jpg';
import radiology from '../Assets/radiology.jpg';
import surgery from '../Assets/surgery.jpg';
import generalsurgery from '../Assets/generalsurgery.jpg';
import urology from '../Assets/urology.jpeg';
import plasticsurgery from '../Assets/plasticsurgery.jpg';
import pediatrics from '../Assets/pediatrics.jpg';
import physiotherapy from '../Assets/physiotherapy.jpg';
import anaesthesiology from '../Assets/anaesthesiology.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'black',
      }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ height: '77vh' }} className="container">
      <div className="c-name">
        <span
          className="header-style"
          style={{
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            color: '#20A0D8',
            fontSize: '2.1rem',
            paddingBottom: '20px',
            marginTop: '-40px',
          }}
        >
          <br />
          We Specialize in...
        </span>
      </div>
      <Slider
        {...settings}
        className="carousel-slider"
        style={{ height: '40vh', width: 'auto' }}
      >
        <div className="card">
          <img
            src={medical}
            alt=""
            className="w-100"
            style={{
              height: '180px',
              width: '240',
              display: 'inline-block',
              marginRight: '20px',
            }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Medical
            </span>
          </div>
        </div>

        <div className="card">
          <img
            src={orthopedics}
            alt=""
            className="w-100"
            style={{
              height: '180px',
              width: '220px',
            }}
          />

          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Orthopedics & Trauma
            </span>
          </div>
        </div>

        <div className="card">
          <img
            src={ent}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Ear, Nose & Throat (E.N.T.)
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={respiratory}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              Chest & Respiratory Medicine
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={pathology}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Pathology & Microbiology
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={dermatology}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Dermatology
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={radiology}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Radiology
            </span>
          </div>
        </div>

        <div className="card">
          <img
            src={urology}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Urology
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={plasticsurgery}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              {' '}
              Plastic Surgery
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={pediatrics}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Pediatrics
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={physiotherapy}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Physiotherapy
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={anaesthesiology}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Anaesthesiology
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={generalsurgery}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span style={{ fontWeight: 'bold', fontSize: '1rem' }}>
              General & Hepatobiliary Surgery
            </span>
          </div>
        </div>
        <div className="card">
          <img
            src={surgery}
            alt=""
            className="w-100"
            style={{ height: '180px', width: '220px' }}
          />
          <div
            className="card-body"
            style={{ background: '#FAFAFA', textAlign: 'center' }}
          >
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              Obstetrics, Gynaecology & Laparoscopic Surgery
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
