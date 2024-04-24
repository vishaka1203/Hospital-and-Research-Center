import React, { useState, useRef } from 'react';
import './OPDschedule.css';

const faqs = [
  {
    id: 1,
    header: 'General Medicine',
    text: (
      <>
        <div>
          <strong>Dr. Vasudev Dukle</strong>
          <p>M.B.B.S. (BOM)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Monday - Friday: <br />
            9:30 am to 2.00 pm
            <br />
            5:30 pm to 8.00 pm
          </p>
        </div>
      </>
    ),
  },
  {
    id: 2,
    header: 'Orthopedics',
    text: (
      <>
        <div>
          <strong>Dr. Vishal Dubhashi</strong>
          <p>M.S. (ORTHO)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Wed and Sat <br />
            5:30 pm to 6.30 pm <hr color="black" />
          </p>
        </div>
        <div>
          <strong>Dr. Shekhar Shirwaikar</strong>
          <p>M.S. , D. (ORTHO)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Tue
            <br />
            9:30 am to 10.30 pm <hr color="black" />
          </p>
        </div>
        <div>
          <strong>Dr. Dattaraj Nachinolkar</strong>
          <p>D.N.B. , D. (ORTHO)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Mon and Sat
            <br />
            9:30 am to 1.00 pm
          </p>
        </div>
      </>
    ),
  },
  {
    id: 3,
    header: 'Orthopaedics & Joint Replacement Surgery',
    text: (
      <>
        <div>
          <strong>Dr. Rohan Dessai</strong>
          <p>M.S. (ORTHO), M.R.C.S. (UK), F.I.A.S. (SINGAPORE, GERMANY)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>By appointments</p>
        </div>
      </>
    ),
  },
  {
    id: 4,
    header: 'Dermatology',
    text: (
      <>
        <div>
          <strong>Dr. Del-Ann Alcasoas Fernandes</strong>
          <p>M.B.B.S., D.V.D.</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>By appointments</p>
        </div>
      </>
    ),
  },
  {
    id: 5,
    header: 'ENT',
    text: (
      <>
        <div>
          <strong>Dr. Rajiv Kamat</strong>
          <p>M.S. (ENT), D.O.R.L. (CPS)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Tue and Thu <br />
            4:00 pm to 6.00 pm
          </p>
        </div>
      </>
    ),
  },
  {
    id: 6,
    header: 'Pulmonary Medicine',
    text: (
      <>
        <div>
          <strong>Dr. Melissa Rodrigues</strong>
          <p>M.D. (PULMONARY MEDICINE)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Wed <br />
            By appointments
          </p>
        </div>
      </>
    ),
  },
  {
    id: 7,
    header: 'General & Hepatobiliary Surgery',
    text: (
      <>
        <div>
          <strong>Dr. Amit Kalangutkar</strong>
          <p>M.S., D.N.B., M.R.C.S. (EDINBURGH), F.R.C.S.(UK)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Fri <br />
            By appointments
          </p>
        </div>
      </>
    ),
  },
  {
    id: 8,
    header: 'Obstetrics, Gynaecology & Laparoscopic Surgery',
    text: (
      <>
        <div>
          <strong>Dr. Vikram Dukle</strong>
          <p>M.B.B.S.,D.G.O.,F.I.G.E</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Mon-Sat (By appointments)
            <br />
            9:00 am to 1.00 pm <br />
            4:00 pm to 7.00 pm
          </p>
        </div>
      </>
    ),
  },
  {
    id: 9,
    header: 'Paediatrics',
    text: (
      <>
        <div>
          <strong>Dr. Poonam Sambhaji</strong>
          <p>M.B.B.S., D.C.H.</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Fri
            <br />
            10.00 am to 11.30 am
          </p>
        </div>
      </>
    ),
  },
  {
    id: 10,
    header: 'Internal Medicines',
    text: (
      <>
        <div>
          <strong>Dr. Vaibhav Dukle</strong>
          <p>M.D. (MEDICINE)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>By Appointments</p>
        </div>
      </>
    ),
  },
  {
    id: 11,
    header: 'Urology',
    text: (
      <>
        <div>
          <strong>Dr. Elphinston Fernandes</strong>
          <p>M.S. (SURGERY), D.N.B. (UROLOGY)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Sat <br />
            By Appointments
          </p>
        </div>
      </>
    ),
  },
  {
    id: 12,
    header: 'Radiology',
    text: (
      <>
        <div>
          <strong>Dr. Chandrashekhar Kelkar</strong>
          <p>M.D., D.N.B. (RADIOLOGY)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Mon and Thu
            <br />
            6.00 am to 6.30 am
          </p>
        </div>
      </>
    ),
  },
  {
    id: 13,
    header: 'Interventional Radiology',
    text: (
      <>
        <div>
          <strong>Dr. Kapil Naik Burye</strong>
          <p>D.M.R.D.,D.N.B. (RADIOLOGY)</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>By appointments</p>
        </div>
      </>
    ),
  },
  {
    id: 14,
    header: 'Physiotherapy',
    text: (
      <>
        <div>
          <strong>Dr. Gitika Khanna</strong>
          <p>B.P.T.</p>
        </div>
        <div className="availability">
          <strong>
            Availability
            <br />
          </strong>
          <p>
            Mon to Sat
            <br />
            By appointments
          </p>
        </div>
      </>
    ),
  },
];

const AccordionItem = (props) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
        >
          <h5 className="rc-accordion-title">{header}</h5>
          <i className="fa fa-chevron-down rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const OPDschedule = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <div className="container-fluid mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-8 mt-2">
          <div className="card">
            <div className="card-body">
              <h4 className="form-heading mb-4 text-primary text-center mt-3">
                OPDschedule
              </h4>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  active={active}
                  handleToggle={handleToggle}
                  faq={faq}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPDschedule;
