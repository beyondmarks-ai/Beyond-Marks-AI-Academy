import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// HomePage loads synchronously (critical for initial render)
import HomePage from './pages/HomePage';

// Lazy load other pages for route-based code splitting
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const StudyBuddyPage = lazy(() => import('./pages/StudyBuddyPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhyChooseUsPage = lazy(() => import('./pages/WhyChooseUsPage'));

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const StudentCode = lazy(() => import('./pages/StudentCode'));
const WorkshopPage = lazy(() => import('./pages/WorkshopPage'));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#030305',
    color: '#ffffff'
  }} aria-label="Loading page">
    <div style={{ textAlign: 'center' }}>
      <div style={{
        width: '40px',
        height: '40px',
        border: '3px solid rgba(255,255,255,0.1)',
        borderTopColor: '#3b82f6',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        margin: '0 auto 16px'
      }}></div>
      <p style={{ color: '#b8c5d3' }}>Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/courses"
          element={
            <Suspense fallback={<PageLoader />}>
              <CoursesPage />
            </Suspense>
          }
        />
        <Route
          path="/products/studybuddy"
          element={
            <Suspense fallback={<PageLoader />}>
              <StudyBuddyPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/why-choose-us"
          element={
            <Suspense fallback={<PageLoader />}>
              <WhyChooseUsPage />
            </Suspense>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <PrivacyPolicy />
            </Suspense>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <Suspense fallback={<PageLoader />}>
              <TermsConditions />
            </Suspense>
          }
        />
        <Route
          path="/refund-policy"
          element={
            <Suspense fallback={<PageLoader />}>
              <RefundPolicy />
            </Suspense>
          }
        />
        <Route
          path="/student-code"
          element={
            <Suspense fallback={<PageLoader />}>
              <StudentCode />
            </Suspense>
          }
        />
        <Route
          path="/workshop"
          element={
            <Suspense fallback={<PageLoader />}>
              <WorkshopPage />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
