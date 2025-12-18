import React, { lazy, Suspense } from 'react';
import { Sparkles, Target, Users, Rocket, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import './AboutPage.css';

// Lazy load Footer
const Footer = lazy(() => import('../components/Footer'));

// Lazy load framer-motion only for hero section (above fold, but non-critical)
const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

const AboutPage = () => {
    return (
        <div className="page-wrapper about-page-wrapper">
            <SEO
                title="About Us - Beyond Marks AI Academy | Founder Rakesh Kumar | AI Academy Bidar"
                description="Learn about Beyond Marks AI Academy and founder Rakesh Kumar. Breaking the cycle of rote learning. Teaching real-world AI skills through 250+ live projects in Bidar. Join the revolution."
                keywords="About Beyond Marks, Beyond Marks Founder, Rakesh Kumar, AI Academy Story, Beyond Marks History, AI Education Bidar, About AI Academy"
                url="/about"
            />
            <Navbar />
            <main className="about-page">
                {/* Hero Section */}
                <section className="about-hero">
                    <div className="hero-grid-bg" />
                    <div className="hero-glow-spot top-left" />
                    <div className="hero-glow-spot bottom-right" />
                    <div className="container">
                        <Suspense fallback={<div className="hero-content"><div className="hero-two-column"><div className="hero-left"><h1 className="hero-title">We are building<br /><span className="gradient-text">the future</span><br /><span className="gradient-text">of education</span></h1></div><div className="hero-right"><p className="hero-description">Beyond Marks AI Academy enables students to master real-world AI skills through hands-on projects. We are solving complex problems in AI, automation, and technology education. We also believe that learning should be practical, not theoretical.</p></div></div></div>}>
                            <MotionDiv
                                className="hero-content"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                            <div className="hero-two-column">
                                <div className="hero-left">
                                    <h1 className="hero-title">
                                        We are building
                                        <br />
                                        <span className="gradient-text">the future</span>
                                        <br />
                                        <span className="gradient-text">of education</span>
                                    </h1>
                                </div>
                                <div className="hero-right">
                                    <p className="hero-description">
                                        Beyond Marks AI Academy enables students to master real-world AI skills through hands-on projects. We are solving complex problems in AI, automation, and technology education. We also believe that learning should be practical, not theoretical.
                                    </p>
                                </div>
                            </div>
                        </MotionDiv>
                        </Suspense>
                    </div>
                </section>

                {/* Main Story Section */}
                <section className="story-section">
                    <div className="container">
                        <div className="story-content story-fade-in-up">
                            <div className="story-two-column">
                                <div className="story-left">
                                    <h2 className="story-title">
                                        The Truth About <span className="gradient-text">Success</span>
                                    </h2>
                                </div>
                                <div className="story-right">
                                    <p className="story-paragraph">
                                        Growing up, I was told the same story everyone else was: "Study hard, score high marks, and you will be set for life."
                                    </p>
                                    <p className="story-paragraph">
                                        I followed that path. I earned the degree. But when I stepped into the real world, I realized something that changed everything: <strong>It was a lie.</strong>
                                    </p>
                                    <p className="story-paragraph">
                                        The world doesn't care about your grades. It doesn't care about your mark sheet. The real world only asks one question: <strong>"What problem can you solve?"</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Section */}
                <section className="why-section">
                    <div className="container">
                        <div className="why-content why-fade-in-up">
                            <div className="why-two-column">
                                <div className="why-left">
                                    <h2 className="section-title">
                                        Why <span className="gradient-text">"Beyond Marks"?</span>
                                    </h2>
                                </div>
                                <div className="why-right">
                                    <p className="story-paragraph">
                                        I founded Beyond Marks AI Academy to break the cycle of rote learning. I wanted to create the place I wish I had when I was starting out—a place where we stop memorizing theory and start building the future.
                                    </p>
                                    <p className="story-paragraph highlight">
                                        We are not a tuition center. <strong>We are a bootcamp for builders.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What We Do Section */}
                <section className="what-we-do-section">
                    <div className="container">
                        <div className="what-we-do-content what-we-do-fade-in-up">
                            <div className="what-two-column">
                                <div className="what-left">
                                    <h2 className="section-title">
                                        What <span className="gradient-text">We Do</span>
                                    </h2>
                                </div>
                                <div className="what-right">
                                    <p className="story-paragraph">
                                        At our offline center, we focus on pure skill. We don't just teach you how to code; we teach you how to create.
                                    </p>
                                    <p className="story-paragraph">
                                        Our curriculum is built around 250+ live projects. We take real-world problems—the kind people face every day—and we build AI solutions to fix them. From voice assistants to automation workflows, our students don't just "learn" AI; they deploy it.
                                    </p>
                                </div>
                            </div>
                            <div className="features-grid">
                                <div className="feature-card feature-card-fade-in-1">
                                    <div className="feature-icon">
                                        <Target size={32} />
                                    </div>
                                    <h3 className="feature-title">250+ Live Projects</h3>
                                    <p className="feature-desc">
                                        Our curriculum is built around real-world problems—the kind people face every day.
                                    </p>
                                </div>
                                <div className="feature-card feature-card-fade-in-2">
                                    <div className="feature-icon">
                                        <Rocket size={32} />
                                    </div>
                                    <h3 className="feature-title">AI Solutions</h3>
                                    <p className="feature-desc">
                                        From voice assistants to automation workflows, our students don't just "learn" AI; they deploy it.
                                    </p>
                                </div>
                                <div className="feature-card feature-card-fade-in-3">
                                    <div className="feature-icon">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="feature-title">Hands-On Learning</h3>
                                    <p className="feature-desc">
                                        We focus on pure skill. Stop memorizing theory and start building the future.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Who Is This For Section */}
                <section className="who-section">
                    <div className="container">
                        <div className="who-content who-fade-in-up">
                            <div className="who-two-column">
                                <div className="who-left">
                                    <h2 className="section-title">
                                        Who Is This <span className="gradient-text">For?</span>
                                    </h2>
                                </div>
                                <div className="who-right">
                                    <p className="story-paragraph">
                                        There are no barriers here. Whether you are 8 years old or a retired professional, if you have the curiosity to learn, you belong here.
                                    </p>
                                    <p className="story-paragraph">
                                        I believe technology is the great equalizer. It doesn't matter if you are a school student or a college graduate feeling stuck—<strong>if you can understand the logic, you can build the solution.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="cta-section">
                    <div className="container">
                        <div className="cta-content cta-fade-in-up">
                            <div className="cta-two-column">
                                <div className="cta-left">
                                    <h2 className="cta-title">
                                        Join the <span className="gradient-text">Revolution</span>
                                    </h2>
                                </div>
                                <div className="cta-right">
                                    <p className="story-paragraph">
                                        It's time to move beyond the scorecard. It's time to get your hands dirty with real technology.
                                    </p>
                                    <p className="story-paragraph">
                                        Come visit us at the academy. Let's stop chasing marks and start building a legacy.
                                    </p>
                                </div>
                            </div>
                            <a
                                href="/#courses"
                                className="cta-button cta-button-hover"
                            >
                                Explore Our Courses
                            </a>
                        </div>
                    </div>
                </section>

                {/* Founder Quote Section */}
                <section className="founder-section">
                    <div className="container">
                        <div className="founder-content founder-fade-in-up">
                            <p className="founder-quote">
                                It's time to move beyond the scorecard. It's time to get your hands dirty with real technology.
                            </p>
                            <div className="founder-info">
                                <p className="founder-name">— Rakesh Kumar</p>
                                <p className="founder-title">Founder, Beyond Marks AI Academy</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
        </div>
    );
};

export default AboutPage;

