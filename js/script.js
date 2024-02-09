// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Toggle mobile menu
    const toggleMenuBtn = document.querySelector('.toggle-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    toggleMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('open');
        });
    });
});
