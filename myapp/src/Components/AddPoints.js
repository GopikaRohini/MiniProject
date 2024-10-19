import React, { useState } from 'react';
import './AddPoints.css';
const AddPoints = () => {
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    points: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let validationErrors = {};

    if (!formData.idNumber.trim()) {
      validationErrors.idNumber = 'ID Number is required';
    } else if (!/^\d+$/.test(formData.idNumber)) {
      validationErrors.idNumber = 'ID Number must contain only numbers';
    }

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      validationErrors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.points.trim()) {
      validationErrors.points = 'Points are required';
    } else if (isNaN(formData.points) || formData.points <= 0) {
      validationErrors.points = 'Points must be a positive number';
    }

    if (!formData.reason.trim()) {
      validationErrors.reason = 'Reason is required';
    } else if (formData.reason.length < 10) {
      validationErrors.reason = 'Reason must be at least 10 characters long';
    }

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log(formData); // Logic to handle adding points
      setSuccessMessage('Points added successfully');
      setFormData({
        idNumber: '',
        name: '',
        points: '',
        reason: ''
      });
    }
  };

  return (
    <div className='container'>
      <br />
      <br />
      <div className="add-points-container">
        <h1>Add Points</h1>
        <form onSubmit={handleSubmit}>
          <label>ID Number:</label>
          <input
            type="text"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
          {errors.idNumber && <p className="error">{errors.idNumber}</p>}
          
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label>No. of Points:</label>
          <input
            type="number"
            name="points"
            value={formData.points}
            onChange={handleChange}
            required
          />
          {errors.points && <p className="error">{errors.points}</p>}

          <label>Reason:</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
          {errors.reason && <p className="error">{errors.reason}</p>}
<br/>
          <button type="submit">Add Points</button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
      <br />
      <br />
    
    </div>
  );
};

export default AddPoints;
