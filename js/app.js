/**
 * KSJ Swim Main Application
 * Initializes all components
 */

import { loadNavBar } from '../src/components/NavBar/NavBar.js';

// Initialize NavBar
loadNavBar();

// Initialize other components here as needed
document.addEventListener('DOMContentLoaded', () => {
  console.log('KSJ Swim app initialized');
});