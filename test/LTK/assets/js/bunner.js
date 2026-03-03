document.addEventListener('DOMContentLoaded', function() {
    // Данные для слайдера
    const slides = [
      {
        image: './assets/img/backgroun.jpg',
        title: '«ЛТК АРЕНА»',
        description: 'Дворец спорта "ЛТК Арена" рассчитан на 2500 зрительских мест. Площадь дворца составляет 10 тысяч квадратных метров. Размер игровой площадки – 25,5 на 45 метров. В спорткомплексе также имеется тренажерный зал, лечебные и массажные комнаты. Предусмотрен и пресс-центр.',
        link: '#'
      },
      {
        image: './assets/img/backgroun1.jpg',
        title: 'ЗАЛ',
        description: 'Современный тренажерный зал площадью 200 квадратных метров оснащен профессиональным оборудованием. Здесь есть кардиозона, зона свободных весов и тренажеры для всех групп мышц. Индивидуальные занятия с тренером.',
        link: '#'
      },
      {
        image: './assets/img/backgroun2.jpg',
        title: 'ЦЕНТР',
        description: 'Восстановительный центр включает массажные и лечебные комнаты. Спортивные врачи и массажисты помогут спортсменам восстановиться после нагрузок. Доступны физиотерапия и медицинский массаж.',
        link: '#'
      }
    ];

    let currentSlide = 0;
    let isAnimating = false; // Флаг, чтобы не запускать анимацию повторно

    // Элементы DOM
    const imgElement = document.querySelector('.slider-image');
    const titleElement = document.querySelector('.slider-title');
    const descElement = document.querySelector('.slider-description');
    const linkElement = document.querySelector('.slider-link');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Функция для применения эффекта затухания
    function fadeOutElements() {
        imgElement.classList.add('fade-out');
        titleElement.classList.add('fade-out');
        descElement.classList.add('fade-out');
        linkElement.classList.add('fade-out');
    }

    function fadeInElements() {
        imgElement.classList.remove('fade-out');
        titleElement.classList.remove('fade-out');
        descElement.classList.remove('fade-out');
        linkElement.classList.remove('fade-out');
    }

    // Функция обновления контента (без изменения классов)
    function updateSlideContent(index) {
        const slide = slides[index];
        imgElement.src = slide.image;
        imgElement.alt = slide.title;
        titleElement.textContent = slide.title;
        descElement.textContent = slide.description;
        linkElement.href = slide.link;
    }

    // Функция для смены слайда с анимацией
    function changeSlide(newIndex) {
        // Предотвращаем запуск новой анимации, пока текущая не закончилась
        if (isAnimating) return;
        if (newIndex === currentSlide) return;

        isAnimating = true;
        currentSlide = newIndex;

        // 1. Запускаем затухание
        fadeOutElements();

        // 2. Через время, равное длительности анимации (500мс), меняем контент и показываем его
        setTimeout(() => {
            updateSlideContent(currentSlide);
            fadeInElements();

            // 3. Сбрасываем флаг анимации после того, как она полностью завершилась
            setTimeout(() => {
                isAnimating = false;
            }, 200); // Время на появление
        }, 200); // Время на исчезновение
    }

    // Обработчики кнопок
    prevBtn.addEventListener('click', function() {
        const newIndex = (currentSlide - 1 + slides.length) % slides.length;
        changeSlide(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        const newIndex = (currentSlide + 1) % slides.length;
        changeSlide(newIndex);
    });

    // Клавиши навигации (тоже обновляем)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault(); // Предотвращаем скролл страницы
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextBtn.click();
        }
    });
});