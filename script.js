document.addEventListener('DOMContentLoaded', () => {
    const parallaxBg = document.getElementById('parallax-bg');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        heroContent.style.transform = `translateY(${scrollPosition * 0.7}px)`;
    });
});