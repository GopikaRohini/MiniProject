import React, { useState } from 'react';
import './JailorAdmin.css';
const Request= () => {
    const [requestInfo, setRequestInfo] = useState({
        staffingNeeds: '',
        securityConcerns: '',
        maintenanceRepairs: '',
        equipmentSuppliers: ''
      });
      const handleApproveRequest = () => {
        console.log('Approving request with info:', requestInfo);
        alert('Request Approved..');
      };
      return (
        <center>
        <div className='request-main'>
        <br/><br/><br/><br/><br/><br/>
        <div className='request-container'>
            <br/>  <br/>  <br/>  
            <form onSubmit={(e) => { e.preventDefault(); handleApproveRequest(); }}>
<h1>Approve Request</h1>
<br/>  <br/>
<label><b>Staffing Needs:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label><input type="text" placeholder="Staffing Needs" value={requestInfo.staffingNeeds} onChange={(e) => setRequestInfo({ ...requestInfo, staffingNeeds: e.target.value })} />
<br/><br/>
<label><b> Security Concern:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </b></label><input type="text" placeholder="Security Concerns" value={requestInfo.securityConcerns} onChange={(e) => setRequestInfo({ ...requestInfo, securityConcerns: e.target.value })} />
<br/><br/><label><b>Maintenance/Repairs:&nbsp;&nbsp;&nbsp;</b></label><input type="text" placeholder="Maintenance/Repairs" value={requestInfo.maintenanceRepairs} onChange={(e) => setRequestInfo({ ...requestInfo, maintenanceRepairs: e.target.value })} />
<br/><br/>
<label><b>Equipment/Suppliers:&nbsp;&nbsp;&nbsp;</b></label><input type="text" placeholder="Equipment/Suppliers" value={requestInfo.equipmentSuppliers} onChange={(e) => setRequestInfo({ ...requestInfo, equipmentSuppliers: e.target.value })} />
<br/><br/>  <br/><button onClick={handleApproveRequest}>Approve Request</button>   
 </form>
 <br/>  <br/>  <br/>  <br/>
        </div>
        </div>
        </center>
         );
        };
        export default Request ;
          