import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Rocket, Brain, ShieldCheck, FolderGit,
    Bot, Zap, Wand2, Code2,
    GraduationCap, UserCheck
} from 'lucide-react';
import './WhyChooseUs.css';

const contentData = {
    parents: [
        {
            title: "The First Mover Advantage",
            desc: "The world is shifting from 'Computer Literacy' to 'AI Literacy.' By starting now, your child isn't just learning a tool; they are securing a massive competitive advantage years before their peers catch up. We prepare them for jobs that don’t even exist yet.",
            icon: <Rocket size={28} />
        },
        {
            title: 'Skills Beyond the Report Card',
            desc: "Grades get you into college; skills get you hired. While traditional tuition focuses on rote memorization for the next exam, we focus on logic, problem-solving, and automation—skills that define the top 1% of future professionals.",
            icon: <Brain size={28} />
        },
        {
            title: 'Safe & Guided AI Exploration',
            desc: "The internet is vast, and AI can be overwhelming. We provide a structured, ethical, and safe environment where students learn to control technology responsibly, rather than being passively consumed by it.",
            icon: <ShieldCheck size={28} />
        },
        {
            title: 'Portfolio Over Certificates',
            desc: "We believe in 'Show, Don't Just Tell.' Your child won't just leave with a certificate; they will leave with a portfolio of working AI projects—chatbots, apps, and automation workflows—that will impress college admissions officers and future employers alike.",
            icon: <FolderGit size={28} />
        }
    ],
    students: [
        {
            title: "Build Your Own Jarvis",
            desc: "Stop just using apps and start building them. We teach you how to create your own AI assistants that can do your research, organize your life, and even write code. It’s not just study; it’s building your own superpowers.",
            icon: <Bot size={28} />
        },
        {
            title: 'Learn at 10x Speed',
            desc: "Struggling with complex topics? We teach you how to use AI to break down difficult subjects, visualize concepts, and learn faster than you ever thought possible. It’s the ultimate productivity hack for your academic life.",
            icon: <Zap size={28} />
        },
        {
            title: 'No More Boring Repetition',
            desc: "Hate doing the same repetitive tasks over and over? We teach you 'No-Code' automation. Learn to automate the boring stuff so you can focus on the creative projects you actually enjoy.",
            icon: <Wand2 size={28} />
        },
        {
            title: 'Be the Creator, Not the User',
            desc: "Most people just scroll through feeds. You will learn the technology behind the algorithms. Whether it’s generating art, cloning voices for content creation, or building smart websites, you will move from a consumer to a creator.",
            icon: <Code2 size={28} />
        }
    ]
};


const WhyChooseUs = () => {
    const [activeTab, setActiveTab] = useState('parents');

    return (
        <section className="why-choose-us" id="features">
            <div className="container">
                <div className="split-layout">
                    {/* Left Side: Sticky Header & Navigation */}
                    <div className="layout-sidebar">
                        <div className="section-header-left">
                            <span className="subtitle">WHY CHOOSE US</span>
                            <h2>Redefining <br /><span className="gradient-text">Education</span></h2>
                            <p className="section-desc-left">
                                We don&apos;t just teach coding; we teach the mindset of the future. Select a path to see how we empower your journey.
                            </p>
                        </div>

                        <div className="vertical-tabs">
                            <button
                                className={`v-tab-btn ${activeTab === 'parents' ? 'active' : ''}`}
                                onClick={() => setActiveTab('parents')}
                            >
                                <div className="tab-icon-box">
                                    <UserCheck size={20} />
                                </div>
                                <div className="tab-info">
                                    <span className="tab-label">For Parents</span>
                                    <span className="tab-sub">The Strategic Advantage</span>
                                </div>
                                {activeTab === 'parents' && <motion.div layoutId="activeTab" className="active-line" />}
                            </button>

                            <button
                                className={`v-tab-btn ${activeTab === 'students' ? 'active' : ''}`}
                                onClick={() => setActiveTab('students')}
                            >
                                <div className="tab-icon-box">
                                    <GraduationCap size={20} />
                                </div>
                                <div className="tab-info">
                                    <span className="tab-label">For Students</span>
                                    <span className="tab-sub">Unlock Superpowers</span>
                                </div>
                                {activeTab === 'students' && <motion.div layoutId="activeTab" className="active-line" />}
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Content Grid */}
                    <div className="layout-content">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                className="bento-grid"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {contentData[activeTab].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="bento-card glass"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="card-icon-floating">
                                            {item.icon}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="card-shine" />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                <motion.div
                    className="philosophy-section"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="philosophy-content">
                        <div className="quote-mark">&quot;</div>
                        <h3>The &quot;Beyond Marks&quot; Philosophy</h3>
                        <p className="philosophy-text">
                            Why stop at 100/100? At Beyond Marks AI Academy, we believe the scorecard is just the beginning.
                            In a world where AI can answer any test question in seconds, the students who succeed won&apos;t be
                            the ones who can remember the most facts—they will be the ones who can <span className="highlight">ask the right questions</span> and <span className="highlight">build the best solutions</span>.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;
