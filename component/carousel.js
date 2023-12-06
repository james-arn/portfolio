const setupCarousel = () => {
    const slider = document.querySelector('.testimonials-slider');
    const radioInputs = document.querySelectorAll('input[type="radio"][name="carousel"]');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = slider.querySelector('.carousel-prev');
    const nextButton = slider.querySelector('.carousel-next');

    let currentSlide = 1;
    let isTransitioning = false;
    const totalSlides = radioInputs.length;

    initializeEventListeners();
    updateArrows();

    function debounce(func, delay) {
        let timer;
        return function () {
            const context = this, args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(context, args), delay);
        };
    }

    function updateArrows() {
        prevButton.disabled = currentSlide === 1 || isTransitioning;
        nextButton.disabled = currentSlide === totalSlides || isTransitioning;
    }

    function goToSlide(slideNumber) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentSlide = slideNumber;
        radioInputs[slideNumber - 1].checked = true;
        updateArrows();

        // Update ARIA live region with the content of the current slide
        const liveRegion = document.getElementById('carousel-live-region');
        const currentCarouselItem = carouselItems[slideNumber - 1];
        liveRegion.textContent = currentCarouselItem.textContent || currentCarouselItem.innerText;


        setTimeout(() => {
            isTransitioning = false;
            updateArrows();
        }, 100);
    }

    const goToNextSlide = debounce(() => {
        if (currentSlide < totalSlides) {
            goToSlide(currentSlide + 1);
        }
    }, 100); // Debounce time

    const goToPreviousSlide = debounce(() => {
        if (currentSlide > 1) {
            goToSlide(currentSlide - 1);
        }
    }, 100); // Debounce time

    function updateCurrentSlideOnDrag() {
        radioInputs.forEach((input, index) => {
            if (input.checked) {
                currentSlide = index + 1;
                updateArrows();
            }
        });
    }

    function initializeEventListeners() {
        let startX, initialTouchPos;

        radioInputs.forEach(input => {
            input.addEventListener('change', updateCurrentSlideOnDrag);
        });

        const handleGesture = (e) => {
            const change = startX - initialTouchPos;
            if (change < -50 && currentSlide < totalSlides) {
                goToNextSlide();
            } else if (change > 50 && currentSlide > 1) {
                goToPreviousSlide();
            }
        };

        slider.addEventListener('touchstart', (e) => {
            initialTouchPos = e.touches[0].pageX;
        });

        slider.addEventListener('touchmove', (e) => {
            if (e.touches && e.touches.length === 1) {
                startX = e.touches[0].pageX;
            }
        });

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

        prevButton.addEventListener('click', (e) => {
            e.stopPropagation();
            goToPreviousSlide();
        }, { capture: true });

        nextButton.addEventListener('click', (e) => {
            e.stopPropagation();
            goToNextSlide();
        }, { capture: true });
    }
}

export default setupCarousel;
