import React from 'react';
import diagnosis from '../Diagnostics/diagnosis.jpg';
import './Diagnostics.css';
import d1 from '../Diagnostics/d1.jpg';
import d2 from '../Diagnostics/d2.jpg';
import d3 from '../Diagnostics/d3.jpg';

const Diagnostics = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${diagnosis})`,
        }}
      ></div>
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p class="d-inline-block border rounded-pill py-1 px-4">Services</p>
            <h1 className="heading1">Diagnostics</h1>
            <p
              style={{
                textAlign: 'left',
              }}
            >
              <br />
              Dr. Dukle's Hospital and Research Center stands as a beacon of
              excellence in diagnostics, offering unparalleled services. With
              state-of-the-art technology and a team of expert professionals, we
              provide accurate and timely diagnostics, ensuring the highest
              standard of care for our patients' health and well-being. <br />
              <br />
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-x-ray text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">Digital XRAY</h4>
                <p class="mb-4">
                  See through with precision: Discover our cutting-edge Digital
                  XRAY services today.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-laptop-medical text-primary fs-4"></i>
                </div>
                <h4 class="mb-3">Ultrasonography</h4>
                <p class="mb-4">
                  Discover clarity and precision with our state-of-the-art
                  Ultrasonography services!
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-laptop text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">Colour Doppler</h4>
                <p class="mb-4">
                  Experience the power of precision with our cutting-edge Color
                  Doppler.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-female text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">Sonomammography</h4>
                <p class="mb-4">
                  Precision meets care: Experience our advanced Sonomammography
                  services for comprehensive breast health.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-brain text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">Stress Test</h4>
                <p class="mb-4">
                  Unlock your heart's health: Discover our Stress Test service
                  for cardiac wellness.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-heartbeat text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">ECHO</h4>
                <p class="mb-4">
                  Listen to your heart: Experience our ECHO service for
                  comprehensive cardiac assessment.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-laptop-medical text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">Spirometry</h4>
                <p class="mb-4">
                  Breathe easy with our Spirometry service: Precision testing
                  for respiratory health.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-heartbeat text-primary fs-4"></i>
                </div>

                <h4 class="mb-3">ECG</h4>
                <p class="mb-4">
                  Monitoring hearts with precision: Our ECG service ensures
                  cardiac health.
                </p>

                <i class="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="card-columns">
            <div className="card card-pin">
              <img className="card-img" src={d1} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>

            <div className="card card-pin">
              <img className="card-img" src={d2} alt="Card image" />
              <div className="overlay">
                <div className="more"></div>
              </div>
            </div>

            <div className="card card-pin">
              <img className="card-img" src={d3} alt="Card image" />
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

export default Diagnostics;
