
(function($) { "use strict";
              
    $(document).ready(function() {

        $("#pagination").on('mouseenter', function(){
         $("#video-wrap").fadeOut(700)
        })
        $("#pagination").on('mouseleave', function(){
         $("#video-wrap").fadeIn(700)
        })

    }); 
 
    // End Document Ready
          if($('#gallery-slider').length){
              $('#gallery-slider').slick({
                  dots: false,
                  arrows:false,
                  autoplay:false,
                  autoplaySpeed:5000,
                  infinite: true,
                  navigation:false,
                  speed: 700,
                  slidesToShow:1,
                  slidesToScroll: 1,

              });
          }; 

})(jQuery); 