$(function() {

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const totalSlides = slides.length;
    let autoSlideInterval;

    const slider = document.querySelector('.slider');
    const prevArrow = document.querySelector('.arrow-prev');
    const nextArrow = document.querySelector('.arrow-next');

    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 25}%)`;
        
        // Обновляем индикаторы
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        updateSlider();
        resetAutoSlide();
    }

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        updateSlider();
        resetAutoSlide();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Обработчики событий для стрелок
    prevArrow.addEventListener('click', () => changeSlide(-1));
    nextArrow.addEventListener('click', () => changeSlide(1));

    // Обработчики для индикаторов
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Пауза автопрокрутки при наведении
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(autoSlideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        startAutoSlide();
    });

    // Запускаем автоматическую прокрутку
    startAutoSlide();

    // Инициализация
    updateSlider();

});