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
        let isScrolling = false;
        
        // Функция для расчета ширины элемента с учетом отступов
        function getItemWidth() {
            const firstItem = sliderItems[0];
            const style = window.getComputedStyle(firstItem);
            const marginLeft = parseFloat(style.marginLeft) || 0;
            const marginRight = parseFloat(style.marginRight) || 0;
            return firstItem.offsetWidth + marginLeft + marginRight;
        }
        
        // Функция для обновления позиции слайдера
        function scrollToIndex(index) {
            if (isScrolling) return;
            
            isScrolling = true;
            const itemWidth = getItemWidth();
            const scrollAmount = index * itemWidth;
            
            sliderContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
            
            // Сбрасываем флаг после завершения прокрутки
            setTimeout(() => {
                isScrolling = false;
            }, 300);
        }
        
        // Функция для обновления главного изображения
        function updateMainImage(index) {
            const currentSlideImage = sliderItems[index].querySelector('img');
            if (currentSlideImage) {
                mainImage.src = currentSlideImage.src;
                mainImage.alt = currentSlideImage.alt || 'ЛТК Арена';
            }
        }
        
        // Функция для обновления состояния кнопок
        function updateButtons() {
            if (prevBtn) {
                prevBtn.disabled = currentIndex <= 0;
            }
            if (nextBtn) {
                nextBtn.disabled = currentIndex >= sliderItems.length - 1;
            }
        }
        
        // Функция для определения текущего индекса на основе прокрутки
        function getCurrentIndexFromScroll() {
            const itemWidth = getItemWidth();
            const scrollLeft = sliderContainer.scrollLeft;
            const approximateIndex = Math.round(scrollLeft / itemWidth);
            
            // Убеждаемся, что индекс в пределах допустимого диапазона
            return Math.min(Math.max(approximateIndex, 0), sliderItems.length - 1);
        }
        
        // Обработчик для кнопки "назад"
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateMainImage(currentIndex);
                    scrollToIndex(currentIndex);
                    updateButtons();
                }
            });
        }
        
        // Обработчик для кнопки "вперед"
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                if (currentIndex < sliderItems.length - 1) {
                    currentIndex++;
                    updateMainImage(currentIndex);
                    scrollToIndex(currentIndex);
                    updateButtons();
                }
            });
        }
        
        // Клик по элементу слайдера
        sliderItems.forEach((item, index) => {
            item.addEventListener('click', function() {
                currentIndex = index;
                updateMainImage(currentIndex);
                scrollToIndex(currentIndex);
                updateButtons();
            });
            
            item.style.cursor = 'pointer';
        });
        
        // Отслеживание прокрутки для синхронизации
        let scrollTimeout;
        sliderContainer.addEventListener('scroll', function() {
            if (isScrolling) return;
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const newIndex = getCurrentIndexFromScroll();
                if (newIndex !== currentIndex) {
                    currentIndex = newIndex;
                    updateMainImage(currentIndex);
                    updateButtons();
                }
            }, 100);
        });
        
        // Обработка изменения размера окна
        window.addEventListener('resize', function() {
            // Перенастраиваем позицию после изменения размера
            setTimeout(() => {
                scrollToIndex(currentIndex);
            }, 100);
        });
        
        // Инициализация
        updateMainImage(currentIndex);
        scrollToIndex(currentIndex);
        updateButtons();
    }
    
    initBlockFSlider();
});