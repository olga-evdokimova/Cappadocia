$(function () {
    $('.about-slider,.route-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./image/content/slider-about/prev-about.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./image/content/slider-about/next-about.svg" alt="bext"></button>',
        autoplay: true,//пролистывание по умолчнию 3 сек
        fade: true,// эффект возникновения слайда вместо перелистывания
        responsive: [
            {
                breakpoint: 601,//на ширине меньше 601 стрелок не будет
                settings: {
                    arrows: false
                }
            },
        ]
    });
});


// $(function(){
//     $('.route-slider').slick({
//         prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="./image/content/slider-about/prev-about.svg" alt="prev"></button>',
//         nextArrow: '<button type="button" class="slick-btn slick-next"><img src="./image/content/slider-about/next-about.svg" alt="bext"></button>',
//         autoplay: true,//пролистывание по умолчнию 3 сек
//         fade: true// эффект возникновения слайда вместо перелистывания
//     });
// });