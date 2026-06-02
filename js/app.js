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

const scrollButton = document.getElementById('scroll-to-cards');

if (scrollButton) {
    scrollButton.addEventListener('click', () => {
        const cardsSection = document.getElementById('ksj-cards-section');
        if (cardsSection) {
            cardsSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}