$('body').on('click', '', () => { });

var swiper1 = new Swiper('.slider1 .swiper', {
    navigation: {
        nextEl: '.slider1 .swiper-button-next',
        prevEl: '.slider1 .swiper-button-prev',
    },
});

var swiper2 = new Swiper('.slider2 .swiper', {
    navigation: {
        nextEl: '.slider2 .swiper-button-next',
        prevEl: '.slider2 .swiper-button-prev',
    },
});

var swiper3 = new Swiper('.slider3 .swiper', {
    navigation: {
        nextEl: '.slider3 .swiper-button-next',
        prevEl: '.slider3 .swiper-button-prev',
    },
});

var work = new Swiper('.work .swiper', {
    navigation: {
        nextEl: '.work .swiper-button-next',
        prevEl: '.work .swiper-button-prev',
    },
});

var cases = new Swiper('.cases .swiper', {
    autoHeight: true,
    navigation: {
        nextEl: '.cases .swiper-button-next',
        prevEl: '.cases .swiper-button-prev',
    },
});

$('.books__title').matchHeight();