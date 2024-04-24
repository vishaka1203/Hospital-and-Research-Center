import React from 'react';
import healthchecks from '../HealthChecks/healthchecks.jpg';

const HealthChecks = () => {
  return (
    <div
      className="container-xxl py-5"
      style={{
        backgroundImage: `linear-gradient( rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${healthchecks})`,
      }}
    >
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <p
            style={{ color: 'white' }}
            className="d-inline-block border rounded-pill py-1 px-4"
          >
            Preventive Health Checks
          </p>
          <h1>Health Checks</h1>
          <p
            style={{ textAlign: 'left', fontFamily: 'poppins', color: 'white' }}
          >
            Prevention is better than cure. Many diseases such as diabetes,
            hypertension, heart disease and cancer have no specific signs or
            symptoms early in their course. A preventive health check can help
            you assess your current health status and detect early warning signs
            of disease and its complications. <br />
            <br />
            This also serves as a baseline medical record for any future
            reference. You can choose from our customized plans or consult your
            physician to suggest a plan for you. The program can be tailored to
            meet your needs and focused health checks are available to help
            screen for complications of these specific diseases.
            <br />
          </p>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Basic Health Check</h4>
              <p className="mb-4">
                Comprehensive basic health checkup covering key aspects of
                wellness and prevention.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-heartbeat text-primary fs-4"></i>
              </div>
              <h4 className="mb-3">Pre Employment Health Check</h4>
              <p className="mb-4">
                Pre-employment health assessment for applicants.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-brain text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Hypertension Health Check</h4>
              <p className="mb-4">
                Specialized checkup for hypertension management and preventive
                care measures.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-wheelchair text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Diabetes Health Check </h4>
              <p className="mb-4">
                Specialized diabetes screenings for optimal health management.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-wheelchair text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Senior Citizen Health Check</h4>
              <p className="mb-4">
                Comprehensive health assessments tailored for senior citizens'
                well-being.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-wheelchair text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Well Woman Health Check</h4>
              <p className="mb-4">
                Comprehensive health evaluations designed specifically for
                women's overall well-being.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: '65px', height: '65px' }}
              >
                <i className="fa fa-wheelchair text-primary fs-4"></i>
              </div>

              <h4 className="mb-3">Master Health Check</h4>
              <p className="mb-4">
                A thorough health assessment covering various aspects for
                comprehensive well-being.
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthChecks;
