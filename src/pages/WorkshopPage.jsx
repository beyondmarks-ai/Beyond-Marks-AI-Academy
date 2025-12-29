import React, { useState, useEffect, lazy, Suspense } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Users, 
  Laptop, 
  Zap, 
  Sparkles,
  ArrowRight,
  PlayCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import './WorkshopPage.css';

const Footer = lazy(() => import('../components/Footer'));

const WorkshopPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    email: '',
    institution: '',
    courseInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Google Sheets Integration
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxI_GYutkbFVs_E8PlxZ2qhha341HyGoT0kTgL6lqWZd66bbEPg8iYQ-3k42j5Iz69YhA/exec';
      
      // Prepare form data as URL-encoded string
      const formDataString = [
        `name=${encodeURIComponent(formData.fullName)}`,
        `whatsapp=${encodeURIComponent(formData.whatsappNumber)}`,
        `email=${encodeURIComponent(formData.email)}`,
        `college=${encodeURIComponent(formData.institution)}`,
        `course=${encodeURIComponent(formData.courseInterest)}`,
        `timestamp=${encodeURIComponent(new Date().toISOString())}`
      ].join('&');

      const urlWithParams = `${GOOGLE_SCRIPT_URL}?${formDataString}`;
      
      await fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors',
      });

      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        fullName: '',
        whatsappNumber: '',
        email: '',
        institution: '',
        courseInterest: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page-wrapper workshop-page-wrapper">
      <SEO
        title="Offline AI Workshop - Beyond Marks AI Academy | Register Now"
        description="Join our exclusive offline workshop: Master AI to Build Your Own Apps & Websites. Zero coding required. Limited seats available at Bidar center."
        keywords="AI Workshop Bidar, Offline AI Class, Beyond Marks Workshop, Learn AI No-Code, UI UX Design Workshop"
        url="/workshop"
      />
      
      <Navbar />

      <main className="workshop-page">
        {/* Hero Section */}
        <section className="workshop-hero">
          <div className="hero-grid-bg" />
          <div className="hero-glow-spot top-left" />
          <div className="hero-glow-spot bottom-right" />
          
          <div className="container">
            <div className="workshop-badge">
              <Sparkles size={16} />
              <span>Exclusive Offline Workshop</span>
            </div>
            
            <h1>
              Master AI to Build Your Own <br />
              <span className="gradient-text">Apps & Websites.</span>
            </h1>
            
            <p>
              Beyond Marks AI Academy enables you to master real-world AI skills through hands-on projects. 
              We are building the future of education by moving beyond the syllabus.
            </p>

            <div className="workshop-hero-buttons">
              <Link to="/courses" className="btn btn-primary flex-center">
                Explore Curriculum <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/why-choose-us" className="btn btn-outline flex-center">
                <PlayCircle size={18} style={{ marginRight: '8px' }} /> What Makes Us Different
              </Link>
            </div>

            <div className="value-props">
              <div className="prop-item">
                <Zap size={20} color="#3b82f6" />
                <span>Zero Coding Required</span>
              </div>
              <div className="prop-item">
                <CheckCircle2 size={20} color="#3b82f6" />
                <span>Immediate Results</span>
              </div>
              <div className="prop-item">
                <Laptop size={20} color="#3b82f6" />
                <span>All Equipment Provided</span>
              </div>
            </div>
          </div>
        </section>

        <section className="workshop-details">
          <div className="container">
            <div className="workshop-content-grid">
              
              <div className="details-column">
                <h2>Workshop <span className="gradient-text">Logistics</span></h2>
                
                <div className="detail-group">
                  <h3>Where & When</h3>
                  
                  <div className="detail-item">
                    <MapPin className="detail-icon" size={24} />
                    <div className="detail-text">
                      <h4>Beyond Marks AI Academy</h4>
                      <p>Meer's Tower, First Floor (Near Water Tank), Mailoor Cross, Bidar - 585403, Karnataka.</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Calendar className="detail-icon" size={24} />
                    <div className="detail-text">
                      <h4>30th December 2025</h4>
                      <p>Tuesday</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <Clock className="detail-icon" size={24} />
                    <div className="detail-text">
                      <h4>4:00 PM to 5:00 PM</h4>
                      <p>1 Hour Intensive Session</p>
                    </div>
                  </div>
                </div>

                <div className="detail-group">
                  <h3>Target Audience</h3>
                  <div className="detail-item">
                    <Users className="detail-icon" size={24} />
                    <div className="detail-text">
                      <h4>Open to Everyone</h4>
                      <p>Age 8 and above. Complete beginners are welcome.</p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <CheckCircle2 className="detail-icon" size={24} />
                    <div className="detail-text">
                      <h4>No Prerequisites</h4>
                      <p>No laptop required. The academy provides all computers and tools.</p>
                    </div>
                  </div>
                </div>

                <div className="detail-group">
                  <h3>Pricing & Bonus</h3>
                  <div className="detail-item">
                    <Zap className="detail-icon" size={24} color="#10b981" />
                    <div className="detail-text">
                      <h4>FREE (₹0)</h4>
                      <p>Early Bird Offer: Inaugural batch receives a ₹500 discount on the first month's fee for demo attendees.</p>
                    </div>
                  </div>
                </div>

                <div className="instructor-card">
                  <div className="instructor-info">
                    <p className="title">MEET YOUR INSTRUCTOR</p>
                    <h4>Rakesh Kumar</h4>
                    <p className="bio">Founder & Lead Instructor, Beyond Marks AI Academy. Certified Trainer & Curriculum Architect with 5+ years of industry experience. Designer of our proprietary curriculum.</p>
                  </div>
                </div>
              </div>

              <div className="form-column">
                <div className="form-header">
                  <h2>Register Now</h2>
                  <p>Fill in your details to reserve your spot.</p>
                  <span className="seats-left">Only 20 Seats Available</span>
                </div>

                <form className="registration-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      placeholder="Enter your full name" 
                      required 
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>WhatsApp Number</label>
                    <input 
                      type="tel" 
                      name="whatsappNumber" 
                      placeholder="Enter your WhatsApp number" 
                      required 
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Enter your email address" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>College/School Name</label>
                    <input 
                      type="text" 
                      name="institution" 
                      placeholder="Enter your institution name" 
                      required 
                      value={formData.institution}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Course Interest</label>
                    <select 
                      name="courseInterest" 
                      required 
                      value={formData.courseInterest}
                      onChange={handleChange}
                    >
                      <option value="">Select a course</option>
                      <option value="flagship-pro">Flagship AI & Full-Stack Production</option>
                      <option value="smart-pro">Smart Pro Combo (Curiosity + AI Fusion)</option>
                      <option value="curiosity-program">Curiosity & Cognitive Development (Age 8+)</option>
                      <option value="foundation-literacy">Foundation Computer Literacy</option>
                    </select>
                  </div>

                  <button type="submit" className="submit-btn" disabled={isSubmitting}>
                    {isSubmitting ? 'Registering...' : 'Register Now'}
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {showSuccess && (
        <div className="success-overlay">
          <div className="success-modal">
            <span className="success-icon">🚀</span>
            <h2>Your Seat is Confirmed!</h2>
            <p>
              Thank you for registering. We are thrilled to welcome you to the future of AI. 
              Your spot at Beyond Marks AI Academy is officially reserved.
            </p>
            <div className="success-instruction">
              Please arrive 10 minutes early to settle in. We are waiting for you at our office!
            </div>
            <button className="close-success-btn" onClick={() => setShowSuccess(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopPage;


