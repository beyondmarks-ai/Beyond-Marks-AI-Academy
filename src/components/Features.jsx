import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Zap, Users } from 'lucide-react';
import './Features.css';

const features = [
    {
        icon: <Brain size={32} color="#00f0ff" />,
        title: "AI-Powered Analysis",
        description: "Our algorithms analyze your performance in real-time to identify gaps and strengths."
    },
    {
        icon: <Target size={32} color="#7000ff" />,
        title: "Personalized Roadmap",
        description: "Get a custom study plan tailored specifically to your goals and learning pace."
    },
    {
        icon: <Zap size={32} color="#ff00aa" />,
        title: "Instant Feedback",
        description: "No more waiting. Get detailed feedback on your assignments instantly."
    },
    {
        icon: <Users size={32} color="#00ffaa" />,
        title: "Expert Mentorship",
        description: "Connect with top-tier mentors who guide you through complex topics."
    }
];

const Features = () => {
    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <motion.span
                        className="subtitle"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        WHY CHOOSE US
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Redefining Education with <span className="gradient-text">Intelligence</span>
                    </motion.h2>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card glass"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
