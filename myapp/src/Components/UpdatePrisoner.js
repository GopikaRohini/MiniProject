import React, { useState } from 'react';
import axios from 'axios';
import './PrisonerAdmin.css';

const UpdatePrisoner = () => {
  const [prisonerInfo, setPrisonerInfo] = useState({
    pid: '',
    name: '',
    dob: '',
    gender: '',
    height: '',
    weight: '',
    doj: '',
    sentence: '',
    parole: '',
    pwd: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Helper function to validate the form inputs
  const validateForm = () => {
    const { pid, name, dob, gender, height, weight, doj, sentence, parole, pwd } = prisonerInfo;

    // Check if all fields are filled
    if (!pid || !name || !dob || !gender || !height || !weight || !doj || !sentence || !parole || !pwd) {
      return "Please fill in all the fields.";
    }

    // Validate Prisoner ID (must be a positive number)
    if (isNaN(pid) || parseInt(pid) <= 0) {
      return "Prisoner ID must be a positive number.";
    }

    // Validate name (no numbers or special characters)
    if (!/^[a-zA-Z ]+$/.test(name)) {
      return "Name should only contain letters.";
    }

    // Validate DOB and DOJ (ensure valid dates)
    if (new Date(dob) > new Date()) {
      return "Date of Birth cannot be in the future.";
    }
    if (new Date(doj) > new Date()) {
      return "Date of Joining cannot be in the future.";
    }

    // Validate sentence (must be a positive number)
    if (isNaN(sentence) || parseInt(sentence) <= 0) {
      return "Sentence must be a positive number.";
    }

    // Validate parole (must be either 'Yes' or 'No')
    if (parole !== 'Yes' && parole !== 'No') {
      return "Parole must be either 'Yes' or 'No'.";
    }

    return null; // No validation errors
  };

  const handleUpdatePrisoner = async (e) => {
    e.preventDefault();

    // Validate the form before submitting
    const error = validateForm();
    if (error) {
      setErrorMessage(error);
      return;
    }

    try {
      const response = await axios.put('http://localhost:8081/UpdatePrisoner', prisonerInfo);
      if (response.status === 200 && response.data.success) {
        setSuccessMessage('Prisoner updated successfully.');
        setErrorMessage('');
        // Reset form after successful submission
        setPrisonerInfo({
          pid: '',
          name: '',
          dob: '',
          gender: '',
          height: '',
          weight: '',
          doj: '',
          sentence: '',
          parole: '',
          pwd: ''
        });
      } else {
        setErrorMessage('Failed to update prisoner.');
      }
    } catch (error) {
      console.error('Error updating prisoner:', error);
      setErrorMessage('Error updating prisoner.');
    }
  };

  return (
    <center>
      <div className="u-main">
        <div className="u-container" style={{backgroundColor:' #2c3e50',color:'white',height:'700px'}}>
          <form onSubmit={handleUpdatePrisoner}>
            <h2 style={{color:' #e74c3c'}}><u>Update Prisoner</u></h2>
            <br/>
            <label><b>Prisoner ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="number"
              placeholder="ID Number"
              value={prisonerInfo.pid}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, pid: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
              placeholder="Name"
              value={prisonerInfo.name}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, name: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="date"
              value={prisonerInfo.dob}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, dob: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <label>
              Male
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={prisonerInfo.gender === 'Male'}
                onChange={(e) => setPrisonerInfo({ ...prisonerInfo, gender: e.target.value })}
              />
            </label>
            <label>
              Female
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={prisonerInfo.gender === 'Female'}
                onChange={(e) => setPrisonerInfo({ ...prisonerInfo, gender: e.target.value })}
              />
            </label>
            <br/><br/>
            <label><b>Height:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
              placeholder="Height"
              value={prisonerInfo.height}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, height: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Weight:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
              placeholder="Weight"
              value={prisonerInfo.weight}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, weight: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Date of Joining:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="date"
              value={prisonerInfo.doj}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, doj: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Sentence:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="number"
              placeholder="Sentence"
              value={prisonerInfo.sentence}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, sentence: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Parole:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
              placeholder="Parole"
              value={prisonerInfo.parole}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, parole: e.target.value })}
              required
            />
            <br/><br/>
            <label><b>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="password"
              placeholder="Password"
              value={prisonerInfo.pwd}
              onChange={(e) => setPrisonerInfo({ ...prisonerInfo, pwd: e.target.value })}
              required
            />
            <br/><br/><br/>
            <button type="submit" style={{ backgroundColor: 'white', fontSize: '25px', color: '#2c3e50', borderRadius: '10px' }}>&nbsp;&nbsp;<b>Update</b>&nbsp;&nbsp;</button>&nbsp;&nbsp;
            {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red', marginTop: '20px' }}>{errorMessage}</p>}
            <br/><br/> 
          </form>
        </div>
      </div>
    </center>
  );
};

export default UpdatePrisoner;
