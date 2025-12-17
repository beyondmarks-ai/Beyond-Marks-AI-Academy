import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, AlertCircle } from 'lucide-react';
import './ComingSoonModal.css';

const ComingSoonModal = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <div className="modal-wrapper">
                        <motion.div
                            className="modal-container"
                            initial={{ opacity: 0, scale: 0.95, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 50 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <button 
                                className="modal-close" 
                                onClick={onClose}
                                aria-label="Close coming soon modal"
                            >
                                <X size={20} />
                            </button>
                            <div className="modal-content">
                                <motion.div
                                    className="modal-icon"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                                >
                                    <AlertCircle size={48} />
                                </motion.div>
                                <h2 className="modal-title">We Apologize</h2>
                                <p className="modal-message">
                                    We're sorry, but this feature is currently under development.
                                </p>
                                <p className="modal-submessage">
                                    Our team is working hard to bring you the best experience. Please check back soon!
                                </p>
                                <div className="modal-footer">
                                    <button className="modal-button" onClick={onClose}>
                                        Understood
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ComingSoonModal;

