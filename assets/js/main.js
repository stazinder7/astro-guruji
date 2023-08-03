$('.pblm_sldier').owlCarousel({
    loop: false,
    margin: 16,
    nav: true,
    autoWidth: true,
    pagination: false,
    dots: false,
});

$(window).scroll(function () {
    if ($(window).scrollTop() >= 80) {
        $('header').addClass('fixed');
    }
    else {
        $('header').removeClass('fixed');
    }
});
$(document).ready(function () {
    $('[data-toggle]').click(function () {
        $('.tab_content').removeClass('active');
        $('[data-toggle]').removeClass('active');
        $(this).addClass('active');
        var tagid = $(this).attr('data-toggle');
        $(tagid).addClass('active');
    });

    $('.open_toggle').click(function () {
        $(this).toggleClass('active');
        $('.about_content').slideToggle();
    });
});