import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const IssueRequest = () => {
  const [formData, setFormData] = useState({
    rid: '',
    pid: '',
    type: '',
    status: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await axios.post('http://localhost:8081/IssueRequest', formData);

      if (response.status === 200) {
        setSuccessMessage('Request accepted');
        setErrorMessage('');
        // Reset form after submission
        setFormData({
          rid: '',
          pid: '',
          type: '',
          status: '',
        });
      } else {
        setErrorMessage('Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting request:', error);
      setErrorMessage('An error occurred while submitting the request');
    }
  };

  return (
    <center>
      <br />
      <br /><br /><br />
      <div style={{ border: '2.5px solid black', height: '430px', width: '450px', backgroundColor: '#2c3e50', color: "white" }}>
        <br /> <h1 style={{ color: '#e74c3c' }}>Issue Request</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <label>Request ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" name="rid" value={formData.rid} onChange={handleChange} required />
          <br /><br />
          <label>Prisoner ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" name="pid" value={formData.pid} onChange={handleChange} required />
          <br /><br />
          <label>Request Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="type" value={formData.type} onChange={handleChange} required />
          <br /><br />
          <label>Status:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" name="status" value={formData.status} onChange={handleChange} required />
          <br /> <br /><br />
          <button type="submit" style={{ color: "#2c3e50" }}>Submit Request</button>
        </form>
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </div>
      <br /><br /><br /><br /><br />
    </center>
  );
};

export default IssueRequest;
