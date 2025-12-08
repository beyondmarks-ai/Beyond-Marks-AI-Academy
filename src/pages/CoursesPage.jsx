import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Curriculum from '../components/Curriculum';
import Footer from '../components/Footer';

const CoursesPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper courses-page">
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <Curriculum />
            </main>
            <Footer />
        </div>
    );
};

export default CoursesPage;
