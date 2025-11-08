$(function() {
    // console.log('Страница загружена');

    $('.mobile-menu-btn').on('click', function() {
        $('nav').toggleClass('active');
    });
});

$(window).on('load', function() {
    // console.log('Все ресурсы загружены');
});