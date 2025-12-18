import React, { lazy, Suspense } from 'react';
import { X, Clock, AlertCircle } from 'lucide-react';
import './ComingSoonModal.css';

// Lazy load framer-motion to prevent main-thread blocking (TBT reduction)
const MotionDiv = lazy(() => 
  import('framer-motion').then(module => ({
    default: module.motion.div
  }))
);

// AnimatePresence wrapper component
const AnimatePresenceWrapper = lazy(() => 
  import('framer-motion').then(module => {
    const { AnimatePresence } = module;
    return {
      default: ({ children }) => <AnimatePresence>{children}</AnimatePresence>
    };
  })
);

const ComingSoonModal = ({ isOpen, onClose }) => {
    return (
        <Suspense fallback={isOpen ? <div className="modal-backdrop" onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 9998 }} /> : null}>
            <AnimatePresenceWrapper>
                {isOpen && (
                    <>
                        <MotionDiv
                            className="modal-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                        />
                        <div className="modal-wrapper">
                            <MotionDiv
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
                                <MotionDiv
                                    className="modal-icon"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
                                >
                                    <AlertCircle size={48} />
                                </MotionDiv>
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
                        </MotionDiv>
                    </div>
                </>
            )}
            </AnimatePresenceWrapper>
        </Suspense>
    );
};

export default ComingSoonModal;

