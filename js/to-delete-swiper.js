/* global Swiper */
console.log(typeof Swiper);

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM повністю завантажений");
    setTimeout(() => {
        console.log("Спроба ініціалізації Swiper");
        const swiperContainer = document.querySelector(".swiper");
        console.log("Знайдено .swiper:", swiperContainer); // Перевіримо, чи знайдено елемент

        if (!swiperContainer) {
            console.error("Помилка: .swiper не знайдено в DOM!");
            return;
        }

        if (typeof Swiper !== "undefined") {
            console.log("Swiper loaded!");
            const swiper = new Swiper(".swiper", {
                on: {
                    init: function () {
                      console.log('swiper initialized');
                    },
                  },
                direction: "horizontal",
                loop: true,
                roundLengths: true,
            
                pagination:{
                    el: ".swiper-pagination",
                    clickable: true,
                },
            
                navigation:{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
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

    }, 100);
    

// new Swiper('.swiper');
