import React from 'react';
import ar from '../AcademicsResearch/academicsresearch.jpg';

const AcademicsResearch = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${ar})`,
        }}
      ></div>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p
              style={{
                fontSize: '2rem',
                background:
                  'linear-gradient(90deg, rgba(242,244,245,1) 0%, rgba(241,241,241,1) 75%)',
              }}
              className="d-inline-block border rounded-pill py-1 px-4"
            >
              Academics and Research
            </p>
            <h1 className="heading1">Training</h1>

            <p
              style={{
                textAlign: 'left',
                fontFamily: 'poppins',
              }}
            >
              <br /> DHRC has been collaborating to support clinical research.
              We offer short term observership and internship programmes The
              integration of the treatment for common mental disorders in
              primary care: experiences of health care providers in the MANAS
              trial in Goa, India <br /> A clinical trial to evaluate the
              efficacy and safety of Rifamycin SV-MMX® compared to Ciprofloxacin
              in the treatment of acute infectious diarrhoea in travellers
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-user-md text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Physician assist</h4>
                <p className="mb-4">
                  Short-term observerships & internships for aspiring physician
                  assistants. Join us!
                </p>

                <i className="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-microscope text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Laboratory Medicine</h4>
                <p className="mb-4">
                  Short-term lab medicine observerships & internships. Gain
                  valuable experience!
                </p>

                <i className="fa fa-minus text-primary me-3"></i>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-custom rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-user-nurse text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Nursing</h4>
                <p className="mb-4">
                  Short-term nursing observerships & internships. Enhance your
                  nursing skills!
                </p>
                <a className="btn" href="">
                  <i className="fa fa-minus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
          </div>
          {/* Accordion section */}
        </div>
      </div>
    </div>
  );
};

export default AcademicsResearch;
