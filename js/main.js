
//===TOP-SLIDER==========
$('.top-slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="./image/icons/next.svg" alt="next"></button>',
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="./image/icons/prev.svg" alt="prev"></button>',
    responsive: [
        {
            breakpoint: 1024,
            settings: {

            }
        },

        {
            breakpoint: 640,
            settings: {
                arrows: false // убрать стрелочки прокрутки при ширине ниже 640
            }
        }

    ]
});
