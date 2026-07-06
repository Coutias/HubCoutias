// main.js - Vanilla JS for Parallax and Scroll Reveals

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Setup Intersection Observer for scroll reveals
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    // Elements to reveal
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-text');
    revealElements.forEach(el => revealObserver.observe(el));

    // Initially active elements (Hero)
    setTimeout(() => {
        const heroReveals = document.querySelectorAll('.hero .reveal-text');
        heroReveals.forEach(el => el.classList.add('active'));
    }, 100);

    // 2. Parallax Effect for Hero Image
    const heroImage = document.querySelector('.parallax-bg');
    
    // Use requestAnimationFrame for smooth parallax
    let ticking = false;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
        lastScrollY = window.scrollY;
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateParallax();
                ticking = false;
            });
            ticking = true;
        }
    };

    const updateParallax = () => {
        if (heroImage) {
            // Adjust the multiplier to increase/decrease the parallax speed
            const speed = 0.4;
            const yPos = lastScrollY * speed;
            heroImage.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
});
