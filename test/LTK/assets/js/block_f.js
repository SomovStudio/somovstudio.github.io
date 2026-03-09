document.addEventListener('DOMContentLoaded', function() {
    function initBlockFSlider() {
        const sliderContainer = document.querySelector('.block-f-slider');
        const sliderItems = document.querySelectorAll('.block-f-slider-item');
        const prevBtn = document.querySelector('.block-f-slider-pagination-prev-btn');
        const nextBtn = document.querySelector('.block-f-slider-pagination-next-btn');
        const mainImage = document.querySelector('.block-f-image-left');
        
        if (!sliderContainer || !sliderItems.length || !prevBtn || !nextBtn || !mainImage) {
            console.log('Элементы слайдера block-f не найдены');
            return;
        }
        
        let currentIndex = 0;
        const itemWidth = sliderItems[0].offsetWidth + parseFloat(getComputedStyle(sliderItems[0]).marginLeft) * 2;
        const visibleItems = Math.floor(sliderContainer.offsetWidth / itemWidth);
        const maxIndex = Math.max(0, sliderItems.length - visibleItems);
        
        // Функция для обновления позиции слайдера и главного изображения
        function updateSlider() {
            // Прокрутка слайдера
            const scrollAmount = currentIndex * itemWidth;
            sliderContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Обновление главного изображения
            const currentSlideImage = sliderItems[currentIndex].querySelector('img');
            if (currentSlideImage) {
                mainImage.src = currentSlideImage.src;
                mainImage.alt = currentSlideImage.alt || 'ЛТК Арена';
            }
            
            // Обновление состояния кнопок
            updateButtons();
        }
        
        // Функция для обновления состояния кнопок
        function updateButtons() {
            if (prevBtn) {
                prevBtn.disabled = currentIndex <= 0;
            }
            if (nextBtn) {
                nextBtn.disabled = currentIndex >= maxIndex;
            }
        }
        
        // Обработчик для кнопки "назад"
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            });
        }
        
        // Обработчик для кнопки "вперед"
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateSlider();
                }
            });
        }
        
        // Клик по элементу слайдера для быстрого переключения
        sliderItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                if (index < maxIndex || index === maxIndex) {
                    currentIndex = index;
                    updateSlider();
                }
            });
            
            // Добавляем стиль курсора для указания кликабельности
            item.style.cursor = 'pointer';
        });
        
        // Инициализация начального состояния
        updateButtons();
        
        // Обработка изменения размера окна для пересчета visibleItems и maxIndex
        window.addEventListener('resize', function() {
            const newItemWidth = sliderItems[0].offsetWidth + parseFloat(getComputedStyle(sliderItems[0]).marginLeft) * 2;
            const newVisibleItems = Math.floor(sliderContainer.offsetWidth / newItemWidth);
            const newMaxIndex = Math.max(0, sliderItems.length - newVisibleItems);
            
            // Корректировка currentIndex если он стал больше maxIndex после изменения размера
            if (currentIndex > newMaxIndex) {
                currentIndex = newMaxIndex;
            }
            
            updateSlider();
        });
    }
    
    initBlockFSlider();
});

