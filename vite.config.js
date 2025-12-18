import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Use esbuild for faster builds (default, but explicit)
    minify: 'esbuild',
    // esbuild minification options
    esbuild: {
      drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
      legalComments: 'none', // Remove comments
      treeShaking: true, // Enable tree shaking
    },
    // Optimize chunk size - more aggressive splitting
    chunkSizeWarningLimit: 600, // Lower limit to catch large chunks
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // More aggressive code splitting
          if (id.includes('node_modules')) {
            // React core (small, critical)
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-core';
            }
            // React Router (can be lazy loaded)
            if (id.includes('react-router')) {
              return 'react-router';
            }
            // Framer Motion (heavy library, lazy load)
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // Icons (can be split further)
            if (id.includes('lucide-react')) {
              return 'lucide-icons';
            }
            // React Helmet (small)
            if (id.includes('react-helmet')) {
              return 'react-helmet';
            }
            // Other vendor libraries
            return 'vendor';
          }
          // Split large component files
          if (id.includes('src/components/Curriculum')) {
            return 'curriculum';
          }
          if (id.includes('src/pages/AboutPage')) {
            return 'about-page';
          }
          if (id.includes('src/pages/WhyChooseUsPage')) {
            return 'why-choose-us-page';
          }
        },
        // Optimize chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        // Better compression
        compact: true,
      },
    },
    // Source maps for production debugging (optional - disable for smaller builds)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'esnext',
    // CSS code splitting
    cssCodeSplit: true,
    // Report compressed size
    reportCompressedSize: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['framer-motion'], // Exclude framer-motion from pre-bundling to allow lazy loading
  },
})
