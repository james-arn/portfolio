document.documentElement.classList.add('js-enabled');

import { setupAnimations } from './component/animations.js';
import setupCarousel from './component/carousel.js';
import { setUpModal } from './component/modal.js';
import { chatbotTheme } from './theme/theme.js';

document.addEventListener('DOMContentLoaded', function () {
    setUpModal();
    setupCarousel();
    setupAnimations();
    import("https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js").then((module) => {
        const Chatbot = module.default;
        Chatbot.init({
            chatflowid: "e761d2f6-af46-43a7-baf7-f5e54c1bd0fe",
            apiHost: "https://flowise-ibs6.onrender.com",
            theme: chatbotTheme
        });
})
})
