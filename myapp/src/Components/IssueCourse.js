import React, { useState } from 'react';
import axios from 'axios';

const IssueCourse = () => {
  const [formData, setFormData] = useState({
    cid: '',
    cname: '',
    dur: '',
    sdate: '',
    str: ''
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
      // Sending a POST request to the backend API with form data
      const response = await axios.post('http://localhost:8081/AddCourse', formData);
      
      if (response.status === 200) {
        setSuccessMessage('Course issued successfully!');
        setFormData({
          cid: '',
          cname: '',
          dur: '',
          sdate: '',
          str: ''
        });
      } else {
        setErrorMessage('Failed to issue the course.');
      }
    } catch (error) {
      console.error('There was an error issuing the course:', error);
      setErrorMessage('An error occurred while issuing the course.');
    }
  };

  return (
    <center>
      <br/>
      <br/><br/><br/>
      <div style={{border:'2.5px solid black', height:'430px', width:'450px', backgroundColor:'#2c3e50', color:"white"}}>
        <br/> <h1 style={{color:'#e74c3c'}}>Issue Course</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <label>Course ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" name="cid" value={formData.cid} onChange={handleChange} required />
          <br /><br/>
          <label>Course Name:&nbsp;</label>
          <input type="text" name="cname" value={formData.cname} onChange={handleChange} required />
          <br /><br/>
          <label>Duration:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" name="dur" value={formData.dur} onChange={handleChange} required />
          <br /><br/>
          <label>Starting Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="date" name="sdate" value={formData.sdate} onChange={handleChange} required />
          <br/><br/>
          <label>Strength:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="number" name="str" value={formData.str} onChange={handleChange} required />
          <br /><br/>
          <button type="submit" style={{color:"#2c3e50"}}>Submit Request</button><br/><br/>
        </form>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}<br/>
      </div>
      <br/><br/><br/>
    </center>
  );
};

export default IssueCourse;
