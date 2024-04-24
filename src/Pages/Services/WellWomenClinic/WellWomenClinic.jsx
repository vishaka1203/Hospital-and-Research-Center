import React from 'react';
import './WellWomenClinic.css';
import wellwomenclinic from '../WellWomenClinic/wellwomenclinic.jpg';

const WellWomenClinic = () => {
  return (
    <div className="wrapper">
      <div
        className="banner"
        style={{
          backgroundImage: ` url(${wellwomenclinic})`,
        }}
      ></div>
      <div
        className="container-xxl py-5"
        // style={{
        //   backgroundImage: `linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${wellwomenclinic},)`,
        // }}
      >
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Services
            </p>
            <h1 className="heading1">Well Woman Clinic</h1>
            <p
              style={{
                textAlign: 'left',
                fontFamily: 'poppins',
              }}
            >
              Women at all stages of life, from early teens to menopause and
              beyond will experience a variety of hormonal, medical, physical
              and emotional conditions that require attention and care. <br />
              <br />
              Dr. Dukle’s Well Woman Clinic deals specifically with medical
              issues related to women. A one-stop health-care facility focused
              for women. Well Woman Clinic is designed exclusively to provide
              women with a same-day health-care service.
              <br />
              <br />
              Dr. Dukle’s Well Woman Clinic provides well-defined, affordable
              consultations and diagnostic procedures; routine wellness
              examinations and health care screenings; and the evaluation and
              treatment of numerous medical problems of special concern to
              women. As well as, accommodating patients seeking second opinions.
              <br />
              <br />
              We offer all services you will need through pregnancy. All of your
              antenatal appointments, scans, blood tests and advice.
              <br />
              <br />
              Based on international standards of evidence based clinical
              protocols Well Woman Clinic provides medical and surgical
              solutions for a varied gynaecological problems like menstrual
              abnormalities, infertility, prolapsed uterus, fibroids, other
              tumours of the uterus and ovaries and also has well developed
              protocols for teenage menstrual cycle issues, counselling support
              and interdisciplinary cohesive consultation for hormonal issues
              such as thyroid, polycystic ovarian disorders, etc.
              <br />
              <br />
              Well Woman Clinic is dedicated for cervical cancer diagnosis,
              prevention and vaccination. The clinic offers comprehensive
              medical expertise and awareness material to the woman of today to
              safeguard herself from the growing incidences.
              <br />
              <br />
              Well Woman Clinic specializes in providing comprehensive treatment
              for infertility & Reproductive Medicine and are adept to perform
              surgeries through laparoscopic and minimal invasive surgical
              technique.
            </p>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-heartbeat text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Maternity & Delivery</h4>
                <p className="mb-4">
                  Exceptional care for mothers and newborns, ensuring safe
                  deliveries.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-heartbeat text-primary fs-4"></i>
                </div>
                <h4 className="mb-3">Postnatal Care</h4>
                <p className="mb-4">
                  Comprehensive care for new mothers and infants after
                  childbirth.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-brain text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Adolescent Clinic</h4>
                <p className="mb-4">
                  Expert care for teens' health needs, fostering healthy
                  transitions.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Fibroid Clinic </h4>
                <p className="mb-4">
                  Specialized care for diagnosis and treatment of uterine
                  fibroids.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Menopause Clinic</h4>
                <p className="mb-4">
                  Comprehensive care for women's menopausal health needs.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Infertility Clinic</h4>
                <p className="mb-4">
                  Advanced treatments and support for overcoming fertility
                  challenges
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Laparoscopy & Hysteroscopy</h4>
                <p className="mb-4">
                  Minimally invasive procedures for precise diagnosis and
                  treatment.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Gynaec Surgeries</h4>
                <p className="mb-4">
                  State-of-the-art surgical solutions enhancing women's health
                  and well-being.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Sonography</h4>
                <p className="mb-4">
                  Diagnostic imaging method using sound waves for precise
                  medical evaluation.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Well Woman Health Check</h4>
                <p className="mb-4">
                  Comprehensive health assessment tailored for women's
                  well-being.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Pre-conceptional Counselling</h4>
                <p className="mb-4">
                  Guidance for planning pregnancy and optimizing health
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Family Planning</h4>
                <p className="mb-4">
                  Supporting informed decisions for family size and reproductive
                  health choices.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Cosmetic Gynaecology</h4>
                <p className="mb-4">
                  Enhancing gynaecological aesthetics and function with
                  precision procedures.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: '65px', height: '65px' }}
                >
                  <i className="fa fa-wheelchair text-primary fs-4"></i>
                </div>

                <h4 className="mb-3">Cervical Cancer Detection Centre</h4>
                <p className="mb-4">
                  Center for precise detection and treatment of cervical cancer.
                </p>
                <a className="btn" href="">
                  <i className="fa fa-plus text-primary me-3"></i>Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellWomenClinic;
