import React from 'react';

const AcademicsResearch = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Academics and Research
          </p>
          <h1>Training</h1>
          <h6>We offer short term observership and internship programmes</h6>
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

              <h4 className="mb-3">Physician assist</h4>
              <p className="mb-4">
                Short-term observerships & internships for aspiring physician
                assistants. Join us!
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
              <h4 className="mb-3">Laboratory Medicine</h4>
              <p className="mb-4">
                Short-term lab medicine observerships & internships. Gain
                valuable experience!
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

              <h4 className="mb-3">Nursing</h4>
              <p className="mb-4">
                Short-term nursing observerships & internships. Enhance your
                nursing skills!
              </p>
              <a className="btn" href="">
                <i className="fa fa-plus text-primary me-3"></i>Read More
              </a>
            </div>
          </div>
        </div>
        {/* Accordion section */}
        <div className="accordion mt-5" id="accordionExample">
          {/* Accordion Item 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                DHRC has been collaborating to support clinical research.
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The integration of the treatment for common mental disorders in
                primary care: experiences of health care providers in the MANAS
                trial in Goa, India
              </div>
              <div className="accordion-body">
                ERASE: A clinical trial to evaluate the efficacy and safety of
                Rifamycin SV-MMX® compared to Ciprofloxacin in the treatment of
                acute infectious diarrhoea in travellers
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicsResearch;
