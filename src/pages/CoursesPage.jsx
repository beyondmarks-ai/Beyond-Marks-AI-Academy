import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Curriculum from '../components/Curriculum';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const CoursesPage = () => {
    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper courses-page">
            <SEO
                title="Courses & Curriculum - Beyond Marks AI Academy | AI Courses in Bidar"
                description="Explore comprehensive AI courses at Beyond Marks AI Academy in Bidar. Python, Generative AI, LLMs, Full-Stack Development, and more. 250+ live projects. Enroll now."
                keywords="AI Courses Bidar, Python Course Bidar, Machine Learning Course, Full Stack Development Course, Generative AI Course, LLM Course, Web Development Course, Coding Classes Bidar, AI Curriculum, Beyond Marks Courses"
                url="/courses"
            />
            <Navbar />
            <main style={{ paddingTop: '80px' }}>
                <Curriculum />
            </main>
            <Footer />
        </div>
    );
};

export default CoursesPage;
