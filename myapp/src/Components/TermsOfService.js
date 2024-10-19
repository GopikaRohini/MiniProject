import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="terms-of-service" style={{ padding: '20px' }}>
            <h1>Terms of Service</h1>
            <p>
                Welcome to Citadel. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.
            </p>
            <h2>Use of Our Website</h2>
            <p>
                You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.
            </p>
            <h2>Intellectual Property</h2>
            <p>
                All content on this website is the property of [Your Website] or its content suppliers and is protected by copyright and other intellectual property laws.
            </p>
            <h2>Limitation of Liability</h2>
            <p>
                We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our website.
            </p>
            <h2>Governing Law</h2>
            <p>
                These terms are governed by and construed in accordance with the laws of [Your Jurisdiction], and you submit to the exclusive jurisdiction of the courts in that state or location.
            </p>
        </div>
    );
};

export default TermsOfService;
