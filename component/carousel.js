const setupCarousel = () => {
    carouselSwipe();
}

function carouselSwipe() {
    const slider = document.querySelector('.testimonials-slider');
    const radioInputs = document.querySelectorAll('input[type="radio"][name="carousel"]');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = slider.querySelector('.carousel-prev');
    const nextButton = slider.querySelector('.carousel-next');

    let startX, initialTouchPos;
    let currentSlide = 1;

    const totalSlides = radioInputs.length;

    const updateArrows = () => {
        prevButton.disabled = currentSlide === 1;
        nextButton.disabled = currentSlide === totalSlides;
    };

    const goToSlide = (slideNumber) => {
        console.log('gotoslidehit')
        currentSlide = slideNumber;
        radioInputs[slideNumber - 1].checked = true;
        updateArrows();
    };

    const goToNextSlide = () => {
        console.log('goToNextSlidehit')

        if (currentSlide < totalSlides) {
            goToSlide(currentSlide + 1);
        }

    };

    const goToPreviousSlide = () => {
        if (currentSlide > 1) {
            goToSlide(currentSlide - 1);
        }
    };

    const updateCurrentSlideOnDrag = () => {
        radioInputs.forEach((input, index) => {
            if (input.checked) {
                currentSlide = index + 1;
                updateArrows();
            }
        });
    };

    const updateCarouselOnTab = (index) => {
        console.log('tab')

        currentSlide = index + 1;
        radioInputs.forEach((radio, radioIndex) => {
            radio.checked = radioIndex === index;
        });
        updateArrows();
    };

    carouselItems.forEach((item, index) => {
        item.addEventListener('focus', () => {
            updateCarouselOnTab(index);
        });
    });

    const handleGesture = () => {
        // Check if the gesture was triggered by an arrow button click
        console.log('gesture')
        const change = startX - initialTouchPos;

        if (change < -50 && currentSlide < totalSlides) {
            goToNextSlide();
        } else if (change > 50 && currentSlide > 1) {
            goToPreviousSlide();
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

    // slider.addEventListener('touchend', handleGesture);

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

    // Event listeners for arrow buttons
    prevButton.addEventListener('click', (e) => {
        goToPreviousSlide();
    });
    nextButton.addEventListener('click', (e) => {
        goToNextSlide();
    });

    // Initialize the arrows state
    updateArrows();
}

export default setupCarousel;
