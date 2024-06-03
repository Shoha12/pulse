$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992, 
                settings: {
                    arrows: true
                }
            },
            {   
                breakpoint: 767,
                settings: {
                    arrows: false, 
                    dots: true
                }
            }
                
        ]
      });
  });