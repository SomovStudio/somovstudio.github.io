document.addEventListener('DOMContentLoaded', function() {

	// Получаем элементы
	const tiles = document.querySelectorAll('.tile');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const closeBtn = document.getElementById('lightboxClose');

    // Текущий индекс для возможной навигации (необязательно, но добавим чуть позже)
    let currentIndex = 0;

    // Функция открытия лайтбокса
    function openLightbox(src, caption, index) {
        lightboxImg.src = src;
        lightboxImg.alt = caption || 'Изображение';
        lightboxCaption.textContent = caption || '';
        lightbox.classList.add('active');
        currentIndex = index;
        // Блокируем прокрутку страницы за лайтбоксом
        document.body.style.overflow = 'hidden';
    }

    // Закрытие лайтбокса
    function closeLightbox() {
        lightbox.classList.remove('active');
        // Очищаем src, чтобы избежать мерцания старого при следующем открытии (опционально)
        // lightboxImg.src = ''; 
        document.body.style.overflow = '';
    }

    // Обработчик клика по плиткам
    tiles.forEach((tile, index) => {
        tile.addEventListener('click', function(e) {
            // Получаем данные из атрибутов data-src и data-caption
            const src = this.dataset.src;
            // Если по какой-то причине нет data-src, пробуем взять из миниатюры (не рекомендуется)
            if (!src) {
                console.warn('Нет data-src');
                return;
            }
            const caption = this.dataset.caption || '';
            openLightbox(src, caption, index);
        });
    });

    // Закрытие по кнопке
    closeBtn.addEventListener('click', closeLightbox);

    // Закрытие по клику на затемненную область (фон)
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) { // клик именно на backdrop, а не на картинку или кнопку
            closeLightbox();
        }
    });

    // Закрытие по клавише ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Предотвращаем скролл внутри лайтбокса, но фон не скроллим (уже блокировали)
    // Для мобильных: обработка касаний вне картинки
    lightbox.addEventListener('touchstart', function(e) {
        if (e.target === lightbox) {
            e.preventDefault(); // предотвращаем случайный зум/скролл на оверлее
        }
    }, { passive: false });

    // Небольшая оптимизация: при открытии активного лайтбокса запрещаем скролл тачмувом
    lightbox.addEventListener('touchmove', function(e) {
        if (e.target === lightbox) {
            e.preventDefault();
        }
    }, { passive: false });

    // Адаптивность: если изображение не вмещается, lightbox__img сам масштабируется через max-width/height.

});