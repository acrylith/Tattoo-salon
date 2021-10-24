"use strict";

(function () {
  $('.menu-wrapper').on('click', function () {
    $('.hamburger-menu').toggleClass('animate');
    $('.header__mobile').toggleClass('show');
  });
})();

function imgMove() {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
}

$(window).scroll(function () {
  var windowTop = $(window).scrollTop();
  var windowBottom = windowTop + $(window).height();
  var imgTop = $('.ex1').offset().top;

  if (windowBottom > imgTop) {
    $('.ex1').addClass('move1');
    $('.ex2').addClass('move2');
  }
});
new Swiper('.gallery-container', {
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    576: {
      slidesPerView: 2
    }
  }
});