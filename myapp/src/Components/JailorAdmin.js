import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './JailorAdmin.css';

const JailorAdmin = () => {
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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const validate = () => {
    const validationErrors = {};

    if (!prisonerInfo.pid.trim()) {
      validationErrors.pid = "Prisoner ID is required";
    } else if (!/^\d+$/.test(prisonerInfo.pid)) {
      validationErrors.pid = "Prisoner ID must be a number";
    }

    if (!prisonerInfo.name.trim()) {
      validationErrors.name = "Name is required";
    } else if (prisonerInfo.name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    }

    if (!prisonerInfo.dob.trim()) {
      validationErrors.dob = "Date of Birth is required";
    }

    if (!prisonerInfo.gender) {
      validationErrors.gender = "Gender is required";
    }

    if (!prisonerInfo.height.trim()) {
      validationErrors.height = "Height is required";
    }

    if (!prisonerInfo.weight.trim()) {
      validationErrors.weight = "Weight is required";
    }

    if (!prisonerInfo.doj.trim()) {
      validationErrors.doj = "Date of Joining is required";
    }

    if (!prisonerInfo.sentence.trim()) {
      validationErrors.sentence = "Sentence duration is required";
    } else if (isNaN(prisonerInfo.sentence) || prisonerInfo.sentence <= 0) {
      validationErrors.sentence = "Sentence must be a positive number";
    }

    if (!prisonerInfo.parole.trim()) {
      validationErrors.parole = "Parole information is required";
    }

   

    return validationErrors;
  };

  const handleAddPrisoner = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      axios.post("http://localhost:8081/AddPrisoner", prisonerInfo)
        .then((response) => {
          console.log("Prisoner added:", response.data);
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
          alert("Prisoner added successfully");
          setTimeout(() => {
            navigate("/JailorAdmin");
          }, 2000);
        })
        .catch((error) => {
          console.error("There was an error adding the prisoner!", error);
        });
    }
  };

  const handleRequestChange = (e) => {
    const value = e.target.value;
    if (value) {
      window.location.href = value;
    }
  };

  return (
    <div className="task">
      <div className="header"></div>

      <div className="task-links">
        <br /><br /><br /><br /><br /><br/><br/><br/><br/><br/>
        <ul>
          <div className="approverequest-links-container">
            <button className='custom-button"'>
              <li>
                <select onChange={(e) => window.location.href = e.target.value} className="approverequest-dropdown" style={{ marginLeft: "10px", color: "#2c3e50" }}>
                  <option value=""><b><strong>Select a Request to approve</strong></b></option>
                  <option value="/MedicationRequest">Medication Request</option>
                  <option value="/VisitationRequest">Visitation Request</option>
                  <option value="/CounsellingRequest">Counselling Request</option>
                </select>
              </li>
            </button>
          </div>
          <br /><br /><br /><br />
          <button className="custom-button">
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/AddPoints"><b>Add Points</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          </button>
          <br /><br /><br /><br /><br />
          <button className="custom-button">
            <li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/IssueCourse"><b>Issue Course</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
          </button>
        </ul>
      </div>

      <div className='p-container'>
        <br />
        <h1 style={{ color: "#e74c3c" }}><b>Prisoners Details</b></h1>

        {/* Add Prisoner Form */}
        <form onSubmit={handleAddPrisoner}>
          <h2><u>Add Prisoner</u></h2>
          <br />

          <div className="form-group">
          <label><b>Prisoner ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="number" placeholder="ID Number" value={prisonerInfo.pid} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, pid: e.target.value })} />
          {errors.pid && <p className="error">{errors.pid}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="text" placeholder="Name" value={prisonerInfo.name} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, name: e.target.value })} />
          {errors.name && <p className="error">{errors.name}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Date of Birth:&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          <input type="date" placeholder="dd/mm/yy" value={prisonerInfo.dob} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, dob: e.target.value })} />
          {errors.dob && <p className="error">{errors.dob}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Gender:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
          Male
          <input type="radio" name="gender" value="Male" onChange={(e) => setPrisonerInfo({ ...prisonerInfo, gender: e.target.value })} />
          Female
          <input type="radio" name="gender" value="Female" onChange={(e) => setPrisonerInfo({ ...prisonerInfo, gender: e.target.value })} />
          {errors.gender && <p className="error">{errors.gender}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Height:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="text" placeholder="Height" value={prisonerInfo.height} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, height: e.target.value })} />
          {errors.height && <p className="error">{errors.height}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Weight:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="text" placeholder="Weight" value={prisonerInfo.weight} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, weight: e.target.value })} />
          {errors.weight && <p className="error">{errors.weight}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Date of Joining:</b> </label>
          <input type="date" placeholder="date of joining" value={prisonerInfo.doj} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, doj: e.target.value })} />
          {errors.doj && <p className="error">{errors.doj}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Sentence:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="number" placeholder="sentence" value={prisonerInfo.sentence} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, sentence: e.target.value })} />
          {errors.sentence && <p className="error">{errors.sentence}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Parole:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="text" placeholder="parole" value={prisonerInfo.parole} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, parole: e.target.value })} />
          {errors.parole && <p className="error">{errors.parole}</p>}</div>
          <br />

          <div className="form-group">
          <label><b>Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b> </label>
          <input type="password" placeholder="password" value={prisonerInfo.pwd} onChange={(e) => setPrisonerInfo({ ...prisonerInfo, pwd: e.target.value })} />
          {errors.pwd && <p className="error">{errors.pwd}</p>}</div>
          <br />

          <button type="submit" style={{ backgroundColor: "white", fontSize: "25px", borderRadius: "10px" }}><b>Add</b></button>&nbsp;&nbsp;
          <button style={{ backgroundColor: "white", fontSize: "25px", color: "white", borderRadius: "10px" }}>
            <Link to="/UpdatePrisoner"><b>Edit</b></Link>
          </button>&nbsp;&nbsp;
          <button style={{  fontSize: "25px", color: "", borderRadius: "10px" }}>
            <Link to="/Prisonerdelete"><b>Delete</b></Link>
          </button>&nbsp;&nbsp;

          {successMessage && <p style={{ color: 'green', marginTop: '20px' }}>{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default JailorAdmin;
