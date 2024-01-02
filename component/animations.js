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

const typeHeading = () => {
    const element = document.querySelector('.typing-effect');
    element.style.display = 'block';
    element.setAttribute('aria-hidden', 'false'); 

      const fullText = element.textContent;
      element.textContent = '';
    
      let charIndex = 0;
      const typingDelay = 30; // Adjust typing speed
    
      function typeCharacter() {
        if (charIndex < fullText.length) {
          element.textContent += fullText[charIndex];
          charIndex++;
          setTimeout(typeCharacter, typingDelay);
        }
      }
      setTimeout(typeCharacter, 1000); // delay before starting
    }

export function setupAnimations() {
    window.addEventListener('scroll', revealSection);
    revealSection(); // Initialize reveal function to check initially visible elements
    typeHeading();
}