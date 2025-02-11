var swiper = new Swiper('.swiper',{
    direction: 'horizontal',
    loop: true,

    pagination:{
        el: '.swiping-pagination',
    },

    navigation:{
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
    },
    slidesPerView:2,
});

// const swiper = document.querySelector('.swiper').swiper;
// swiper.slideNext();