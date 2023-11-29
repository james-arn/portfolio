import setupCarousel from './component/carousel.js';
import { openModal, closeModal } from './component/modal.js';
import { setupModalBackgroundListener, setupEscapeKeyClose, setupProjectTabFocusHover } from './eventListeners.js';

document.addEventListener('DOMContentLoaded', function () {
    setupModalBackgroundListener();
    setupEscapeKeyClose();
    setupProjectTabFocusHover();
    setupCarousel();

    // buttons or elements to trigger modals
    document.getElementById('readMoreBtn1').addEventListener('click', function () {
        openModal(1);
    });
    document.getElementById('readMoreBtn2').addEventListener('click', function () {
        openModal(2);
    });
    document.getElementById('readMoreBtn3').addEventListener('click', function () {
        openModal(3);
    });
    document.getElementById('closeModalButton').addEventListener('click', closeModal);

});
