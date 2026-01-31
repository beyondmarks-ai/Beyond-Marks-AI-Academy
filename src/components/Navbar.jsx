import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import bmLogo from '../assets/Logo M.png';
import './Navbar.css';
import './NavbarDropdown.css';

// Lazy load modal - hybrid strategy: load on scroll (works for both mobile & desktop)
// This prevents the form script from blocking LCP while ensuring it's ready when needed
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    let wasScrolled = false;

    const handleScroll = () => {
      // Use requestAnimationFrame to batch reads and prevent forced reflows
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Read scroll position once per frame (batch read operation)
          const currentScrollY = window.scrollY;
          const shouldBeScrolled = currentScrollY > 50;

          // Only update state if it changed (prevents unnecessary re-renders and forced reflows)
          if (shouldBeScrolled !== wasScrolled) {
            setScrolled(shouldBeScrolled);
            wasScrolled = shouldBeScrolled;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to determine if link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className={`navbar navbar-slide-down ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            <div className="logo-mark">
              <img
                src={bmLogo}
                alt="Beyond Marks AI Academy Logo"
                className="logo-image-mark"
                width="120"
                height="120"
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 640px) 80px, 120px"
                decoding="async"
              />
            </div>
          </Link>

          <div className="desktop-menu">
            <Link to="/" className={isActive('/') ? 'active-link' : ''}>Home</Link>
            <a href="/#features">Why Us</a>
            <Link to="/courses" className={isActive('/courses') ? 'active-link' : ''}>Courses</Link>

            {/* Products Dropdown */}
            <div className="nav-dropdown-container">
              <div className={`nav-dropdown-trigger ${isActive('/products/studybuddy') ? 'active' : ''}`}>
                Products <ChevronDown size={14} />
              </div>
              <div className="nav-dropdown-menu">
                <Link to="/products/studybuddy" className="nav-dropdown-item">
                  <div className="icon-box">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>StudyBuddy AI</div>
                    <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Personalized AI Tutor</div>
                  </div>
                </Link>
              </div>
            </div>

            <Link to="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link>
          </div>

          <div className="nav-actions">
            <Link to="/workshop" className="btn btn-primary">
              Join Now
            </Link>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>

        {isOpen && (
          <div className="mobile-menu mobile-menu-fade-in">
            <div className="mobile-menu-content mobile-menu-content-fade-in">
              <div className="mobile-menu-item mobile-menu-item-slide-1">
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              </div>
              <div className="mobile-menu-item mobile-menu-item-slide-2">
                <a href="/#features" onClick={() => setIsOpen(false)}>Why Us</a>
              </div>
              <div className="mobile-menu-item mobile-menu-item-slide-3">
                <Link to="/courses" onClick={() => setIsOpen(false)}>Courses</Link>
              </div>

              <div className="mobile-menu-item mobile-menu-item-slide-3">
                <div className="mobile-dropdown-header" onClick={() => setMobileProdOpen(!mobileProdOpen)}>
                  <span>Products</span>
                  <ChevronDown size={20} className={`transition-transform ${mobileProdOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className={`mobile-dropdown-content ${mobileProdOpen ? 'open' : ''}`}>
                  <Link to="/products/studybuddy" onClick={() => setIsOpen(false)} className="mobile-dropdown-item">
                    StudyBuddy AI
                  </Link>
                </div>
              </div>

              <div className="mobile-menu-item mobile-menu-item-slide-4">
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </div>
              <div className="mobile-menu-button mobile-menu-button-pop">
                <Link
                  to="/workshop"
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
