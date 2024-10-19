import React from 'react';
import { Link } from 'react-router-dom';

import './Navigationbar.css';

const Navigationbar = () => {
  
  return (
    <nav  className="navbar">
    <div className="taskbar">
      <div className="header">
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CITADEL</h1>

</div>
      <div className="quick-links">
        <ul>
          <li><Link to="/"><b>Home</b></Link></li>
          <li><Link to="/AboutUs"><b>AboutUs </b></Link></li>
          <li><Link to="/ContactUs"><b>Contact</b></Link></li> 
          <li><Link to="/login"><b>SignIn</b></Link></li> 
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
