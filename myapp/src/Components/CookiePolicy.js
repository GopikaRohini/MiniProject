import React from "react";
import "./CookiePolicy.css";
const CookiePolicy = () => {
return (
<div className="cookie-policy" style={{ padding: "20px" }}>
<div className="cookie">

<h1>Cookie Policy</h1>
<p>
Our website uses cookies to enhance your experience. By using our
website, you agree to our use of cookies in accordance with this
policy.
</p>
</div>
<div className="cookie">
<h2>What Are Cookies?</h2>
<p>
Cookies are small text files stored on your device when you visit a
website. They help to remember your preferences and improve your
browsing experience.
</p>
</div>
<div className="cookie">
<h2>Types of Cookies We Use</h2>
<p>
We use both session cookies (which expire when you close your browser)
and persistent cookies (which remain on your device for a set period).
</p>
</div>
<div className="cookie">
<h2>How We Use Cookies</h2>

<p>
We use cookies to understand how you interact with our website, to
improve our services, and to personalize your experience.
</p>
</div>
<div className="cookie">
<h2>Managing Cookies</h2>
<p>
You can control and manage cookies through your browser settings.
However, disabling cookies may affect your experience on our website.
</p>
</div>
</div>
);
};
export default CookiePolicy;