import React, { useState, lazy, Suspense } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import './DemoBookingModal.css';
import { createPortal } from 'react-dom';

// Lazy load framer-motion to prevent main-thread blocking (TBT reduction)
const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

// AnimatePresence wrapper component
const AnimatePresenceWrapper = lazy(() => 
  import('framer-motion').then(module => {
    const { AnimatePresence } = module;
    return {
      default: ({ children }) => <AnimatePresence>{children}</AnimatePresence>
    };
  })
);

const DemoBookingModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState('initial'); // initial, form, success
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        college: '',
        course: ''
    });

    const courses = [
        'Flagship AI & Full-Stack',
        'Smart Pro Combo',
        'Curiosity Program',
        'Foundation Literacy'
    ];

    const handleYes = () => setStep('form');
    // For "No", we could just close or show a message.
    const handleNo = () => onClose();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Google Sheets Integration
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxI_GYutkbFVs_E8PlxZ2qhha341HyGoT0kTgL6lqWZd66bbEPg8iYQ-3k42j5Iz69YhA/exec'
            
            // Prepare form data as URL-encoded string (Google Apps Script expects this format)
            const formDataString = [
                `name=${encodeURIComponent(formData.name)}`,
                `whatsapp=${encodeURIComponent(formData.whatsapp)}`,
                `email=${encodeURIComponent(formData.email)}`,
                `college=${encodeURIComponent(formData.college)}`,
                `course=${encodeURIComponent(formData.course)}`,
                `timestamp=${encodeURIComponent(new Date().toISOString())}`
            ].join('&');

            console.log('Submitting form data:', formData);
            console.log('Form data string:', formDataString);

            // Send to Google Sheets using GET method (more reliable for Google Apps Script)
            // Google Apps Script Web Apps work better with GET requests
            const urlWithParams = `${GOOGLE_SCRIPT_URL}?${formDataString}`;
            
            await fetch(urlWithParams, {
                method: 'GET',
                mode: 'no-cors',
            });

            console.log("Form submitted successfully! Check your Google Sheet.");
            
            // Show success message
            setStep('success');
            
            // Reset form after successful submission
            setFormData({
                name: '',
                whatsapp: '',
                email: '',
                college: '',
                course: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // if (!isOpen) return null; // Removed as AnimatePresence handles unmounting

    return createPortal(
        <Suspense fallback={isOpen ? <div className="modal-backdrop" onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9998 }} /> : null}>
            <AnimatePresenceWrapper>
                {isOpen && (
                    <>
                        <MotionDiv
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                        />
                        <div className="modal-wrapper">
                            <MotionDiv
                                className="modal-container"
                                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 50 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                        {/* Wrapper for centering is handled by CSS?
                           No, we will just fix the motion props to include the centering X.
                           We want y to animate from slightly below (-50% + 20px) to center (-50%).
                        */}

                        <div className="modal-content-wrapper" style={{ height: '100%', width: '100%' }}>
                            <button 
                                className="modal-close" 
                                onClick={onClose} 
                                style={{ zIndex: 10 }}
                                aria-label="Close demo booking modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="modal-content">
                                {step === 'initial' && (
                                    <div className="step-initial">
                                        <h2>Experience the Future</h2>
                                        <p>Would you like to attend our exclusive <strong>2-day demo class</strong>?</p>
                                        <div className="modal-actions">
                                            <button className="btn btn-primary" onClick={handleYes}>
                                                Yes, I'm Interested
                                            </button>
                                            <button className="btn btn-outline" onClick={handleNo}>
                                                No, Maybe Later
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 'form' && (
                                    <div className="step-form">
                                        <div className="form-header">
                                            <h2>Reserve Your Spot</h2>
                                            <p>Fill in your details to get the demo link.</p>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <label>Full Name</label>
                                                <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group">
                                                    <label>WhatsApp Number</label>
                                                    <input type="tel" name="whatsapp" required value={formData.whatsapp} onChange={handleChange} placeholder="+91 98765 43210" />
                                                </div>
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>College / School / Company Name</label>
                                                <input type="text" name="college" required value={formData.college} onChange={handleChange} placeholder="e.g. GNDEC Bidar" />
                                            </div>
                                            <div className="form-group">
                                                <label>Interested Course</label>
                                                <select name="course" required value={formData.course} onChange={handleChange}>
                                                    <option value="" disabled>Select a Course</option>
                                                    {courses.map(c => <option key={c} value={c}>{c}</option>)}
                                                </select>
                                            </div>
                                            <button 
                                                type="submit" 
                                                className="btn btn-primary btn-block"
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>Submitting...</>
                                                ) : (
                                                    <>Confirm Booking <ArrowRight size={18} /></>
                                                )}
                                            </button>
                                        </form>
                                    </div>
                                )}

                                {step === 'success' && (
                                    <div className="step-success">
                                        <div className="success-icon">
                                            <CheckCircle2 size={64} />
                                        </div>
                                        <h2>You're All Set!</h2>
                                        <p>We have received your request. Our team will contact you shortly on WhatsApp with the demo details.</p>
                                        <button className="btn btn-primary" onClick={onClose}>Done</button>
                                    </div>
                                )}
                            </div>
                        </div>
                        </MotionDiv>
                    </div>
                </>
            )}
            </AnimatePresenceWrapper>
        </Suspense>,
        document.body
    );
};

export default DemoBookingModal;
