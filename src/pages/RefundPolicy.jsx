import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import SEO from '../components/SEO';

const RefundPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="page-wrapper">
            <SEO
                title="Refund Policy"
                description="Understand the refund and cancellation policies for monthly subscriptions at Beyond Marks AI Academy."
                url="/refund-policy"
            />
            <Navbar />
            <main className="legal-page-content" style={{ paddingTop: '100px', paddingBottom: '60px', minHeight: '100vh', background: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--primary-color)' }}>Refund & Cancellation Policy</h1>

                    <div className="legal-text" style={{ lineHeight: '1.8' }}>
                        <p>At Beyond Marks AI Academy, we operate on a monthly subscription model to provide continuous learning and mentorship.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Monthly Subscription Policy</h2>
                        <p>Our courses are billed on a monthly basis. Fees are paid in advance for the upcoming month of access and mentorship.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>No Refund Policy</h2>
                        <p><strong>All monthly fee payments are final and non-refundable.</strong> Once a payment has been processed for a month, no refunds will be issued for that period, regardless of attendance, course usage, or early withdrawal. We do not offer pro-rated refunds for partial months.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Cancellation</h2>
                        <p>You may choose to discontinue your enrollment at any time. To stop future billing, you must notify us before the start of the next billing cycle. Your access will continue until the end of the current paid month.</p>

                        <h2 style={{ fontSize: '1.5rem', marginTop: '30px', marginBottom: '15px' }}>Exceptions</h2>
                        <p>In the unlikely event that the Academy cancels the entire program or a specific monthly module, a refund for that specific cancelled period will be issued.</p>

                        <p style={{ marginTop: '20px' }}>For billing queries, email us at <a href="mailto:contact@beyondmarks.ai" style={{ color: 'var(--accent)' }}>contact@beyondmarks.ai</a>.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default RefundPolicy;
