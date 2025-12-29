# 🚀 Performance & Accessibility Optimization Plan
## Target: 95+ Score Across All Lighthouse Metrics

---

## 📊 CURRENT STATUS
- **Technical SEO**: ✅ 100/100
- **Mobile Performance**: ⚠️ 87/100 (Target: 95+)
- **Accessibility**: ⚠️ 77/100 (Target: 95+)

---

## 🔴 DIRECTIVE 1: FIX ACCESSIBILITY (77 → 95+)

### Issue 1.1: Heading Hierarchy Violations
**Problem**: H1 → H3 skipping H2 (Hero stats section)
**Files Affected**:
- `src/components/Hero.jsx` (Line 55-65: H3 used directly after H1)

**Fix**: Change H3 to H2 in stats section

### Issue 1.2: Missing aria-labels on Icon-Only Buttons
**Problem**: Buttons without text content lack accessible names
**Files Affected**:
- `src/components/Navbar.jsx` (Line 54-55: Mobile toggle button)
- `src/components/DemoBookingModal.jsx` (Line 111: Close button)
- `src/components/ComingSoonModal.jsx` (Line 26: Close button)
- `src/components/Curriculum.jsx` (Line 520: Drawer close button)

**Fix**: Add `aria-label` attributes to all icon-only buttons

### Issue 1.3: Missing Alt Text on Linked Images
**Files Affected**:
- `src/components/Navbar.jsx` (Line 39: Logo image in Link)
- All other linked images

**Fix**: Ensure all images have descriptive `alt` text

### Issue 1.4: Color Contrast Issues
**Problem**: Text colors may not meet WCAG AA (4.5:1 ratio)
**Files to Check**:
- `src/index.css` (Text muted colors)
- All component CSS files

**Fix**: Adjust colors to meet contrast requirements

---

## ⚡ DIRECTIVE 2: ELIMINATE RENDER-BLOCKING RESOURCES

### Issue 2.1: Google Fonts Loading Synchronously
**Problem**: `@import` in CSS blocks rendering
**File**: `src/index.css` (Line 1)

**Fix**: 
- Move font loading to `<head>` with `rel="preconnect"` and `rel="preload"`
- Use `font-display: swap` strategy
- Or self-host fonts

### Issue 2.2: Critical CSS Not Inlined
**Problem**: Above-the-fold CSS not optimized
**Fix**: Extract critical CSS for Hero section

---

## 📐 DIRECTIVE 3: STABILIZE LAYOUT (CLS)

### Issue 3.1: Images Without Explicit Dimensions
**Problem**: All images missing `width` and `height` attributes
**Files Affected**:
- `src/components/Navbar.jsx` (Logo)
- `src/components/ToolsMarquee.jsx` (All tool logos)
- `src/components/Curriculum.jsx` (Module logos)
- All other image components

**Fix**: Add explicit `width` and `height` to all `<img>` tags

---

## 🧹 DIRECTIVE 4: CODE SPLITTING & LAZY LOADING

### Issue 4.1: Heavy Components Loaded Synchronously
**Problem**: All components load upfront
**Files Affected**:
- `src/components/Curriculum.jsx` (Heavy drawer component)
- `src/components/DemoBookingModal.jsx` (Modal)
- `src/components/ToolsMarquee.jsx` (Below fold)

**Fix**: 
- Lazy load below-the-fold components
- Code split modals and drawers
- Use React.lazy() and Suspense

---

## 📋 IMPLEMENTATION CHECKLIST

### Phase 1: Accessibility Fixes
- [ ] Fix heading hierarchy (H3 → H2 in Hero stats)
- [ ] Add aria-labels to all icon-only buttons
- [ ] Verify all images have descriptive alt text
- [ ] Fix color contrast ratios (WCAG AA)

### Phase 2: Performance Optimizations
- [ ] Optimize Google Fonts loading
- [ ] Add preconnect/preload for fonts
- [ ] Extract critical CSS
- [ ] Add width/height to all images

### Phase 3: Code Splitting
- [ ] Lazy load ToolsMarquee component
- [ ] Lazy load Curriculum drawer
- [ ] Lazy load modals
- [ ] Add Suspense boundaries

### Phase 4: Testing & Validation
- [ ] Run Lighthouse audit
- [ ] Verify accessibility score ≥ 95
- [ ] Verify performance score ≥ 95
- [ ] Check CLS score
- [ ] Test on mobile devices

---

## 🎯 EXPECTED RESULTS

After implementation:
- **Accessibility**: 77 → 95+ ✅
- **Performance**: 87 → 95+ ✅
- **CLS**: Improved ✅
- **LCP**: Improved ✅
- **FID/INP**: Maintained ✅

---

## 📝 NOTES

- This is a **React + Vite** project (not Next.js)
- All fixes maintain existing functionality
- No breaking changes to UI/UX
- Progressive enhancement approach





