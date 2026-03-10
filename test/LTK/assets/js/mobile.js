document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerMenu = document.querySelector('.header-menu');
    const menuCloseBtn = document.querySelector('.menu-close-btn');

    // Функция для открытия меню
    function openMenu() {
        headerMenu.classList.add('active');
    }

    // Функция для закрытия меню
    function closeMenu() {
        headerMenu.classList.remove('active');
    }

    // Открытие меню по кнопке-бургеру
    if (mobileMenuBtn && headerMenu) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Предотвращаем всплытие события
            openMenu();
        });
    }

    // Закрытие меню по кнопке-крестику
    if (menuCloseBtn && headerMenu) {
        menuCloseBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Предотвращаем всплытие события
            closeMenu();
        });
    }

    // Закрытие меню при клике вне его
    if (headerMenu) {
        document.addEventListener('click', function(event) {
            // Если меню открыто и клик был не по меню и не по кнопке-бургеру
            if (headerMenu.classList.contains('active') && 
                !headerMenu.contains(event.target) && 
                !mobileMenuBtn.contains(event.target)) {
                closeMenu();
            }
        });

        // Предотвращаем закрытие при клике внутри меню (кроме кнопки закрытия)
        headerMenu.addEventListener('click', function(e) {
            // Если клик не по кнопке закрытия, то не закрываем меню
            if (!e.target.classList.contains('menu-close-btn')) {
                e.stopPropagation();
            }
        });
    }

    // Закрытие меню при нажатии клавиши Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && headerMenu && headerMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});