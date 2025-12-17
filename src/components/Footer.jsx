import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Github, Mail, Phone, MapPin, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <div className="footer-grid">

                    {/* Column 1: Brand & Socials */}
                    <div className="footer-col brand-col">
                        <h2 className="footer-brand-title">
                            Beyond Marks <span className="highlight-text">AI Academy</span>
                        </h2>
                        <p className="footer-desc">
                            Empowering the next generation of innovators with practical AI skills and future-ready coaching.
                        </p>
                        <div className="footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link"><Instagram size={20} /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/admissions">Admissions</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Legal & Policies */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Legal & Policies</h3>
                        <ul className="footer-links-list">
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                            <li><Link to="/refund-policy">Refund & Cancellation</Link></li>
                            <li><Link to="/student-code">Student Code of Conduct</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Newsletter */}
                    <div className="footer-col contact-col">
                        <h3 className="footer-heading">Contact Us</h3>

                        <div className="footer-contact-info">
                            <div className="contact-item">
                                <MapPin className="contact-icon" size={20} />
                                <span>
                                    Meer's Tower First Floor, Near Water Tank,<br />
                                    Mailoor Cross, Bidar - 585403, Karnataka
                                </span>
                            </div>
                            <div className="contact-item">
                                <Mail className="contact-icon" size={20} />
                                <a href="mailto:contact@beyondmarks.ai">contact@beyondmarks.ai</a>
                            </div>
                            <div className="contact-item">
                                <Phone className="contact-icon" size={20} />
                                <a href="tel:+919113260846">+91 9113260846</a>
                            </div>
                        </div>

                        <div className="footer-newsletter">
                            <h4 className="newsletter-title">Subscribe for Updates</h4>
                            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="newsletter-input"
                                />
                                <button type="submit" className="newsletter-btn">
                                    <Send size={16} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>&copy; {currentYear} Beyond Marks AI Academy. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <span>Designed for Future Innovators</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
