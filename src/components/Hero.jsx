import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Lazy load ToolsMarquee as it's below the fold
const ToolsMarquee = lazy(() => import('./ToolsMarquee'));

const Hero = () => {

    return (
        <section className="hero" id="home">
            <div className="hero-grid-bg"></div>
            <div className="hero-glow-spot top-left"></div>
            <div className="hero-glow-spot bottom-right"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        className="badge glass"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Sparkles size={14} className="badge-icon" />
                        <span>The Future of AI Education</span>
                    </motion.div>

                    <h1>
                        Don&apos;t Just Learn AI. <br />
                        <span className="gradient-text-accent">Master the Future.</span>
                    </h1>

                    <p>
                        Beyond Marks is the elite academy for the next generation of tech leaders.
                        We move beyond the syllabus to teach you the tools, mindsets, and skills
                        that actually matter in the AI era.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/courses" className="btn btn-primary flex-center">
                            Explore Curriculum <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/why-choose-us" className="btn btn-outline flex-center">
                            <PlayCircle size={18} style={{ marginRight: '8px' }} /> What Makes Us Different
                        </Link>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h2 className="stat-value">10k+</h2>
                            <span>Active Learners</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h2 className="stat-value">Industry</h2>
                            <span>Aligned Skills</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h2 className="stat-value">100%</h2>
                            <span>Project Based</span>
                        </div>
                    </div>
                </motion.div>

                <Suspense fallback={null}>
                    <ToolsMarquee />
                </Suspense>
            </div>

            {/* Abstract 3D Elements */}
            <div className="hero-3d-elements">
                <motion.div
                    className="floating-card glass card-1"
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="card-icon" style={{ background: '#3b82f6' }}></div>
                    <div className="card-lines">
                        <div className="line long"></div>
                        <div className="line short"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="floating-card glass card-2"
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <div className="card-icon" style={{ background: '#8b5cf6' }}></div>
                    <div className="card-lines">
                        <div className="line long"></div>
                        <div className="line short"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
