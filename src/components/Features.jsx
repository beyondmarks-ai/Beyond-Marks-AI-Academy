import React, { lazy, Suspense } from 'react';
import { Brain, Target, Zap, Users } from 'lucide-react';
import './Features.css';

// Lazy load framer-motion to prevent main-thread blocking (TBT reduction)
const MotionSpan = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.span
  }))
);

const MotionH2 = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.h2
  }))
);

const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

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
                    <Suspense fallback={<span className="subtitle">WHY CHOOSE US</span>}>
                        <MotionSpan
                            className="subtitle"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            WHY CHOOSE US
                        </MotionSpan>
                    </Suspense>
                    <Suspense fallback={<h2>Redefining Education with <span className="gradient-text">Intelligence</span></h2>}>
                        <MotionH2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Redefining Education with <span className="gradient-text">Intelligence</span>
                        </MotionH2>
                    </Suspense>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <Suspense key={index} fallback={
                            <div className="feature-card glass">
                                <div className="icon-wrapper">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        }>
                            <MotionDiv
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
                            </MotionDiv>
                        </Suspense>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
