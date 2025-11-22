$(function() {
    // Данные товаров
    const products = [
        {
            id: 1,
            name: "Пресервы Сельдь в масле филе-кусочки",
            price: "250 ₽",
            image: "./img/product01.jpg",
            rating: 4.5,
            reviews: 128
        },
        {
            id: 2,
            name: "Пресервы Сальдь подкопченая в масле виле-кусочки",
            price: "300 ₽",
            image: "./img/product02.jpg",
            rating: 4.8,
            reviews: 95
        },
        {
            id: 3,
            name: "Пресервы сельдь ЛЕТНЯЯ в масле с декоративными обсыпками филе-кусочки",
            price: "150 ₽",
            image: "./img/product03.jpg",
            rating: 4.7,
            reviews: 203
        },
        {
            id: 4,
            name: "Сардина тихоокеанская (ИВАСИ) слабосоленая",
            price: "400 ₽",
            image: "./img/product04.jpg",
            rating: 4.6,
            reviews: 156
        },
        {
            id: 5,
            name: "Форель Радужная филе-кусок холодного копчения 250 г.",
            price: "500 ₽",
            image: "./img/product05.jpg",
            rating: 4.4,
            reviews: 87
        },
        {
            id: 6,
            name: "Скумбрия холодного копчения тушка",
            price: "450 ₽",
            image: "./img/product06.jpg",
            rating: 4.9,
            reviews: 42
        },
        {
            id: 7,
            name: "Рулет рыбный Ассорти из масляной, форели, тунца",
            price: "380 ₽",
            image: "./img/product07.jpg",
            rating: 4.8,
            reviews: 312
        },
        {
            id: 8,
            name: "Икра сельди ястычная слабосоленая",
            price: "430 ₽",
            image: "./img/product08.jpg",
            rating: 4.3,
            reviews: 178
        }
    ];

    // Элементы DOM
    const $sliderWrapper = $('.goods-slider-wrapper');
    const $prevBtn = $('.goods-slider-prev-btn');
    const $nextBtn = $('.goods-slider-next-btn');
    const $indicatorsContainer = $('.goods-slider-indicators');

    // Настройки слайдера
    const visibleProducts = 5;
    let currentPosition = 0;
    const totalProducts = products.length;
    
    // Исправленный расчет количества слайдов
    const totalSlides = Math.max(1, totalProducts - visibleProducts + 1);

    // Создание карточек товаров
    function createProductCards() {
        $.each(products, function(index, product) {
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
            
            const productCard = $(`
                <div class="goods-slider-product-card">
                    <img src="${product.image}" alt="${product.name}" class="goods-slider-product-image">
                    <div class="goods-slider-product-info">
                        <h3 class="goods-slider-product-title">${product.name}</h3>
                        <div class="goods-slider-product-price">${product.price}</div>
                        <div class="goods-slider-product-rating">
                            <div class="goods-slider-product-stars">${starsHTML}</div>
                            <div class="goods-slider-product-rating-count">(${product.reviews})</div>
                        </div>
                        <button class="goods-slider-product-add-to-cart">Под заказ</button>
                    </div>
                </div>
            `);
            
            $sliderWrapper.append(productCard);
        });
    }

    // Создание индикаторов
    function createIndicators() {
        for (let i = 0; i < totalSlides; i++) {
            const $indicator = $('<div>', {
                'class': `goods-slider-indicator ${i === 0 ? 'active' : ''}`,
                'data-slide': i
            });
            
            $indicator.on('click', function() {
                goToSlide(parseInt($(this).data('slide')));
            });
            
            $indicatorsContainer.append($indicator);
        }
    }

    // Обновление состояния кнопок
    function updateButtons() {
        $prevBtn.prop('disabled', currentPosition === 0);
        $nextBtn.prop('disabled', currentPosition === totalSlides - 1);
    }

    // Обновление индикаторов
    function updateIndicators() {
        $('.goods-slider-indicator').each(function(index) {
            if (index === currentPosition) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }

    // Переход к определенному слайду
    function goToSlide(slideIndex) {
        currentPosition = slideIndex;
        
        // Расчет смещения
        const productWidth = 125 / visibleProducts; // показатель смещения связан с flex: 0 0 calc(22% - 16px);
        const translateX = -currentPosition * productWidth;
        $sliderWrapper.css('transform', `translateX(${translateX}%)`);
        
        updateButtons();
        updateIndicators();
    }

    // Инициализация слайдера
    function initSlider() {
        createProductCards();
        createIndicators();
        updateButtons();
        
        // Обработчики событий для кнопок
        $prevBtn.on('click', function() {
            if (currentPosition > 0) {
                goToSlide(currentPosition - 1);
            }
        });
        
        $nextBtn.on('click', function() {
            if (currentPosition < totalSlides - 1) {
                goToSlide(currentPosition + 1);
            }
        });
        
        // Обработчики для кнопок "В корзину" (делегирование событий)
        $sliderWrapper.on('click', '.goods-slider-product-add-to-cart', function() {
            const productName = $(this).closest('.goods-slider-product-card').find('.goods-slider-product-title').text();
            alert(`Товар "${productName}" добавлен в корзину!`);
        });
    }

    // Запуск слайдера после загрузки DOM
    initSlider();
});