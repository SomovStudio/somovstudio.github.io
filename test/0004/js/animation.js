/*
$(document).ready(function() {
    var element = $('#Products'); // блок должен быть opacity
    var alreadyShown = false;
    
    $(window).scroll(function() {
        if (!alreadyShown && isElementInViewport(element)) {
            element.fadeIn(1500);
            alreadyShown = true;
        }
        
    });
    
    function isElementInViewport(el) {
        var rect = el[0].getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
});
*/

$(document).ready(function() {
    // Функция для проверки видимости элемента
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Функция для обработки скролла
    function handleScroll() {
        $('.block').each(function(index) {
            var $element = $(this);
            
            // Проверяем, виден ли элемент и еще не показан
            if (isElementInViewport(this) && !$element.hasClass('visible')) {
                // Задержка для последовательного появления
                setTimeout(function() {
                    $element.addClass('visible');
                }, index * 100); // 300ms задержка между блоками
            }
        });
    }
    
    // Обработчик события скролла
    $(window).on('scroll', handleScroll);
    
    // Проверяем элементы при загрузке страницы
    handleScroll();
});