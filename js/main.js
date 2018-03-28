   
 // кнопка на верх   
(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -20);
      setTimeout(backToTop, 0);
    }
  }

  var goTopBtn = document.querySelector('.back_to_top');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();


// Скрол по ссылкам

$(document).ready(function() {
   $('a[href^="#_"]').on('click',function () {
          var target = $($(this).attr("href"));
          if (target.length>0){
              var scroll = target.offset().top;
              $('html,body').animate( { scrollTop: scroll }, 800 );
              return false;
          }
      });
})

//wow js
new WOW().init();