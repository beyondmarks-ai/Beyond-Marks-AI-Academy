import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const StudentCode = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <Navbar />
            <main className="legal-page-content" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Student Code of Conduct</h1>

                    <div className="legal-text" style={{ lineHeight: '1.8' }}>
                        <p>Beyond Marks AI Academy is dedicated to providing a positive and inclusive learning environment. All students are expected to adhere to this Code of Conduct.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Respect and Inclusion</h2>
                        <p>Treat all instructors, staff, and fellow students with respect. Discrimination, harassment, or bullying of any kind will not be tolerated.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Academic Integrity</h2>
                        <p>Students must complete their own work. Plagiarism, cheating, or unauthorized sharing of course materials is strictly prohibited and constitutes a violation of our policy.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Professionalism</h2>
                        <p>Maintain a professional demeanor in all interactions, including live sessions, forums, and community chats. Constructive and supportive communication is encouraged.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Consequences</h2>
                        <p>Violations of this code may result in warnings, suspension, or expulsion from the academy without refund.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default StudentCode;
