import React from 'react';
import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-container glass">
                    <div className="stat-box">
                        <span className="stat-number gradient-text">50+</span>
                        <span className="stat-label">Courses</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number gradient-text">120+</span>
                        <span className="stat-label">Expert Mentors</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number gradient-text">10k+</span>
                        <span className="stat-label">Active Students</span>
                    </div>
                    <div className="stat-box">
                        <span className="stat-number gradient-text">4.9</span>
                        <span className="stat-label">Average Rating</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
