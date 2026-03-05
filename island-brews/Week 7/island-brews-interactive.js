/**
 * Island Brews Interactive Features
 * ICS 107 - Week 7 Assignment
 *
 * This script adds two interactive features to your website:
 * 1. FAQ Accordion - Click questions to show/hide answers
 * 2. Theme Toggle - Switch between light and dark mode
 *
 * IMPORTANT: This script looks for specific classes in your HTML.
 * If your HTML doesn't have the right classes, nothing will happen!
 *
 * Required HTML structure for FAQ:
 *   <button class="faq-question" aria-expanded="false">Question text</button>
 *   <div class="faq-answer" hidden>Answer content</div>
 *
 * Required HTML structure for Theme Toggle:
 *   <button class="theme-toggle">Dark Mode</button>
 */

// ==============================================
// FAQ ACCORDION
// ==============================================
// This code finds all buttons with class "faq-question"
// and makes them clickable to show/hide answers

const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Find the answer div (it should be right after the button)
        const answer = button.nextElementSibling;

        // Check if this question is already open
        const isCurrentlyOpen = button.getAttribute('aria-expanded') === 'true';

        // First, close ALL answers (so only one is open at a time)
        faqButtons.forEach(function(otherButton) {
            otherButton.setAttribute('aria-expanded', 'false');
            otherButton.nextElementSibling.hidden = true;
        });

        // If this question was closed, open it
        // (If it was already open, it stays closed from the step above)
        if (!isCurrentlyOpen) {
            button.setAttribute('aria-expanded', 'true');
            answer.hidden = false;
        }
    });
});


// ==============================================
// THEME TOGGLE (Light/Dark Mode)
// ==============================================
// This code finds the button with class "theme-toggle"
// and makes it switch between light and dark themes

const themeToggle = document.querySelector('.theme-toggle');

// Only run this code if a theme toggle button exists on the page
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        // Toggle the "dark-mode" class on the body element
        document.body.classList.toggle('dark-mode');

        // Check if dark mode is now active
        const isDarkMode = document.body.classList.contains('dark-mode');

        // Update the button text to show current state
        if (isDarkMode) {
            themeToggle.textContent = 'Light Mode';
        } else {
            themeToggle.textContent = 'Dark Mode';
        }
    });
}
