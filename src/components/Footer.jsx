import React from 'react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="section-grid-bg"></div>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <span className="gradient-text">Beyond Marks</span> AI
                        </div>
                        <p>Empowering the next generation of learners with AI-driven personalized coaching.</p>
                    </div>

                    <div className="footer-links">
                        <h4>Platform</h4>
                        <a href="#">Courses</a>
                        <a href="#">Mentors</a>
                        <a href="#">Pricing</a>
                        <a href="#">For Business</a>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <a href="#">About Us</a>
                        <a href="#">Careers</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon"><Twitter size={20} /></a>
                            <a href="#" className="social-icon"><Instagram size={20} /></a>
                            <a href="#" className="social-icon"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon"><Mail size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Beyond Marks AI Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
