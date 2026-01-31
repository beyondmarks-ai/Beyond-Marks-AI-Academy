import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import {
    Sparkles,
    Brain,
    Globe,
    Video,
    TrendingUp,
    Zap,
    ArrowRight,
    MapPin,
    CheckCircle2,
    X,
    Bot,
    Shield,
    Lock,
    Server,
    FileJson,
    Trash2,
    Database,
    Cloud
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './StudyBuddyPage.css';
import './StudyBuddyPageExtra.css';

// --- Shared Components ---

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}) => {
    return (
        <button
            className={`sb-btn sb-btn-${variant} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="sb-card">
            <div className="sb-icon-box">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const WaitlistModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="sb-modal-overlay"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="sb-modal-content"
                    >
                        <button onClick={onClose} className="sb-close-btn">
                            <X size={24} />
                        </button>

                        <div style={{ marginBottom: '20px' }}>
                            <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '8px' }}>Join the Revolution</h3>
                            <p style={{ color: '#94a3b8' }}>Be the first to experience the future of personalized learning.</p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="sb-input-group">
                                <label className="sb-input-label">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="student@example.com"
                                    className="sb-input"
                                />
                            </div>
                            <div className="sb-input-group">
                                <label className="sb-input-label">Are you a Student?</label>
                                <select className="sb-input">
                                    <option>Yes, I'm a Student</option>
                                    <option>No, I'm a Parent/Teacher</option>
                                </select>
                            </div>
                            <Button className="w-full" style={{ width: '100%', marginTop: '10px' }}>Join Waitlist</Button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

const StudyBuddyPage = () => {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        {
            icon: <TrendingUp className="text-blue-400" color="#60a5fa" size={28} />,
            title: "Progress Tracking",
            description: "Visual dashboards that track your growth curve in real-time."
        },
        {
            icon: <Globe className="text-violet-400" color="#a78bfa" size={28} />,
            title: "Multi-Language Support",
            description: "Learn concepts in Hindi, Kannada, or English seamlessly."
        },
        {
            icon: <Video className="text-cyan-400" color="#22d3ee" size={28} />,
            title: "Recorded Concepts",
            description: "Access a vast library of on-demand video lessons anytime."
        },
        {
            icon: <Brain className="text-pink-400" color="#f472b6" size={28} />,
            title: "Smart Memory",
            description: "AI remembers your learning context for up to 1 week."
        },
        {
            icon: <Bot className="text-emerald-400" color="#34d399" size={28} />,
            title: "AI Transformation",
            description: "Turn your questions into beautiful infographic notes instantly."
        },
        {
            icon: <Zap className="text-amber-400" color="#fbbf24" size={28} />,
            title: "Interactive Learning",
            description: "Generate custom flashcards and quizzes to test your knowledge."
        }
    ];

    return (
        <div className="sb-page-wrapper">
            <Navbar />

            {/* Hero Section */}
            <section className="sb-hero-section">
                <div className="sb-hero-bg-glow-1" />
                <div className="sb-hero-bg-glow-2" />

                <div className="sb-hero-content">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="sb-badge"
                    >
                        <Sparkles size={16} />
                        <span>The Future of Learning</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="sb-hero-title"
                    >
                        Meet Your <br />
                        <span className="sb-gradient-text">
                            StudyBuddy AI
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="sb-hero-desc"
                    >
                        Experience personalized tutoring powered by Gemini Live.
                        Break down complex topics, track your progress, and learn in your native language.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="sb-hero-actions"
                    >
                        <Button onClick={() => setIsWaitlistOpen(true)}>
                            Join Waitlist <ArrowRight size={18} />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Jarvis Experience */}
            <section className="sb-jarvis-section">
                <div className="sb-jarvis-container">
                    <div className="sb-jarvis-grid-bg" />

                    <div className="sb-jarvis-content">
                        {/* Animated Orb */}
                        <div className="sb-jarvis-orb-container">
                            <div className="sb-jarvis-ring sb-ring-1" />
                            <div className="sb-jarvis-ring sb-ring-2" />
                            <div className="sb-jarvis-ring sb-ring-3" />
                            <div className="sb-jarvis-orb" />
                        </div>

                        <div className="sb-chat-interface">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="sb-chat-bubble user"
                            >
                                <p className="sb-chat-text">"Hey Jarvis, explain Quantum Physics in Kannada"</p>
                            </motion.div>

                            <div className="sb-ai-response-preview">
                                <div className="sb-waveform">
                                    <div className="sb-wave-bar" />
                                    <div className="sb-wave-bar" />
                                    <div className="sb-wave-bar" />
                                    <div className="sb-wave-bar" />
                                    <div className="sb-wave-bar" />
                                </div>
                                <span className="sb-jarvis-status-text">Gemini Live Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Deep Dive */}
            <section className="sb-tech-section">
                <div className="sb-tech-grid">
                    <div className="sb-tech-content">
                        <div className="sb-badge" style={{ borderColor: 'rgba(96, 165, 250, 0.3)', color: '#60a5fa' }}>
                            <Zap size={14} />
                            <span>Powered by Gemini 1.5 Flash</span>
                        </div>
                        <h2>Multimodal Intelligence</h2>
                        <p className="sb-tech-text">
                            StudyBuddy AI is a sophisticated educational engine built on the Google Gemini Multimodal Live API. Unlike standard chatbots, it provides a real-time, low-latency verbal tutoring experience.
                        </p>
                        <p className="sb-tech-text">
                            The system processes complex multimodal inputs—including handwritten notes, textbook images, and multi-page PDFs—to generate structured interactive lessons. By utilizing Gemini Flash as its core reasoning engine, StudyBuddy AI can convert dense academic content into conversational scripts, flashcards, and infographic notes tailored to the student's learning pace.
                        </p>
                    </div>
                    <div className="sb-tech-visual">
                        {/* Abstract Visualization of Multimodal Input */}
                        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                                <Bot size={80} color="#3b82f6" style={{ filter: 'drop-shadow(0 0 30px rgba(59, 130, 246, 0.5))' }} />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                style={{ position: 'absolute', top: '20%', left: '20%', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}
                            >
                                <FileJson size={24} color="#a78bfa" />
                            </motion.div>
                            <motion.div
                                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                style={{ position: 'absolute', bottom: '20%', right: '20%', padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px' }}
                            >
                                <Database size={24} color="#34d399" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="sb-features-section">
                <div className="sb-section-header">
                    <h2 className="sb-section-title">Supercharge Your Learning</h2>
                    <p className="sb-hero-desc" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                        Everything you need to excel, packed into one intelligent platform.
                    </p>
                </div>

                <div className="sb-features-grid">
                    {features.map((feature, idx) => (
                        <FeatureCard
                            key={idx}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>

            {/* Privacy Section */}
            <section className="sb-privacy-section">
                <div className="sb-privacy-container">
                    <div className="sb-section-header">
                        <h2 className="sb-section-title">Enterprise-Grade Security</h2>
                        <p className="sb-hero-desc" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                            Google is strict about student data. Here's how we convert that into a promise.
                        </p>
                    </div>

                    <div className="sb-privacy-grid">
                        {/* Column 1: How Data is Saved */}
                        <div className="sb-privacy-column">
                            <div className="sb-privacy-header">
                                <Database size={32} color="#3b82f6" />
                                <h3>How Data is Saved</h3>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <Cloud size={18} color="#60a5fa" />
                                    Encrypted Cloud Storage
                                </h4>
                                <p>All uploaded documents (PDFs/Images) are stored in encrypted buckets on Google Cloud.</p>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <Brain size={18} color="#60a5fa" />
                                    Contextual Memory (1-Week Cache)
                                </h4>
                                <p>We utilize a short-term vector cache that stores the last 7 days of tutoring history, allowing the AI to remember struggles without permanent retention.</p>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <FileJson size={18} color="#60a5fa" />
                                    Metadata Generation
                                </h4>
                                <p>Our system converts PDF data into structured Meta JSON files, storing only lesson logic, not personal identity.</p>
                            </div>
                        </div>

                        {/* Column 2: How We Protect It */}
                        <div className="sb-privacy-column">
                            <div className="sb-privacy-header">
                                <Shield size={32} color="#34d399" />
                                <h3>How We Protect It</h3>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <Lock size={18} color="#34d399" />
                                    Data Isolation
                                </h4>
                                <p>Each student’s data is siloed. No content is ever used to "train" the general AI model for other users.</p>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <Server size={18} color="#34d399" />
                                    Secure API Transmissions
                                </h4>
                                <p>All interactions between the app and the Gemini API are handled over SSL/TLS encrypted channels.</p>
                            </div>

                            <div className="sb-privacy-item">
                                <h4>
                                    <Trash2 size={18} color="#34d399" />
                                    Auto-Deletion
                                </h4>
                                <p>Access "Memory Cache" is automatically purged every 7 days unless explicitly saved to "Permanent Library".</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessibility Section */}
            <section className="sb-accessibility-section">
                <div className="sb-hero-bg-glow-2" style={{ top: '50%', right: 'auto', left: '-20%', opacity: 0.5 }} />

                <div className="sb-split-layout">
                    <div>
                        <div className="sb-badge" style={{ color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.2)', background: 'rgba(52, 211, 153, 0.1)' }}>
                            <MapPin size={16} />
                            <span>Offline Office</span>
                        </div>

                        <h2 className="sb-section-title" style={{ fontSize: '2.5rem' }}>
                            Learning Without <br /> Limits
                        </h2>

                        <p className="sb-hero-desc" style={{ fontSize: '1.1rem', margin: '20px 0 40px' }}>
                            No phone? No PC? No problem. <br />
                            Visit our Offline Office exclusively at <span style={{ color: 'white', fontWeight: 600 }}>Meer's Tower, Bidar</span>.
                        </p>

                        <ul className="sb-check-list">
                            {[
                                "Access AI Tools on standard PCs",
                                "High-speed internet for seamless learning",
                                "Mentors available for in-person doubts"
                            ].map((item, i) => (
                                <li key={i}>
                                    <CheckCircle2 color="#34d399" size={24} style={{ minWidth: '24px' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" style={{ color: '#34d399', borderColor: '#34d399' }} onClick={() => window.open('https://maps.google.com/?q=Meers+Tower+Bidar', '_blank')}>
                            Get Directions
                        </Button>
                    </div>

                    <div className="sb-map-card">
                        <MapPin color="#34d399" size={64} style={{ marginBottom: '20px', position: 'relative', zIndex: 10 }} />
                        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                            <p style={{ color: 'white', fontWeight: 600, fontSize: '1.2rem', marginBottom: '4px' }}>Meer's Tower</p>
                            <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>First Floor, Near Water Tank,<br />Mailoor Cross, Bidar - 585403</p>
                            <p style={{ color: '#34d399', marginTop: '16px', fontSize: '0.9rem', fontWeight: 600 }}>Open Mon-Sat, 9AM - 8PM</p>
                        </div>
                        <div className="sb-map-glow"></div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="sb-cta-section">
                <div className="sb-cta-card">
                    <h2 className="sb-section-title" style={{ fontSize: '2.5rem' }}>Ready to upgrade your grades?</h2>
                    <p className="sb-hero-desc">Join thousands of students who are already learning smarter, not harder.</p>
                    <Button onClick={() => setIsWaitlistOpen(true)} style={{ marginTop: '20px', padding: '18px 48px', fontSize: '1.1rem' }}>
                        Get Early Access
                    </Button>
                </div>
            </section>

            {/* Footer is handled by the main Layout usually, but we can add a mini one if needed or leave it to standard footer */}
            <footer style={{ textAlign: 'center', padding: '40px', borderTop: '1px solid rgba(255,255,255,0.05)', color: '#64748b' }}>
                <p>© {new Date().getFullYear()} StudyBuddy AI by Beyond Marks. All rights reserved.</p>
            </footer>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
};

export default StudyBuddyPage;
