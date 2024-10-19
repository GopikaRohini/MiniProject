import React from 'react';

const MedicationRequest = () => {
  const handleSubmit = () => {
    alert("Request Submited");
  }
  const handleReject = () => {
    alert("Request Rejected");
  }
  return (
    <center>
      <br/>
      <br/>
      <br/>
    <div className='medication-container' style={{border:'2.5px solid black',height:'300px',width:'500px',backgroundColor:'#2c3e50'}}>
     <br/><br/>
      <h1 style={{color:"#e74c3c"}}>Medication Request</h1>
      <br/>
      <button style={{color: "#2c3e50"}} onClick={handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button style={{color: "#2c3e50"}} onClick={handleReject}>Reject</button>
    </div>
    </center>
  );
};

export default MedicationRequest;
