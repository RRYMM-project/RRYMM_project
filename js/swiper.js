/* global Swiper */

document.addEventListener("DOMContentLoaded", function () {
    if (typeof Swiper !== "undefined") {
        const swiper = new Swiper('.swiper',{
            direction: 'horizontal',
            loop: true,
            roundLengths: true,
        
            pagination:{
                el: '.swiper-pagination',
                clickable: true,
            },
        
            navigation:{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
            },
            slidesPerView: "auto",
            speed: 500,
            keyboard:true,
            breakpoints:{
                1300:{
                    slidesPerView:2,
                    spaceBetween: 15,
                },
                1600:{
                    spaceBetween: 25,
                },
                1700:{
                    slidesPerView:3,
                    spaceBetween: 10,
                },
            }
        });     
    } else {
        console.error("Swiper didn't load");
    }
})