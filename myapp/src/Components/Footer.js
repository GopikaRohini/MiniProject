import React from "react";
import { Link } from "react-router-dom";
import "./footerbar.css"; // Import the CSS file
const Footerbar = () => {
 return (
 <nav className="footbar">
     <br/> <br/> <br/> <br/><br/><br/>
 <div className="taskbar">
 <div className="footer">

 <h2>Contact Information</h2>
 <p>For support or inquiries, contact us at:</p>
 <p>Email: citadel@prismmanagementgmail.com</p>
 <p>Phone: +91 ..........</p>
 <b>
 <span className="copyright">
 &copy; 2024 Prison Management System. All rights reserved.
 </span>
 </b>
 <br /> <br />
 <div className="quick-links">
 <ul>
 <li>
 <Link to="/PrivacyPolicy">Privacy Policy</Link>
 </li>
 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
 <li>
 <Link
 to="/TermsOfService"
 style={{ color: "#e74c3c", margin: "0 10px" }}
 >
 Terms of Service
 </Link>
 </li>
 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
 <li>
 <Link
 to="/CookiePolicy"
 style={{ color: "#e74c3c", margin: "0 10px" }}
 >
 Cookie Policy
 </Link>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </nav>
 );
};
export default Footerbar;