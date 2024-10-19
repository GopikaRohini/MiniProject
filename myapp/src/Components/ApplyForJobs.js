import React, { useState } from 'react';
import './JailorAdmin.css';
import axios from 'axios';

const Job = () => {
  const [jobInfo, setJobInfo] = useState({
    jobid: '',
    name: '',
    salary: '',
    sdate: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation function
  const validateForm = () => {
    let formErrors = {};
    if (!jobInfo.jobid.trim()) formErrors.jobid = 'Job id is required';
    if (!jobInfo.name.trim()) formErrors.name = 'Responsibilities are required';
    if (!jobInfo.salary.trim()) formErrors.salary = 'Duration is required';
    if (!jobInfo.sdate.trim()) formErrors.sdate = 'Qualification is required';

    return formErrors;
  };

  // Handle form submission
  const handleAddJob = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({}); // Clear errors if validation passes

      try {
        const response = await axios.post('http://localhost:8081/AddJob', jobInfo); // Update with your actual backend URL

        if (response.status === 200) {
          setSuccessMessage('Job added successfully!');
          setErrorMessage('');
          setJobInfo({ jobid: '', name: '', salary: '', sdate: '' }); // Clear form after success
        } else {
          setErrorMessage('Failed to add the job.');
        }
      } catch (error) {
        console.error('Error adding job:', error);
        setErrorMessage('An error occurred while adding the job.');
      }
    }
  };

  return (
    <center>
      <div className='job-main'>
        <br /><br /><br /><br />
        <div className='job-container'>
          <br /><br /><br />
          <form onSubmit={handleAddJob}>
            <h2><b>Add Job</b></h2>
            <br />
            <label><b>Job ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="number"
              value={jobInfo.jobid}
              onChange={(e) => setJobInfo({ ...jobInfo, jobid: e.target.value })}
              required
            />
            {errors.jobid && <p className="error">{errors.jobid}</p>}
            <br /><br />
            <label><b>Job Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
          
              value={jobInfo.name}
              onChange={(e) => setJobInfo({ ...jobInfo, name: e.target.value })}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
            <br /><br />
            <label><b>Salary:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="salary"
              value={jobInfo.salary}
              onChange={(e) => setJobInfo({ ...jobInfo, salary: e.target.value })}
              required
            />
            {errors.salary && <p className="error">{errors.salary}</p>}
            <br /><br />
            <label><b>Starting Date:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="date"
        
              value={jobInfo.sdate}
              onChange={(e) => setJobInfo({ ...jobInfo, sdate: e.target.value })}
              required
            />
            {errors.sdate && <p className="error">{errors.sdate}</p>}
            <br /><br /><br />
            <button type="submit">Add Job</button>
          </form>

          {successMessage && <p className="success">{successMessage}</p>}
          {errorMessage && <p className="error">{errorMessage}</p>}
          <br /><br /><br /><br />
        </div>
      </div>
    </center>
  );
};

export default Job;
