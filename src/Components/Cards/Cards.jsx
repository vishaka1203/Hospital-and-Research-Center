// Cards.jsx

import React from 'react';
import './Cards.css';
import { FaMedkit } from 'react-icons/fa';

const specialties = [
  { name: 'Medical' },
  { name: 'Orthopedics & Trauma' },
  { name: 'Ear, Nose & Throat (E.N.T.)' },
  { name: 'Chest & Respiratory Medicine' },
  { name: 'Pathology & Microbiology' },
  { name: 'Dermatology' },
  { name: 'Radiology' },
  { name: 'Urology' },
  { name: 'Plastic Surgery' },
  { name: 'Pediatrics' },
  { name: 'Physiotherapy' },
  { name: 'Anaesthesiology' },
  { name: 'General & Hepatobiliary Surgery' },
  { name: 'Obstetrics, Gynaecology & Laparoscopic Surgery' },
];

const Cards = () => {
  return (
    <div className="container">
      <div className="c-name">
        <span className="header-style">We Specialize in...</span>
      </div>
      <div className="row">
        {specialties.map((specialty, index) => (
          <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="specializecard">
              <div className="card-body">
                <div className="icon-container">
                  <FaMedkit
                    style={{ color: 'white' }}
                    className="medical-icon"
                  />
                </div>
                <h5 className="card-title">{specialty.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
