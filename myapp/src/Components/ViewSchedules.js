import React, { useState } from 'react';

const ViewSchedules = () => {
  const [schedules, setSchedules] = useState([
    { id: 1, activity: 'Morning Roll Call', task: 'Check attendance of inmates', assignedTo: 'Jailor A' },
    { id: 2, activity: 'Meal Time', task: 'Serve meals to inmates', assignedTo: 'Kitchen Staff' },
    { id: 3, activity: 'Recreation Hour', task: 'Supervise inmates during outdoor activities', assignedTo: 'Security Team' }
    // Add more schedules as needed
  ]);

  const addSchedule = () => {
    const newSchedule = {
      id: schedules.length + 1, // Generate unique ID for the new schedule
      activity: '', // Initialize with empty strings
      task: '', // Initialize with empty strings
      assignedTo: '' // Initialize with empty strings
    };

    setSchedules([...schedules, newSchedule]);
  };

  const handleInputChange = (e, id, field) => {
    const updatedSchedules = schedules.map(schedule => {
      if (schedule.id === id) {
        return { ...schedule, [field]: e.target.value };
      }
      return schedule;
    });
    setSchedules(updatedSchedules);
  };

  return (
    <center>
      <div className='containers'style={{backgroundColor: "#ffffff"}}>
      <br/><br/><br/><br/>
    <div style={{color:'black' ,border: '5px solid black',width:'700px',height:'500px', backgroundColor: '#2c3e50' }}>
      <br/>
      <h1 style={{color:'white'}}>View Schedules</h1>
      <br/>
     <center>
      <table border={1} style={{ backgroundColor: '#dcdcdc' }} bordercolor='black'>
        <thead>
          <tr>
            <th><b>Activity</b></th>
            <th><b>Task</b></th>
            <th><b>Assigned To</b></th>
          </tr>
        </thead>
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <td>
                <input
                  type="text"
                  value={schedule.activity}
                  onChange={(e) => handleInputChange(e, schedule.id, 'activity')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={schedule.task}
                  onChange={(e) => handleInputChange(e, schedule.id, 'task')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={schedule.assignedTo}
                  onChange={(e) => handleInputChange(e, schedule.id, 'assignedTo')}
                />
              </td>
            </tr> 
          ))}
        </tbody>
      </table> 
      </center>
      <br/><br/>
       <button onClick={addSchedule} style={{color: "#2c3e50"}}>Add Schedule</button> {/* Button to add schedule */}    
    </div>
    </div>
    </center>
  );
};

export default ViewSchedules;
