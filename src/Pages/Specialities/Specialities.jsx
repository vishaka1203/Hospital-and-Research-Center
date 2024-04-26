import React, { useState, useRef } from 'react';
import './Specialities.css';

const faqs = [
  {
    id: 1,
    header: 'General Medicine',
    text: (
      <>
        <strong>Dr. Vasudev Dukle</strong>
        <p> M.B.B.S. (BOM)</p>
      </>
    ),
  },
  {
    id: 2,
    header: 'Internal Medicine & Endocrinology',
    text: (
      <>
        <strong>Dr. Vaibhav Dukle</strong>
        <p>M.D. (MEDICINE)</p>
      </>
    ),
  },
  {
    id: 3,
    header: 'General & Hepatobiliary Surgery',
    text: (
      <>
        <strong>Dr. Amit Kalangutkar</strong>
        <p>M.S., D.N.B., M.R.C.S. (EDINBURGH), F.R.C.S.(UK)</p>
      </>
    ),
  },
  {
    id: 4,
    header: 'Orthopedics',
    text: (
      <>
        <strong>Dr. Vishal Dubhashi</strong>
        <p>M.S. (ORTHO)</p>
        <strong>Dr. Shekhar Shirwaikar</strong>
        <p>M.S. , D. (ORTHO)</p>
        <strong>Dr. Rohan Dessai</strong>
        <p>M.S. (ORTHO), M.R.C.S. (UK), F.I.A.S. (SINGAPORE, GERMANY)</p>
        <strong>Dr. Dattaraj Nachinolkar</strong>
        <p>D.N.B. , D. (ORTHO)</p>
      </>
    ),
  },
  {
    id: 5,
    header: 'Obstetrics, Gynaecology & Laparoscopic Surgery',
    text: (
      <>
        <strong>Dr. Vikram Dukle</strong>
        <p>M.B.B.S.,D.G.O.,F.I.G.E</p>
        <strong>Dr. Vinay Kamat</strong>
        <p>M.D. (OBG)</p>
      </>
    ),
  },
  {
    id: 6,
    header: 'Urology',
    text: (
      <>
        <strong>Dr. Elphinston Fernandes</strong>
        <p>M.S. (SURGERY), D.N.B. (UROLOGY)</p>
      </>
    ),
  },
  {
    id: 7,
    header: 'Plastic Surgery',
    text: (
      <>
        <strong>Dr. Manish Patel</strong>
        <p>M.C.H (Plastic Surgery)</p>
      </>
    ),
  },
  {
    id: 8,
    header: 'ENT',
    text: (
      <>
        <strong>Dr. Rajiv Kamat</strong>
        <p>M.S. (ENT), D.O.R.L. (CPS)</p>
      </>
    ),
  },
  {
    id: 9,
    header: 'Anaesthesiology',
    text: (
      <>
        <strong>Dr. Nimisha Dukle</strong>
        <p>M.D. , D.N.B. (Anaesthesia)</p>
        <strong>Dr. Bernadette Dabholkar</strong>
        <p>M.D. (Anaesthesia)</p>
        <strong>Dr. Hemchandra Mainkar</strong>
        <p>M.B.B.S. , DA. , IDCCM</p>
        <strong>Dr. Nikhil Bhoomkar</strong>
        <p>M.D. (Anaesthesia)</p>
      </>
    ),
  },
  {
    id: 10,
    header: 'Paediatrics',
    text: (
      <>
        <strong>Dr. Poonam Sambhaji</strong>
        <p>M.B.B.S., D.C.H.</p>
      </>
    ),
  },
  {
    id: 11,
    header: 'Radiology',
    text: (
      <>
        <strong>Dr. Chandrashekhar Kelkar</strong>
        <p>M.D., D.N.B. (RADIOLOGY)</p>
      </>
    ),
  },
  {
    id: 12,
    header: 'Interventional Radiology',
    text: (
      <>
        <strong>Dr. Kapil Naik Burye</strong>
        <p>D.M.R.D.,D.N.B. (RADIOLOGY)</p>
      </>
    ),
  },
  {
    id: 13,
    header: 'Respiratory Medicine',
    text: (
      <>
        <strong>Dr. Melissa Rodrigues</strong>
        <p>M.D. (PULMONARY MEDICINE)</p>
      </>
    ),
  },
  {
    id: 14,
    header: 'Dermatology',
    text: (
      <>
        <strong>Dr. Del-Ann Alcasoas Fernandes</strong>
        <p>M.B.B.S., D.V.D.</p>
      </>
    ),
  },
  {
    id: 15,
    header: 'Cardiology',
    text: (
      <>
        <strong>Dr. Jyoti Kusnur</strong>
        <p>M.D. (General Medicine) , D.N.B. (Cardiology)</p>
        <strong>Dr. Jaques Costa Ana Karina De Erasmo</strong>
        <p>M.D. (Cardiology)</p>
      </>
    ),
  },
  {
    id: 16,
    header: 'Physiotherapy',
    text: (
      <>
        <strong>Dr. Gitika Khanna</strong>
        <p>B.P.T.</p>
      </>
    ),
  },
  {
    id: 17,
    header: 'Microbiology',
    text: (
      <>
        <strong>Dr. Gauri Dukle</strong>
        <p>M.D. (Microbiology)</p>
        <strong>Mrs. Lucia Vaz</strong>
        <p>B.Sc. (Microbiology)</p>
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
          <h4 className="rc-accordion-title">{header}</h4>
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

const Specialities = () => {
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
                Specialities
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

export default Specialities;
