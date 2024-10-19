import React, { useState } from 'react';
import './PrisonerAdmin.css';
import axios from "axios";

const Prisonerdelete = () => {
  const [deletedPrisonerId, setDeletedPrisonerId] = useState('');

  const handleDelete = async (pid) => {
    try {
      const response = await axios.delete(
        `http://localhost:8081/DeletePrisoner/${pid}`
      );
  
      if (response.status === 200 && response.data.success) {
        console.log("Prisoner deleted successfully");
        // Optionally clear the input field
        setDeletedPrisonerId('');
        // Optionally notify the user of success
        alert('Prisoner deleted successfully.');
      } else {
        console.error("Failed to delete prisoner:", response.data.message);
        alert('Failed to delete prisoner.');
      }
    } catch (err) {
      console.error("Error deleting prisoner:", err);
      alert('Error deleting prisoner.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (deletedPrisonerId.trim() === '') {
      alert('Please enter a valid prisoner ID.');
      return;
    }
    handleDelete(deletedPrisonerId);
  };

  return (
    <center>
      <div className='u-main'>
        <br/><br/><br/><br/><br/><br/>
        <div className='d-container'>
          <br/> <br/>
          <form onSubmit={handleSubmit}>
            <h2 style={{ color: '#e74c3c' }}><u>Delete Prisoner</u></h2>
            <br/>
            <label><b>Prisoner ID: &nbsp;&nbsp;&nbsp;</b></label>
            <input
              type="text"
              placeholder="ID number"
              value={deletedPrisonerId}
              onChange={(e) => setDeletedPrisonerId(e.target.value)}
            />
            <br/><br/><br/>
            <button type="submit">Delete Prisoner</button>
          </form>
          <br/><br/><br/>
        </div>
      </div>
    </center>
  );
};

export default Prisonerdelete;
