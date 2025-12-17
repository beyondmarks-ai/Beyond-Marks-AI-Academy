import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <SEO
                title="Privacy Policy"
                description="Read our Privacy Policy to understand how Beyond Marks AI Academy collects, uses, and protects your personal information."
                url="/privacy-policy"
            />
            <Navbar />
            <main className="legal-page-content" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Privacy Policy</h1>
                    <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="legal-text" style={{ lineHeight: '1.8' }}>
                        <p>At Beyond Marks AI Academy, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Information We Collect</h2>
                        <p>We collect information that you provide securely to us, such as your name, email address, and phone number when you register for courses or contact us. We also collect usage data automatically to improve our services.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>How We Use Your Information</h2>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: '10px 0' }}>
                            <li>To provide and maintain our Service</li>
                            <li>To notify you about changes to our Service</li>
                            <li>To provide customer support</li>
                            <li>To monitor the usage of our Service</li>
                        </ul>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@beyondmarks.ai" style={{ color: 'var(--accent)' }}>contact@beyondmarks.ai</a>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
