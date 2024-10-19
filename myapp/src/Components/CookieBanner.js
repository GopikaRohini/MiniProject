import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CookieBanner.css'; // Optional: for styling the banner

const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookiesAccepted = document.cookie.includes('cookies_accepted=true');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const acceptCookies = () => {
        document.cookie = "cookies_accepted=true; path=/";
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-banner">
            <p>
                We use cookies to improve your experience. By using our website, you agree to our
                <Link to="/CookiePolicy"> Cookie Policy</Link>.
            </p>
            <button onClick={acceptCookies}>Accept</button>
        </div>
    );
};

export default CookieBanner;
