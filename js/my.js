$('.header-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: false,
    autoplayTimeout:8000,
    autoplay:true,
    items:1
});

$('.seg1-carousel').owlCarousel({
    margin:10,
    loop:true,
    dots:true,
    nav:false,
    autoplayTimeout:6000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

/*******************************************/
function radial_animate() { 
    $('svg.radial-progress').each(function( index, value ) { 

        $(this).find($('circle.bar--animated')).removeAttr( 'style' );    
        // Get element in Veiw port
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        
        if(elementBottom > viewportTop && elementTop < viewportBottom) {
            var percent = $(value).data('countervalue');
            var radius = $(this).find($('circle.bar--animated')).attr('r');
            var circumference = 2 * Math.PI * radius;
            var strokeDashOffset = circumference - ((percent * circumference) / 100);
            $(this).find($('circle.bar--animated')).animate({'stroke-dashoffset': strokeDashOffset}, 2800);
        }
    });
}
// To check If it is in Viewport 
var $window = $(window);
function check_if_in_view() {    
    $('.countervalue').each(function(){
        if ($(this).hasClass('start')){
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();

            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                      $(this).removeClass('start');
                      $('.countervalue').text();
                      var myNumbers = $(this).text();
                      if (myNumbers == Math.floor(myNumbers)) {
                          $(this).animate({
                              Counter: $(this).text()
                          }, {
                              duration: 2800,
                              easing: 'swing',
                              step: function(now) {
                                  $(this).text(Math.ceil(now)  + '%');                                
                              }
                          });
                      } else {
                          $(this).animate({
                              Counter: $(this).text()
                          }, {
                              duration: 2800,
                              easing: 'swing',
                              step: function(now) {                                
                                  $(this).text(now.toFixed(2)  + '$'); 
                              }
                          });
                      }

                      radial_animate();
                  }
        }
    });
}

$window.on('scroll', check_if_in_view);
$window.on('load', check_if_in_view);

$('.seg2-carousel').owlCarousel({
    margin:30,
    loop:true,
    dots:false,
    nav:true,
    autoplayTimeout:6000,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});



