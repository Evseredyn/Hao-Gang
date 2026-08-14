const recommendedSlider = new Swiper('.recommended-slider', {
  slidesPerView: 1,
  spaceBetween: 16,
  navigation: {
    nextEl: '.recommended-slider .swiper-button-next',
    prevEl: '.recommended-slider .swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});