import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import bmLogo from '../assets/Logo M.png';
import DemoBookingModal from './DemoBookingModal';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
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
            <Link to="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link>
          </div>

          <div className="nav-actions">
            <button className="btn btn-primary" onClick={() => setShowDemoModal(true)}>Join Now</button>
          </div>

          <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mobile-menu"
            >
              <motion.div
                className="mobile-menu-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                >
                  <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <a href="/#features" onClick={() => setIsOpen(false)}>Why Us</a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                >
                  <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.3, ease: "easeOut" }}
                  className="mobile-menu-button"
                >
                  <button className="btn btn-primary" onClick={() => { setIsOpen(false); setShowDemoModal(true); }}>Join Now</button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <DemoBookingModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </>
  );
};

export default Navbar;
