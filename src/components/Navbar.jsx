import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import bmLogo from '../assets/Logo M.png';
import './Navbar.css';

// Lazy load modal - hybrid strategy: load on scroll (works for both mobile & desktop)
// This prevents the form script from blocking LCP while ensuring it's ready when needed
const DemoBookingModal = lazy(() => import('./DemoBookingModal'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [loadForm, setLoadForm] = useState(false);
  const location = useLocation();
  
  // Hybrid strategy: Load form script when user scrolls (works for both mobile & desktop)
  // This prevents blocking LCP while ensuring script is ready when needed
  useEffect(() => {
    const handleScroll = () => {
      // Load form script after user scrolls 400px (form section is below fold)
      if (window.scrollY > 400 && !loadForm) {
        setLoadForm(true);
      }
    };
    
    // Also load on interaction (button click) as fallback
    const handleInteraction = () => {
      if (!loadForm) {
        setLoadForm(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('click', handleInteraction, { once: true });
    window.addEventListener('touchstart', handleInteraction, { once: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [loadForm]);

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
            <Link to="/about" className={isActive('/about') ? 'active-link' : ''}>About</Link>
          </div>

          <div className="nav-actions">
            <button 
              className="btn btn-primary" 
              onClick={() => {
                // Trigger form script load on button click (fallback)
                if (!loadForm) setLoadForm(true);
                setShowDemoModal(true);
              }}
            >
              Join Now
            </button>
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
              <div className="mobile-menu-item mobile-menu-item-slide-4">
                <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              </div>
              <div className="mobile-menu-button mobile-menu-button-pop">
                <button 
                  className="btn btn-primary" 
                  onClick={() => { 
                    // Trigger form script load on button click (fallback)
                    if (!loadForm) setLoadForm(true);
                    setIsOpen(false); 
                    setShowDemoModal(true); 
                  }}
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Load modal only after scroll/interaction to prevent blocking LCP (hybrid strategy) */}
      {loadForm && (
        <Suspense fallback={null}>
          <DemoBookingModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
