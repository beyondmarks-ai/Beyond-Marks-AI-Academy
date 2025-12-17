import React, { useEffect, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SEO from '../components/SEO';

// Lazy load below-the-fold components for better performance
const WhyChooseUs = lazy(() => import('../components/WhyChooseUs'));
const Footer = lazy(() => import('../components/Footer'));
const ToolsMarquee = lazy(() => import('../components/ToolsMarquee'));

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <SEO
                title="Beyond Marks AI Academy - Best AI Coaching Center in Bidar | Academy Near Me"
                description="Beyond Marks AI Academy - Top AI coaching center in Bidar. Learn Python, AI, Machine Learning, and Full-Stack Development. 250+ live projects. Small batches. Own your domain. Join the best AI academy near you."
                keywords="Beyond Marks, Beyond Marks AI Academy, AI Academy Bidar, Academy Near Me, Python Course Bidar, AI Coaching Bidar, Machine Learning Course, Coding Classes Bidar, Best AI Academy, AI Training Center, Beyond Marks Academy, Rakesh Kumar AI Academy, AI Bootcamp Bidar, Full Stack Development Course, Generative AI Course"
                url="/"
            />
            <Navbar />
            <main>
                <Hero />
                <Suspense fallback={<div style={{ minHeight: '400px' }} aria-label="Loading content" />}>
                    <WhyChooseUs />
                </Suspense>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default HomePage;
