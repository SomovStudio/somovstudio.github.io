document.addEventListener('DOMContentLoaded', function() {
    
    // Массив товаров
    const products = [
        {
            id: 3,
            name: "SearchSiteContent",
            price: "бесплатно",
            image: "./img/search_site_content_logo.png",
            rating: 4.7,
            reviews: 203
        },
        {
            id: 4,
            name: "SEOScanner",
            price: "бесплатно",
            image: "./img/seo_scanner_logo.png",
            rating: 4.6,
            reviews: 156
        },
        {
            id: 1,
            name: "TestSitemap",
            price: "бесплатно",
            image: "./img/test_sitemap_logo2.png",
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            name: "TestRedirect",
            price: "бесплатно",
            image: "./img/test_redirect_logo.png",
            rating: 4.8,
            reviews: 95
        }
    ];
    

    // Элементы DOM
    const sliderWrapper = document.querySelector('.products-slider-wrapper');
    const prevBtn = document.querySelector('.products-slider-prev-btn');
    const nextBtn = document.querySelector('.products-slider-next-btn');
    const indicatorsContainer = document.querySelector('.products-slider-indicators');

    // Настройки слайдера
    let visibleProducts = getVisibleProductsCount(); // количество отображаемых товаров
    let currentPosition = 0; // текущий лист в слайдере
    const totalProducts = document.querySelectorAll('.products-slider-product-card').length; // всего товаров в слайдере
    
    // Функция для определения количества видимых товаров в зависимости от ширины экрана
    function getVisibleProductsCount() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1025) return 2;
        if (width < 1201) return 3;
        if (width < 1441) return 4;
        return 4;
    }

    // Функция для пересчета количества слайдов
    function getTotalSlides() {
        return Math.max(1, totalProducts - visibleProducts + 1);
    }

    // Создание индикаторов
    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        const totalSlides = getTotalSlides();
        
        for (let i = 0; i < totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `products-slider-indicator ${i === 0 ? 'active' : ''}`;
            indicator.dataset.slide = i;
            
            indicator.addEventListener('click', function() {
                goToSlide(parseInt(this.dataset.slide));
            });
            
            indicatorsContainer.appendChild(indicator);
        }
    }

    // Обновление состояния кнопок
    function updateButtons() {
        const totalSlides = getTotalSlides();
        prevBtn.disabled = currentPosition === 0;
        nextBtn.disabled = currentPosition === totalSlides - 1;
    }

    // Обновление индикаторов
    function updateIndicators() {
        const indicators = document.querySelectorAll('.products-slider-indicator');
        indicators.forEach((indicator, index) => {
            if (index === currentPosition) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Переход к определенному слайду
    function goToSlide(slideIndex) {
        currentPosition = slideIndex;
        const translateX = -currentPosition * (320 + 16);
        sliderWrapper.style.transform = `translateX(${translateX}px)`;

        updateButtons();
        updateIndicators();
    }

    // Функция для переинициализации слайдера при изменении размера окна
    function handleResize() {
        const newVisibleProducts = getVisibleProductsCount();
        
        if (newVisibleProducts !== visibleProducts) {
            visibleProducts = newVisibleProducts;
            currentPosition = 0;
            
            createIndicators();
            updateButtons();
            goToSlide(0);
        }
    }

    // Создание карточек товаров
    function createProductCards() {
        products.forEach(function(product, index) {
            // Генерация звезд рейтинга
            let starsHTML = '';
            const fullStars = Math.floor(product.rating);
            const hasHalfStar = product.rating % 1 !== 0;
            
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<span>★</span>';
            }
            
            if (hasHalfStar) {
                starsHTML += '<span>★</span>';
            }
            
            const emptyStars = 5 - Math.ceil(product.rating);
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<span>☆</span>';
            }
            
            // Создание элемента карточки товара
            const productCard = document.createElement('div');
            productCard.className = 'products-slider-product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="products-slider-product-image">
                <div class="products-slider-product-info">
                    <h3 class="products-slider-product-title">${product.name}</h3>
                    <div class="products-slider-product-price">${product.price}</div>
                    <div class="products-slider-product-rating">
                        <div class="products-slider-product-stars">${starsHTML}</div>
                        <div class="products-slider-product-rating-count">(${product.reviews})</div>
                    </div>
                    <button class="products-slider-product-add-to-cart">Под заказ</button>
                </div>
            `;

            sliderWrapper.appendChild(productCard);
        });
    }

    // Инициализация слайдера
    function initSlider() {
        createProductCards();
        createIndicators();
        updateButtons();
        
        // Обработчики событий для кнопок
        prevBtn.addEventListener('click', function() {
            if (currentPosition > 0) {
                goToSlide(currentPosition - 1);
            }
        });
        
        nextBtn.addEventListener('click', function() {
            const totalSlides = getTotalSlides();
            if (currentPosition < totalSlides - 1) {
                goToSlide(currentPosition + 1);
            }
        });
        
        // Обработчики для кнопок "В корзину"
        sliderWrapper.addEventListener('click', function(event) {
            if (event.target.closest('.products-slider-product-add-to-cart')) {
                const productCard = event.target.closest('.products-slider-product-card');
                const productName = productCard.querySelector('.products-slider-product-title').textContent;
                // Здесь можно добавить логику добавления в корзину
                // console.log('Добавлен товар:', productName);
            }
        });

        // Поддержка свайпов на touch-устройствах
        const swipeThreshold = 40; // минимальная дистанция для свайпа в пикселях
        let touchStartX = 0;
        let touchEndX = 0;

        sliderWrapper.addEventListener('touchstart', function(event) {
            touchStartX = event.touches[0].clientX;
        });

        sliderWrapper.addEventListener('touchmove', function(event) {
            touchEndX = event.touches[0].clientX;
        });

        sliderWrapper.addEventListener('touchend', function() {
            const swipeDistance = touchEndX - touchStartX;
            const totalSlides = getTotalSlides();

            if (Math.abs(swipeDistance) < swipeThreshold) {
                return;
            }

            if (swipeDistance < 0 && currentPosition < totalSlides - 1) {
                goToSlide(currentPosition + 1);
            } else if (swipeDistance > 0 && currentPosition > 0) {
                goToSlide(currentPosition - 1);
            }
        });

        // Обработчик изменения размера окна
        window.addEventListener('resize', handleResize);
    }

    if (sliderWrapper != null)
    {
        // Запуск слайдера после загрузки DOM
        initSlider();
    }
    
});