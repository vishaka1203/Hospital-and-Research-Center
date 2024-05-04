import React, { useState } from 'react';
import './AppointmentForm.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import logo from '../../Components/Assets/logo.png';
import doctors  from '../../data/doctors-ddl.json'
import appointnmentTimes from '../../data/appointnment-times-ddl.json'

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isAppointmentBooked, setIsAppointmentBooked] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const mobileRegex = /^[0-9]{10}$/;

  const [selectedDoctor, setSelectedDoctor] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and phone number
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (!mobileRegex.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsFormValid(true);

    const formData = {
      selectedDate: selectedDate ? selectedDate.toISOString() : null, // Ensure it's not null
      selectedTime,
      name,
      email,
      mobile,
      problemDescription,
    };

    try {
      const response = await fetch('http://localhost:8000/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to book appointment');
      }
      console.log('Appointment booked successfully');
      
      // Send email to the selected doctor
      console.log(selectedDoctor)
      if (selectedDoctor) {
        console.log("TRIGGERED")
        const emailResponse = await fetch('http://localhost:8000/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            doctorEmail: selectedDoctor,
            formData,
          }),
        });

        if (!emailResponse.ok) {
          throw new Error('Failed to send email to doctor');
        }

        console.log('Email sent to doctor successfully');
      }
    } catch (error) {
      alert('Error booking appointment. Please try again later.');
      console.error(error);
    }
  };

  return (
    <div className="appointment-form-content">
      <div style={{ fontSize: '4px' }} className="hospital-heading">
        <img src={logo} alt="Hospital Logo" className="logo-png" />
        <h1>Dr Dukle's Hospital & Research Center</h1>
      </div>
      <h2 className="appointment-heading">Appointment Booking</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-sm-6">
            <input
              type="text"
              className={`form-control border-0 ${
                isFormValid && !name && 'is-invalid'
              }`}
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {isFormValid && !name && (
              <div className="invalid-feedback">Please enter your name.</div>
            )}
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="email"
              className={`form-control border-0 ${
                isFormValid && !emailRegex.test(email) && 'is-invalid'
              }`}
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {isFormValid && !emailRegex.test(email) && (
              <div className="invalid-feedback">
                Please enter a valid email address.
              </div>
            )}
          </div>
          <div className="col-12 col-sm-6">
            <input
              type="tel"
              className={`form-control border-0 ${
                isFormValid && !mobileRegex.test(mobile) && 'is-invalid'
              }`}
              placeholder="Your Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              pattern="[0-9]{10}"
              required
            />
            {isFormValid && !mobileRegex.test(mobile) && (
              <div className="invalid-feedback">
                Please enter a valid 10-digit mobile number.
              </div>
            )}
          </div>

          <div className="col-12 col-sm-6">
            <select
              className="form-select border-0"
              value={selectedDoctor}
              defaultValue={'Select a doctor'}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              required
            >
              {
                doctors.map(
                  doctor =>  (
                    <option 
                      key={doctor.value} 
                      data-color={doctor.displayText} 
                      value={doctor.value}
                    >
                      {doctor.displayText}
                    </option> 
                  )
                )
              }

            </select>
          </div>

          <div className="col-12 col-sm-6">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="form-control border-0"
              placeholderText="Choose Date"
              required
            />
          </div>

          <div className="col-12 col-sm-6">
            <select
              className="form-select border-0"
              value={selectedTime}
              defaultValue={'Choose Time'}
              onChange={(e) => setSelectedTime(e.target.value)}
              required
            >

              {
                appointnmentTimes.map(
                  appointnmentTime =>  (
                    <option 
                      key={appointnmentTime.value} 
                      data-color={appointnmentTime.displayText} 
                      value={appointnmentTime.value}
                    >
                      {appointnmentTime.displayText}
                    </option> 
                  )
                )
              }

            </select>
          </div>
          <div className="col-12">
            <textarea
              className={`form-control border-0 ${
                isFormValid && !problemDescription && 'is-invalid'
              }`}
              rows="5"
              placeholder="Describe your problem"
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              required
            ></textarea>
            {isFormValid && !problemDescription && (
              <div className="invalid-feedback">
                Please describe your problem.
              </div>
            )}
          </div>
          <div className="col-12">
            <button className="btn btn-primary w-100 py-3" type="submit">
              Book Appointment
            </button>
          </div>
          {/* Appointment success notification */}
          {isAppointmentBooked && (
            <div className="col-12">
              <div className="alert alert-success" role="alert">
                Your appointment has been booked successfully. You will receive
                a mail for further details. Thank You.
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
