/**
 * KSJ Swim Main Application
 * Initializes all components
 */

import { loadNavBar } from '../src/components/NavBar/NavBar.js';
import { loadJoshCard } from '../src/components/CardTitle/Instructors/Josh.js';
import { loadInstructor2Card } from '../src/components/CardTitle/Instructors/instructor2.js';
import { loadInstructor3Card } from '../src/components/CardTitle/Instructors/instructor3.js';


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

if(document.getElementById('navbar-root')) {
    const navbarHTML = loadNavBar();
    document.getElementById('navbar-root').innerHTML = navbarHTML;
}

if(document.getElementById('instructor1')) {
    const joshCardHTML = loadJoshCard();
    document.getElementById('instructor1').innerHTML = joshCardHTML;
}

if(document.getElementById('instructor2')) {
    const instructor2CardHTML = loadInstructor2Card();
    document.getElementById('instructor2').innerHTML = instructor2CardHTML;
}

if(document.getElementById('instructor3')) {
    const instructor3CardHTML = loadInstructor3Card();
    document.getElementById('instructor3').innerHTML = instructor3CardHTML;
}