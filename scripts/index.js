
var header = $("#navbar");
  $(window).scroll(function() {

    var scroll = $(window).scrollTop();
       if (scroll >= window.innerHeight) {
          $(".nav").css({ position: 'fixed', top: '0px' });
        } else {
          header.removeClass("fixed");
        }
});

$(document).ready(function(){
  $('.ui.accordion').accordion();
});

// $('.ui.accordion').accordion('open');
