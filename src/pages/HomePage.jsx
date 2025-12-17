import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';

import Footer from '../components/Footer';

import SEO from '../components/SEO';

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
                <WhyChooseUs />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
