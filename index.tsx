import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from './ErrorBoundary';

// Ensure the DOM is fully loaded before mounting
window.addEventListener('load', () => {
  let rootElement = document.getElementById('root');

  if (!rootElement) {
    // Fallback: Create root element if it doesn't exist
    rootElement = document.createElement('div');
    rootElement.id = 'root';
    document.body.appendChild(rootElement);
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </React.StrictMode>
  );
});