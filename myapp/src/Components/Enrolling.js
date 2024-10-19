import React, { useState } from 'react';
import './PrisonerPage.css'; 

const Enrolling = () => {
  const [formData, setFormData] = useState({
    lifeSkill: false,
    mentalHealthProgram: false,
    parentingAndFamilyProgram: false,
    substanceAbuseProgram: false,
    jobTraining: false
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if at least one program is selected
    const isSelected = Object.values(formData).some(value => value === true);

    if (!isSelected) {
      setErrorMessage('Please select at least one program before submitting');
      return;
    }

    // If at least one program is selected, proceed with form submission
    setErrorMessage(''); // Clear error message if form is valid
    console.log(formData);
    setSuccessMessage('Application accepted successfully');

    // Reset form after submission
    setFormData({
      lifeSkill: false,
      mentalHealthProgram: false,
      parentingAndFamilyProgram: false,
      substanceAbuseProgram: false,
      jobTraining: false
    });
  };

  return (
    <center>
      <br/><br/><br/><br/><br/>
      <div className='enrolling-container'>
        <h1>Enrolling</h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <label> Life Skill:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="lifeSkill" checked={formData.lifeSkill} onChange={handleChange} />
          </label>
          <br /><br/>
          <label>Mental Health Program:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="mentalHealthProgram" checked={formData.mentalHealthProgram} onChange={handleChange} />
          </label>
          <br /><br/>
          <label>Parenting and Family Program:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="parentingAndFamilyProgram" checked={formData.parentingAndFamilyProgram} onChange={handleChange} />
          </label>
          <br /><br/>
          <label>Substance Abuse Program:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="substanceAbuseProgram" checked={formData.substanceAbuseProgram} onChange={handleChange} />
          </label>
          <br /><br/>
          <label>Job Training:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="jobTraining" checked={formData.jobTraining} onChange={handleChange} />
          </label>
          <br />
          <br/><br/>
          <button type="submit">&nbsp;Apply&nbsp;</button>
        </form>

        {/* Display error message if no program is selected */}
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

        {/* Display success message on form submission */}
        {successMessage && <p style={{ color: 'white' }}>{successMessage}</p>}
      </div>
      <br/><br/><br/><br/><br/><br/>
    </center>
  );
};

export default Enrolling;
