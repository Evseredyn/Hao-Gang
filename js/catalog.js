/**
 * Ініціалізація слайдера категорій у каталозі
 */
document.addEventListener('DOMContentLoaded', () => {
  const catalogSwiperEl = document.querySelector('.catalog-categories__swiper');
  
  if (catalogSwiperEl) {
    const catalogSwiper = new Swiper(catalogSwiperEl, {
      slidesPerView: 2,
      spaceBetween: 12,
      watchOverflow: true,
      navigation: {
        nextEl: '.catalog-categories__next',
        prevEl: '.catalog-categories__prev',
      },
      breakpoints: {
        480: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 8,
          spaceBetween: 24,
        },
      },
    });
  }
});