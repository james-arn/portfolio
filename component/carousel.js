const setupCarousel = () => {
    carouselSwipe();
}

function carouselSwipe() {
    const slider = document.querySelector('.testimonials-slider');
    const radioInputs = document.querySelectorAll('input[type="radio"][name="carousel"]');
    const carouselItems = document.querySelectorAll('.carousel-item');

    let startX, initialTouchPos;
    let currentSlide = 1;
    const totalSlides = radioInputs.length;

    const goToSlide = (slideNumber) => {
        radioInputs[slideNumber - 1].checked = true;
        currentSlide = slideNumber;
    };

    const updateCurrentSlideOnDrag = () => {
        radioInputs.forEach((input, index) => {
            if (input.checked) {
                currentSlide = index + 1;
            }
        });
    };

    const updateCarouselOnTab = (index) => {
        radioInputs.forEach((radio, radioIndex) => {
            radio.checked = radioIndex === index;
        });
    };

    carouselItems.forEach((item, index) => {
        item.addEventListener('focus', () => {
            updateCarouselOnTab(index);
        });
    });

    const handleGesture = () => {
        const change = startX - initialTouchPos;

        if (change < -50 && currentSlide < totalSlides) {
            currentSlide++;
            goToSlide(currentSlide);
        } else if (change > 50 && currentSlide > 1) {
            currentSlide--;
            goToSlide(currentSlide);
        }
    };

    radioInputs.forEach(input => {
        input.addEventListener('change', updateCurrentSlideOnDrag);
    });

    slider.addEventListener('touchstart', (e) => {
        initialTouchPos = e.touches[0].pageX;
    });

    slider.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches.length === 1) {
            startX = e.touches[0].pageX;
        }
    });

    slider.addEventListener('touchend', handleGesture);

    slider.addEventListener('mousedown', (e) => {
        e.preventDefault();
        initialTouchPos = e.pageX;
    });

    slider.addEventListener('mousemove', (e) => {
        if (e.buttons === 1) {
            startX = e.pageX;
        }
    });

    slider.addEventListener('mouseup', handleGesture);

}

export default setupCarousel