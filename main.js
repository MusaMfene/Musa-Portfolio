// script.js

// This JavaScript provides smooth scrolling behavior if you add internal links
// For example, if you had <a href="#about-section">About</a> in your navigation,
// clicking it would smoothly scroll to the section with id="about-section".

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target element using the href attribute
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // If the target element exists, scroll to it smoothly
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// You can add more JavaScript here for other interactive elements later if needed.
// For instance, a simple console log to confirm it's linked:
console.log("Musa Mfene's portfolio script loaded successfully!");
