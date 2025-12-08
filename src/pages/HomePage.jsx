import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';

import Footer from '../components/Footer';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
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
