"use client";

import React, { useState } from 'react';
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
    Bot
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Shared Components ---

const Button = ({
    children,
    variant = 'primary',
    className = '',
    onClick,
    ...props
}: {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
    onClick?: () => void;
}) => {
    const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
    const variants = {
        primary: "bg-white text-black hover:bg-gray-100 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_8px_25px_rgba(255,255,255,0.25)]",
        outline: "bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/50 backdrop-blur-sm",
        ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={`
      relative overflow-hidden rounded-2xl p-6 sm:p-8
      bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl
      hover:bg-white/[0.05] hover:border-white/[0.12]
      transition-all duration-300 group
      ${className}
    `}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </div>
    );
};

// --- Page Sections ---

const Navbar = () => (
    // Visual placeholder for continuity
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#030305]/80 border-b border-white/5">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            StudyBuddy AI
        </div>
        <Button variant="outline" className="!py-2 !px-4 text-sm">Sign In</Button>
    </nav>
);

const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-md bg-[#08080c] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500" />
                        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                        <h3 className="text-2xl font-bold text-white mb-2">Join the Revolution</h3>
                        <p className="text-gray-400 mb-6">Be the first to experience the future of personalized learning.</p>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="student@example.com"
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1.5">Are you a Student?</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                                    <option>Yes, I'm a Student</option>
                                    <option>No, I'm a Parent/Teacher</option>
                                </select>
                            </div>
                            <Button className="w-full mt-2">Join Waitlist</Button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function ProductPage() {
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    const features = [
        {
            icon: <TrendingUp className="text-blue-400" size={24} />,
            title: "Progress Tracking",
            description: "Visual dashboards that track your growth curve in real-time."
        },
        {
            icon: <Globe className="text-violet-400" size={24} />,
            title: "Multi-Language Support",
            description: "Learn concepts in Hindi, Kannada, or English seamlessly."
        },
        {
            icon: <Video className="text-cyan-400" size={24} />,
            title: "Recorded Concepts",
            description: "Access a vast library of on-demand video lessons anytime."
        },
        {
            icon: <Brain className="text-pink-400" size={24} />,
            title: "Smart Memory",
            description: "AI remembers your learning context for up to 1 week."
        },
        {
            icon: <Bot className="text-emerald-400" size={24} />,
            title: "AI Transformation",
            description: "Turn your questions into beautiful infographic notes instantly."
        },
        {
            icon: <Zap className="text-amber-400" size={24} />,
            title: "Interactive Learning",
            description: "Generate custom flashcards and quizzes to test your knowledge."
        }
    ];

    return (
        <div className="min-h-screen bg-[#030305] text-white font-['Outfit',_sans-serif] selection:bg-blue-500/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-violet-600/10 rounded-full blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wider mb-6 uppercase"
                    >
                        <Sparkles size={14} />
                        <span>The Future of Learning</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 tracking-tight"
                    >
                        Meet Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400">
                            StudyBuddy AI
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                    >
                        Experience personalized tutoring powered by Gemini Live.
                        Break down complex topics, track your progress, and learn in your native language.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button onClick={() => setIsWaitlistOpen(true)}>
                            Join Waitlist <ArrowRight size={18} />
                        </Button>
                        <Button variant="outline">
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* The "Jarvis" Experience */}
            <section className="py-20 px-4 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="rounded-3xl border border-white/10 bg-[#08080c]/50 backdrop-blur-sm overflow-hidden relative min-h-[500px] flex items-center justify-center">
                        {/* Simulation of AI Interface */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030305]/80 z-10 pointer-events-none" />

                        <div className="text-center z-20 max-w-lg">
                            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-violet-600 rounded-full blur-2xl animate-pulse opacity-70 mb-8" />
                            <div className="relative">
                                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 mb-6">
                                    <Zap className="text-white" size={32} />
                                </div>
                            </div>
                            <h3 className="text-3xl font-bold mb-4">"Hey Jarvis, explain Quantum Physics in Kannada"</h3>
                            <div className="flex items-center justify-center gap-2 text-cyan-400 bg-cyan-950/30 px-4 py-2 rounded-full mx-auto w-fit border border-cyan-500/20">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                <span className="text-sm font-medium">Gemini Live Active</span>
                            </div>
                        </div>

                        {/* Decorative Grid */}
                        <div className="absolute inset-0 opacity-20"
                            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
                        />
                    </div>
                </div>
            </section>

            {/* Feature Grid */}
            <section className="py-24 px-4 bg-[#08080c]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Supercharge Your Learning</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to excel, packed into one intelligent platform.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <Card key={idx} className="h-full">
                                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Physical Accessibility */}
            <section className="py-24 px-4 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold tracking-wider mb-6 uppercase">
                            <MapPin size={14} />
                            <span>Offline Office</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Learning Without <br /> Limits</h2>
                        <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                            No phone? No PC? No problem. <br />
                            Visit our Offline Office exclusively at <span className="text-white font-semibold">Meer's Tower, Bidar</span>.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Access AI Tools on standard PCs",
                                "High-speed internet for seamless learning",
                                "Mentors available for in-person doubts"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="text-emerald-500" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="outline" className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50">
                            Get Directions
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 relative">
                            {/* Placeholder for map or office image */}
                            <div className="absolute inset-0 bg-[#111115] flex flex-col items-center justify-center p-8 text-center group">
                                <MapPin className="text-emerald-500/50 mb-4 group-hover:scale-110 transition-transform duration-300" size={64} />
                                <p className="text-gray-500 font-medium">Meer's Tower, Bidar</p>
                                <p className="text-gray-600 text-sm mt-2">Open Mon-Sat, 9AM - 8PM</p>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-full h-full border border-white/5 rounded-3xl -z-10 bg-[#08080c]" />
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-20 px-4 text-center">
                <div className="max-w-4xl mx-auto bg-gradient-to-b from-blue-900/20 to-transparent border border-white/10 rounded-3xl p-12 relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your grades?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join thousands of students who are already learning smarter, not harder.</p>
                    <Button onClick={() => setIsWaitlistOpen(true)} className="px-10 py-4 text-lg">
                        Get Early Access
                    </Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5 bg-[#030305]">
                <p>© {new Date().getFullYear()} StudyBuddy AI by Beyond Marks. All rights reserved.</p>
            </footer>

            <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
        </div>
    );
}
