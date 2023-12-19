document.documentElement.classList.add('js-enabled');

import { setupAnimations } from './component/animations.js';
import setupCarousel from './component/carousel.js';
import { setUpModal } from './component/modal.js';

document.addEventListener('DOMContentLoaded', function () {
    setUpModal();
    setupCarousel();
    setupAnimations();
});
