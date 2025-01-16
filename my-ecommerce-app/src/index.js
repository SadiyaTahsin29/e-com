
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import './index.css'; // Ensure this path is correct for your CSS file
import App from './App'; // Ensure the path to App is correct

// Find the root container in the HTML
const container = document.getElementById('root');
const root = createRoot(container); // Create a root instance

// Render the App component within React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
