(function($) {
  "use strict"

  ///////////////////////////
  // Preloader
  $(window).on('load', function() {
    $("#preloader").delay(311).fadeOut();
  });

  ///////////////////////////
  // Scrollspy
  $('body').scrollspy({
    target: '#nav',
    offset: $(window).height() / 2
  });

  ///////////////////////////
  // Smooth scroll
  $("#nav .main-nav a[href^='#']").on('click', function(e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 600);
  });

  $('#back-to-top').on('click', function() {
    $('body,html').animate({
      scrollTop: 0
    }, 600);
  });

  ///////////////////////////
  // Btn nav collapse
  $('#nav .nav-collapse').on('click', function() {
    $('#nav').toggleClass('open');
  });

  ///////////////////////////
  // Mobile dropdown
  $('.has-dropdown a').on('click', function() {
    $(this).parent().toggleClass('open-drop');
  });

  ///////////////////////////
  // On Scroll
  $(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();

    // Fixed nav
    wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

    // Back To Top Appear
    wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
  });

  ///////////////////////////
  // magnificPopup
  $('.work').magnificPopup({
    delegate: '.lightbox',
    type: 'image'
  });

  ///////////////////////////
  // Owl Carousel
  $('#about-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 15,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    dots: true,
    autoplay: true,
    animateOut: 'fadeOut'
  });

  $('#testimonial-slider').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      }
    }
  });



  // Select all links with hashes
  //https://css-tricks.com/snippets/jquery/smooth-scrolling/
  $(".smoothlink")
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 311, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });

		var logonavscro=$("#logonavscroll");
		logonavscro.on("mouseover",function(){
			logonavscro.addClass("rotation");
		});

		logonavscro.on("mouseleave",function(){
			logonavscro.removeClass("rotation");
		});

})(jQuery);
