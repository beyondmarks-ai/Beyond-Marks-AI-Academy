import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import bmLogo from '../assets/bm.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isActive = (path) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container nav-container">
        <Link to="/" className="logo">
          <div className="logo-mark">
            <img src={bmLogo} alt="BM Logo" className="logo-image-mark" />
          </div>

        </Link>

        <div className="desktop-menu">
          <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
          <a href="/#features">Why Us</a>
          <Link to="/courses" className={isActive('/courses') ? 'active-link' : ''}>Courses</Link>
          <a href="/#testimonials">Stories</a>
        </div>

        <div className="nav-actions">
          <button className="btn btn-primary">Join Now</button>
        </div>

        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="mobile-menu"
        >
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <a href="/#features" onClick={() => setIsOpen(false)}>Why Us</a>
          <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
          <a href="/#testimonials" onClick={() => setIsOpen(false)}>Stories</a>
          <button className="btn btn-primary" onClick={() => setIsOpen(false)}>Join Now</button>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
