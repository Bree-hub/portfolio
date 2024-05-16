document.addEventListener('DOMContentLoaded', function () {
    // ScrollReveal initialization
    ScrollReveal().reveal('.home-content, .about-content, .services, .portfolio, .techstack, .interests, .contact, .footer', {
        delay: 300,
        distance: '50px',
        easing: 'ease-in-out',
        origin: 'bottom',
        reset: true,
        viewFactor: 0.2
    });

    // Typed.js initialization
    var typed = new Typed('.multiple-text', {
        strings: ["a Data Scientist.", "an AI Engineer.", "a Machine Learning Expert."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });
});
