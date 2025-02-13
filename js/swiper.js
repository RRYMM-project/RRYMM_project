/* global Swiper */

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
        const swiper = new Swiper('.swiper',{
            direction: 'horizontal',
            loop: true,
        
            pagination:{
                el: '.swiper-pagination',
                clickable: true,
            },
        
            navigation:{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            },
            slidesPerView:2,
            spaceBetween: 30,
            keyboard:true,
        });     
    } else {
        console.error("Swiper didn't load");
    }
})