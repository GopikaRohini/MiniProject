import React, { useState } from 'react';
import './JailorAdmin.css';
const Jailordelete =()=>{
    const [deletedJailorId, setDeletedJailorId] = useState('');

    const handleDeleteJailor = () => {
      console.log('Deleting jailor with ID:', deletedJailorId);
      alert('Jailor deleted...');
    };

return ( 
    <center>
      <br/><br/><br/><br/><br/>
         <div className='d-main'>
    <div className='d-container'> <br/> <br/> 
     {/* Delete Jailor Form */}
     <form onSubmit={(e) => { e.preventDefault(); handleDeleteJailor(); }}>
        <h2 style={{ color: 'dark grey' }}><u>Delete Jailor</u></h2>
        <br/>
        <label><b>Jailor ID:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label>
        <input type="text" placeholder="Jailor ID" value={deletedJailorId} onChange={(e) => setDeletedJailorId(e.target.value)} />
        <br/><br/><br/>
        <button type="submit">Delete Jailor</button>
        
      </form>
      <br/> <br/> <br/> <br/> <br/>
    </div>
    </div>
    </center>
  );
};

export default Jailordelete;