Fancybox.bind("[data-fancybox]", {
    infinite: false, // disable looping
    dragToClose: true,
    Toolbar: {
        display: ["close"]
    }
});
$(document).ready(function(){
     $('.mission-slider').slick({
      dots:false,            // Show navigation dots
      infinite: true,        // Loop through slides
      speed: 500,            // Animation speed
      slidesToShow: 4,       // Number of slides to show
      slidesToScroll: 1,     // Number of slides to scroll
      autoplay:false,        // Enable auto slide
      autoplaySpeed: 2000,   // Slide interval
      arrows:false,          // Show prev/next arrows
      adaptiveHeight:false,
        responsive: [
      {
        breakpoint: 1100, // below 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
       {
        breakpoint:992, // below 992px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 650, // below 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
      
    });
})