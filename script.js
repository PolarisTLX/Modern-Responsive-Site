// Show and Hide navbar

$(document).ready(function() {
  'use strict';
  $(window).scroll(function() {
    'use strict';

    if ($(window).scrollTop() < 80) {
      $('.navbar').css({
        //this pulls the navbar up out of the view:
        'margin-top': '-100px',
        'opacity': '0'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0)'
      });

    } else {

      $('.navbar').css({
        //this pulls the navbar up out of the view:
        'margin-top': '0px',
        'opacity': '1'
      });

      $('.navbar-default').css({
        'background-color': 'rgba(59, 59, 59, 0.7)',
        'border-color': '#444'
      });

      $('navbar-brand img').css({
        'height': '35px',
        'padding-top': '0px'
      });

      $('.navbar-nav > li > a ').css({
        'padding-top': '15px'

      });
    }
  });
});

//add smooth scrolling
$(document).ready(function() {

    'use strict';

    $('.nav-link, #scroll-to-top').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});

//highlight active navbar items on click
$(document).ready(function() {
  'use strict';

  $('.navbar-nav li a').click(function() {
    'use strict';
    //remove "active" to all other <a> tags:
    $('navbar-nav li a').parent().removeClass("active");
    //apply active class to the one just clicked:
    $(this).parent().addClass("active");

  });
});


//highlight active navbar items on scroll
$(document).ready(function() {
  'use strict';
  $(window).scroll( function () {
    'use strict';
    $("section").each( function() {
      'use strict';
      var sectionId = $(this).attr("id");  // <section id="ABOUT">, COUNTERS, ABOUT...
      var height = $(this).outerHeight();
      //get the y pixels of the top of current section - 70px:
      var grttop = $(this).offset().top - 70;

      if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + height) {
        $(".navbar-nav li a[href='#" + sectionId + "']").parent().addClass("active");
        // example: .navbar-nav li a[href='#ABOUT']
      } else {
        $(".navbar-nav li a[href='#" + sectionId + "']").parent().removeClass("active");
      }

    });
  });
});

//AWESOME!!!
// Add padding automatically to top page to take up full screen regardless of screen size?
$(document).ready(function() {
  'use strict';

  setInterval( function() {
    'use strict';

    //get the height of the browser window used in px:
    var windowHeight = $(window).height();
    // the height of the top page of the site in px:
    var containerHeight = $(".header-container").height();
    var padTop = windowHeight - containerHeight;

    $(".header-container").css({
      'padding-top': Math.round( padTop / 2) + 'px',
      'padding-bottom': Math.round( padTop / 2) + 'px',
    });

  }, 10)
});

$(document).ready(function(){
  $('.slider').bxSlider({
    // mode: 'fade',
    captions: true,
    slideWidth: 292.5,
    auto: true,
    minSlides: 1,
    maxSlides: 3,
    slideMargin: 50
  });
});


//jQuery Counter Up Animation:
$(document).ready(function() {
    $('.counter-num').counterUp({
        delay: 10,
        time: 2000
    });
});

//WOW.js  for pop-in animations:
$(document).ready(function() {
  'use strict';

  new WOW().init();
});
