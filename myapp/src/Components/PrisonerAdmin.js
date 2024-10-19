import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PrisonerAdmin.css';
const PrisonerAdmin = () => {
  const handleRequestChange = (e) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value;
    }
  };
  

  return (

   <div className="ptask">
      <div className="header">
       
</div>

      <div className="ptask-links">
      <br/><br/><br/><br/><br/>
        <ul style={{listStyleType:"none"}}>
        <button className='custom-button'> <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/ApplyForJobs"><b> Apply Job</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></button> 
        <br/><br/><br/><br/><br/>
        <button className='custom-button'style={{color: "#2c3e50" }}> <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/IssueRequest"><b> Issue Request</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li></button> 
        <br/><br/><br/><br/><br/>
        <div className="approverequest-links-container">
          
          <button className="custom-button">
            <li>
              
              <select onChange={handleRequestChange} className="approverequest-dropdown" style={{ marginLeft: "12px",color: "#2c3e50"}}>
                <option value=""><b><strong>Select Request</strong></b></option>
               <option value="/DoctorConsultationForm">Doctor Consultation</option>
                <option value="/RequestParole">Parole Request</option>
              </select>
            </li>
          </button>
    </div>
    <br/><br/><br/><br/>
          <button className= "custom-button">  <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/Enrolling"><b> Enrolling &nbsp;</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li> </button>
          <br/> <br/> <br/> <br/><br/>
        </ul>
      </div>
      <br/><br/><br/><br/>
    </div>
    
  );
};

export default PrisonerAdmin;
