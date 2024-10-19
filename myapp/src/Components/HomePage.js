// HomePage.js
import React from "react";
// import { Link } from "react-router-dom";
//import logo from './logo.png'; // Import logo image
import "./HomePage.css"; // Import CSS file for styling
function HomePage() {
return (
<div className="container">
<center>
{/* <h1>HIGHLIGHTS</h1>
<div className="high-lights">
<h3>
<u>PROGRAMS</u>
</h3>
<li> Environment Day </li>
<h3>
<u>UPCOMING PROGRAMS</u>
</h3>
<li>Sports Day</li>
&nbsp;
</div> */}

</center>
&nbsp;
<div className="homecontainer">
<div className="part">
<h2>Our Expertise</h2>
<p>
Our expertise lies in information management, website
development,
communication strategies, digital accessibility, data privacy
and
security, and rehabilitation support. By combining these areas
of
expertise, we aim to create a valuable and informative online
resource for the prison community.
</p>
</div>
<div className="part">
<h2>Vision</h2>
<p>
To enhance prison rehabilitation and community safety
through
transparent communication, education, and support.
</p>
</div>

<div className="part">
<h2>Mission</h2>
<p>
Our mission is to inform the public, educate the community,
support
rehabilitation, enhance transparency, and facilitate
communication
to promote understanding, transparency, and positive change
in the
prison system.
</p>
</div>
</div>
<div className="announcements">
<h2> Important Announcements</h2>
<p style={{ color: "white", display: "flex" }}> No announcements at the
moment.</p><br/>
</div>
<br/>
</div>
);
}
export default HomePage;