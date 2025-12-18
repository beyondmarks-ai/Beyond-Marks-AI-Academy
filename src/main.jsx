import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'

const root = document.getElementById('root');

if (!root) {
  console.error('Root element not found!');
  document.body.innerHTML = '<div style="color: red; padding: 50px;">Error: Root element not found!</div>';
} else {
  try {
    createRoot(root).render(
      <StrictMode>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </StrictMode>
    );
  } catch (error) {
    console.error('Error rendering app:', error);
    root.innerHTML = `
      <div style="color: white; padding: 50px; background: #030305; font-family: Arial;">
        <h1 style="color: #ff4444;">Error Loading App</h1>
        <p><strong>Error:</strong> ${error.message}</p>
        <pre style="background: #1a1a1a; padding: 20px; border-radius: 8px; overflow: auto;">${error.stack}</pre>
      </div>
    `;
  }
}
