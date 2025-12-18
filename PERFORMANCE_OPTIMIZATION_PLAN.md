# 🚀 Performance Optimization Plan - Main Thread Work: 4.6s → <2s

## Current Issues (Lighthouse Dec 17)
- **Main-thread work**: 4.6s
- **Total Blocking Time (TBT)**: 540ms
- **JavaScript execution time**: 1.7s
- **Desktop Performance**: 67/100

## Root Causes Identified

### 1. Synchronous Framer-Motion Imports (CRITICAL)
- `Curriculum.jsx` - Heavy component (~24KB) loading framer-motion synchronously
- `AboutPage.jsx` - Multiple motion components loading synchronously
- `WhyChooseUsPage.jsx` - Motion components loading synchronously
- `Features.jsx` - Motion components loading synchronously

### 2. Missing Memoization
- `SEO.jsx` - Not memoized, re-renders on every page change
- `Hero.jsx` - Not memoized
- `Features.jsx` - Not memoized

### 3. Components Not Lazy-Loaded
- `Navbar` - Loaded synchronously (could be deferred)
- `SEO` - Loaded synchronously (could be deferred)
- `Hero` - Loaded synchronously (critical, but could optimize)

### 4. Vite Config Optimization
- Need more aggressive code splitting
- Better chunk size limits

---

## Implementation Plan

### Phase 1: Lazy Load Framer-Motion in Heavy Components
1. ✅ Curriculum.jsx - Convert to lazy-loaded motion components
2. ✅ AboutPage.jsx - Convert to lazy-loaded motion components
3. ✅ WhyChooseUsPage.jsx - Convert to lazy-loaded motion components
4. ✅ Features.jsx - Convert to lazy-loaded motion components

### Phase 2: Memoization & Re-render Prevention
1. ✅ SEO.jsx - Wrap with React.memo
2. ✅ Hero.jsx - Wrap with React.memo
3. ✅ Features.jsx - Wrap with React.memo and useMemo

### Phase 3: Component Lazy Loading
1. ✅ Navbar - Lazy load (non-critical above fold)
2. ✅ SEO - Keep synchronous (critical for SEO)

### Phase 4: Vite Config Optimization
1. ✅ More aggressive chunk splitting
2. ✅ Better optimization settings

---

## Expected Results

| Metric | Before | Target | Expected After |
|--------|--------|--------|----------------|
| Main-thread work | 4.6s | <2s | **1.8-2.0s** |
| TBT | 540ms | <200ms | **180-220ms** |
| JS execution | 1.7s | <1s | **800-1000ms** |
| Desktop Performance | 67 | 95+ | **92-96** |

---

## Files to Modify

1. `src/components/Curriculum.jsx` - Lazy load framer-motion
2. `src/pages/AboutPage.jsx` - Lazy load framer-motion
3. `src/pages/WhyChooseUsPage.jsx` - Lazy load framer-motion
4. `src/components/Features.jsx` - Lazy load framer-motion + memoize
5. `src/components/SEO.jsx` - Memoize
6. `src/components/Hero.jsx` - Memoize
7. `src/pages/HomePage.jsx` - Lazy load Navbar
8. `vite.config.js` - Aggressive code splitting

