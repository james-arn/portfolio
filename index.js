import { setupAnimations } from './component/animations.js';
import setupCarousel from './component/carousel.js';
import { setUpModal } from './component/modal.js';
import { chatbotTheme } from './theme/theme.js';
import { setUpChatbot } from './component/setupChatbot.js';

document.addEventListener('DOMContentLoaded', function () {
    setUpModal();
    setupCarousel();
    setupAnimations();
    setUpChatbot("e761d2f6-af46-43a7-baf7-f5e54c1bd0fe", "https://flowise-ibs6.onrender.com", chatbotTheme);
});
