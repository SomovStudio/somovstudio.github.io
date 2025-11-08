$(function() {
    $(window).on('scroll', function() {
        const $block = $('#headerMenu');
        const blockRect = $block[0].getBoundingClientRect();
        
        // Когда блок достигает верха окна
        if (blockRect.top <= 0) {
            $block.addClass('header-visible');
        } else {
            $block.removeClass('header-visible');
        }
    });
})