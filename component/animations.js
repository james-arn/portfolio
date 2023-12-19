export const revealSection = () => {
    const reveals = document.querySelectorAll('.fade-in-scroll');
    const windowHeight = window.innerHeight;

    reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
};

export function setupAnimations() {
    window.addEventListener('scroll', revealSection);
    revealSection(); // Initialize reveal function to check initially visible elements
}