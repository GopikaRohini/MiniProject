import React from 'react';

const VisitationRequest = () => {

  const handleSubmit = () => {
    alert("Request Submited");
  }
  const handleReject = () => {
    alert("Request Rejected");
  }
  return (
    <center>
      <br/>
      <br/><br/>
    <div className='visitation-container' style={{border:'2.5px solid black',height:'300px',width:'500px',backgroundColor:' #2c3e50'}}>
      
     <br/> <br/><h1 style={{color:'#e74c3c'}}>Visitation Request</h1>
      <br/>
      <button onClick={handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={handleReject}>Reject</button>
    </div>
    </center>
  );
};

export default VisitationRequest;
