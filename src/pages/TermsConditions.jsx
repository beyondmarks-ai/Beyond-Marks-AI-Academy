import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="legal-page-content" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Terms & Conditions</h1>
                    <p style={{ marginBottom: '20px', lineHeight: '1.6' }}>Last updated: {new Date().toLocaleDateString()}</p>

                    <div className="legal-text" style={{ lineHeight: '1.8' }}>
                        <p>Welcome to Beyond Marks AI Academy. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>1. Enrollment and Services</h2>
                        <p>Enrollment in our courses is subject to availability and payment of applicable fees. We reserve the right to modify course content and schedules as necessary.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>2. Intellectual Property</h2>
                        <p>All content provided, including course materials, videos, and documentation, is the property of Beyond Marks AI Academy and is protected by copyright laws. You may not reproduce or distribute these materials without permission.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>3. User Conduct</h2>
                        <p>You agree to use our services for lawful purposes only and in a manner that does not infringe upon the rights of others or restrict their use of the services.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Let's Connect</h2>
                        <p>For any queries regarding these terms, please reach out to <a href="mailto:contact@beyondmarks.ai" style={{ color: 'var(--accent)' }}>contact@beyondmarks.ai</a>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsConditions;
