import React, { useState } from 'react';
import './PrisonerPage.css'; 
const RequestParole = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    idNumber: '',
    sentenceDetails: '',
    rehabilitationEffort: '',
    behavior: '',
    paroleOfficerContact: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      dob: '',
      idNumber: '',
      sentenceDetails: '',
      rehabilitationEffort: '',
      behavior: '',
      paroleOfficerContact: ''
    });
  };

  return (
    <center>
      <br/><br/><br/>
    <div className='Prisonmanagement-container'>
      
      <h1>Parole Request Form</h1>
      <br/>
      <form onSubmit={handleSubmit}>
        <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        <br /><br/>
        <label>Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
        <br /><br/>
        <label>ID Number: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} required />
        <br /><br/>
        <label>Sentence Details:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <textarea name="sentenceDetails" value={formData.sentenceDetails} onChange={handleChange} required />
        <br /><br/>
        <label>Rehabilitation Effort:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <textarea name="rehabilitationEffort" value={formData.rehabilitationEffort} onChange={handleChange} required />
        <br /><br/>
        <label>Behavior:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <textarea name="behavior" value={formData.behavior} onChange={handleChange} required />
        <br /><br/>
        <label>Parole Officer Contact:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
        <input type="text" name="paroleOfficerContact" value={formData.paroleOfficerContact} onChange={handleChange} required />
        <br /><br/><br/>
        <button type="submit">Submit Parole Request</button>
        <br/><br/><br/><br/>
      </form> 
    </div>
    <br/><br/><br/><br/>
    </center>
  );
};

export default RequestParole;
