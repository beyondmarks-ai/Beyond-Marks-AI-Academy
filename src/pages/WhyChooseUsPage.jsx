import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    Globe, 
    Users, 
    Award, 
    Laptop, 
    Zap, 
    Shield, 
    TrendingUp, 
    Code2,
    Sparkles,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import DemoBookingModal from '../components/DemoBookingModal';
import './WhyChooseUsPage.css';

const WhyChooseUsPage = () => {
    const [showDemoModal, setShowDemoModal] = useState(false);
    const features = [
        {
            icon: <Globe size={32} />,
            title: 'Your Own Domain',
            description: 'Every student gets a live portfolio website (studentname.beyondmarks.ai) during the course. Plus, 1-year free custom domain hosting (studentname.com) after graduation!'
        },
        {
            icon: <Users size={32} />,
            title: 'Small Batch Size',
            description: 'Strictly capped at 20 students per batch to ensure personalized attention and quality learning experience.'
        },
        {
            icon: <Award size={32} />,
            title: 'Student Dashboard',
            description: 'Secure login system (Student ID & PIN) for every enrolled student to track progress, access resources, and manage projects.'
        },
        {
            icon: <TrendingUp size={32} />,
            title: 'Internal Marketplace',
            description: 'A closed-loop credit economy where students can sell ideas, trade API keys, and earn rewards. Monthly credits convert to tangible prizes!'
        },
        {
            icon: <Zap size={32} />,
            title: 'Hackathon Rewards',
            description: 'Weekly competition winners receive tuition fee exemptions or cash prizes. Learn, compete, and earn!'
        },
        {
            icon: <Laptop size={32} />,
            title: 'BYOD Support',
            description: 'Bring Your Own Device or use our fully equipped lab. Dedicated workstations with power and internet for everyone.'
        },
        {
            icon: <Shield size={32} />,
            title: 'Guardian Portal',
            description: 'Parents can log in to view real-time attendance, test results, and project status. Complete transparency and involvement.'
        },
        {
            icon: <Code2 size={32} />,
            title: 'Visualization-First Learning',
            description: 'Complex logic explained through visual aids, not just text/code. Perfect for slow learners and visual thinkers.'
        },
        {
            icon: <Sparkles size={32} />,
            title: 'Power/Internet Contingency',
            description: 'Classes never stop! In case of power/internet failure, we shift to projector-based theory or cognitive games to maintain engagement.'
        }
    ];

    const differences = [
        {
            title: '2 Days Free Demo Classes',
            description: 'Visit our physical center, meet Rakesh Kumar, and experience our teaching style before paying a single rupee. No commitment required!'
        },
        {
            title: 'Monthly Pay-as-you-go',
            description: 'No large upfront lump sums. Pay monthly and stay flexible. Early bird offer: ₹500 discount on first month for inaugural batch!'
        },
        {
            title: 'You Own Your IP',
            description: 'Students own 100% of their code and ideas. Apps are published with you as the Creator/Owner on Play Store/Web.'
        },
        {
            title: 'Production-Ready Infrastructure',
            description: 'Learn on the same tools and infrastructure used in real companies. No simulations - real production environments.'
        },
        {
            title: '250+ Live Projects',
            description: 'Build real-world applications, chatbots, and websites. Every project is deployable and portfolio-ready.'
        },
        {
            title: 'No Age Limit',
            description: 'Minimum age 8 years, no maximum age. Whether you\'re a student or a professional, if you have curiosity, you belong here.'
        }
    ];

    return (
        <div className="page-wrapper why-choose-us-page">
            <SEO
                title="Why Choose Beyond Marks AI Academy? | Unique Features | Best AI Academy Bidar"
                description="Discover what makes Beyond Marks AI Academy different. Own domain, student dashboard, internal marketplace, small batches, 250+ projects, and more unique features. Best AI academy in Bidar."
                keywords="Why Choose Beyond Marks, Beyond Marks Features, Student Benefits, AI Academy Advantages, Best AI Academy Bidar, Unique Features, Student Domain, Internal Marketplace, Small Batch Size"
                url="/why-choose-us"
            />
            <Navbar />
            <main>
                {/* Hero Section */}
                <section className="why-hero">
                    <div className="container">
                        <motion.div
                            className="hero-content"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="hero-badge">
                                <Sparkles size={16} />
                                <span>What Makes Us Different</span>
                            </div>
                            <h1 className="hero-title">
                                Why Choose <span className="gradient-text">Beyond Marks</span>?
                            </h1>
                            <p className="hero-subtitle">
                                We don't just teach you to code. We build an ecosystem that transforms you into a production-ready developer with real-world experience.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Unique Features Grid */}
                <section className="features-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title">Unique Features You Won't Find Elsewhere</h2>
                            <p className="section-subtitle">These are the exclusive benefits that set us apart</p>
                        </motion.div>

                        <div className="features-grid">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="feature-icon">{feature.icon}</div>
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <p className="feature-description">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* What Makes Us Different */}
                <section className="differences-section">
                    <div className="container">
                        <motion.div
                            className="section-header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="section-title">What Makes Us Different?</h2>
                            <p className="section-subtitle">The Beyond Marks difference</p>
                        </motion.div>

                        <div className="differences-grid">
                            {differences.map((diff, index) => (
                                <motion.div
                                    key={index}
                                    className="difference-card"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="difference-icon">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <h3 className="difference-title">{diff.title}</h3>
                                    <p className="difference-description">{diff.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <motion.div
                            className="cta-content"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="cta-title">Ready to Experience the Difference?</h2>
                            <p className="cta-text">
                                Join us for 2 Days of Free Demo Classes. Visit our physical center, meet Rakesh Kumar, and see for yourself why Beyond Marks is different.
                            </p>
                            <div className="cta-buttons">
                                <button className="btn btn-primary" onClick={() => setShowDemoModal(true)}>
                                    Book Your Free Demo <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                                </button>
                                <Link to="/courses" className="btn btn-outline">
                                    Explore Courses
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
            <DemoBookingModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
        </div>
    );
};

export default WhyChooseUsPage;

