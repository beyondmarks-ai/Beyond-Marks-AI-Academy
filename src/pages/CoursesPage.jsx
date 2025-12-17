import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';

// Lazy load heavy components
const Curriculum = lazy(() => import('../components/Curriculum'));
const Footer = lazy(() => import('../components/Footer'));

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
                <Suspense fallback={<div style={{ minHeight: '600px', padding: '40px 20px', textAlign: 'center' }} aria-label="Loading curriculum">Loading courses...</div>}>
                    <Curriculum />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default CoursesPage;
