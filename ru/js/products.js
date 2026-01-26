document.addEventListener('DOMContentLoaded', function() {
    
    // Массив товаров
    const products = [
        {
            id: 1,
            name: "SearchSiteContent",
            description: "Программа для поиска контента на страницах указанных в sitemap.",
            image: "./img/search_site_content_logo.png",
            url: "https://gitflic.ru/project/somovstudio/searchsitecontent"
        },
        {
            id: 2,
            name: "SEOScanner",
            description: "Программа сканирования web страниц для проведения SEO-аудита.",
            image: "./img/seo_scanner_logo.png",
            url: "https://gitflic.ru/project/somovstudio/seoscanner"
        },
        {
            id: 3,
            name: "TestSitemap",
            description: "Программа предназначена для тестирования ссылок указанных в карте сайта sitemap.",
            image: "./img/test_sitemap_logo2.png",
            url: "https://gitflic.ru/project/somovstudio/testsitemap"
        },
        {
            id: 4,
            name: "TestRedirect",
            description: "Программа для тестирования переадресации ссылок.",
            image: "./img/test_redirect_logo.png",
            url: "https://gitflic.ru/project/somovstudio/testredirect"
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
    const totalProducts = products.length; // всего товаров в слайдере
    
    // Функция для определения количества видимых товаров в зависимости от ширины экрана
    function getVisibleProductsCount() {
        const width = window.innerWidth;
        if (width < 768) return 1;
        if (width < 1025) return 2;
        if (width < 1201) return 3;
        if (width < 1441) return 3;
        return 3;
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
            // Создание элемента карточки товара
            const productCard = document.createElement('div');
            productCard.className = 'products-slider-product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="products-slider-product-image">
                <div class="products-slider-product-info">
                    <h3 class="products-slider-product-title">${product.name}</h3>
                    <div class="products-slider-product-description">${product.description}</div>
                    
                </div>
                <a class="products-slider-product-button" href="${product.url}" target="_blank">Скачать</a>
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
        /*
        sliderWrapper.addEventListener('click', function(event) {
            if (event.target.closest('.products-slider-product-add-to-cart')) {
                const productCard = event.target.closest('.products-slider-product-card');
                const productName = productCard.querySelector('.products-slider-product-title').textContent;
                // Здесь можно добавить логику добавления в корзину
                // console.log('Добавлен товар:', productName);
            }
        });
        */

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