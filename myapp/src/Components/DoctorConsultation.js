import React, { useState } from 'react';
import './PrisonerPage.css'; 
const DoctorConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    idNumber: '',
    contactInformation: '',
    medicalHistory: '',
    specificConcern: '',
    authorization: false
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSuccessMessage('Request accepted');
    setFormData({
      name: '',
      dob: '',
      idNumber: '',
      contactInformation: '',
      medicalHistory: '',
      specificConcern: '',
      authorization: false
    });
  };

  return (
    <center>
      <br/>
      <br/>
    <div className='doctor-container'>
      <h1>Doctor Consultation</h1>
      <br/><br/>
      <form onSubmit={handleSubmit}>
        <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br /><br/>
        <label>Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <br /><br/>
        <label>ID Number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
        <br /><br/>
        <label>Contact Information:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text" name="contactInformation" value={formData.contactInformation} onChange={handleChange} required />
        <br /><br/>
        <label>Medical History:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} required />
        <br /><br/>
        <label>Specific Concern: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <textarea name="specificConcern" value={formData.specificConcern} onChange={handleChange} required />
        <br /><br /><br/>
        <button style={{color:"#2c3e50"}} type="submit">Request Appointment</button>
        
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
    <br/><br/><br/><br/>
    </center>
  );
};

export default DoctorConsultationForm;
