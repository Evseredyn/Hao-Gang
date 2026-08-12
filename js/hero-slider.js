window.addEventListener('DOMContentLoaded', () => {
  let heroSwiper = null;

  function initHeroSlider() {
    const isMobileOrTablet = window.innerWidth <= 1024;

    if (isMobileOrTablet) {
      if (!heroSwiper && typeof Swiper !== 'undefined') {
        heroSwiper = new Swiper('.hero-section__swiper', {
          slidesPerView: 1,
          spaceBetween: 16,
          autoHeight: false,
          loop: true,
          speed: 300,
          watchOverflow: true,
          
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          
          pagination: {
            el: '.hero-section__pagination',
            clickable: true,
          },
          
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
              slidesPerGroup: 1,
            }
          }
        });
      }
    } else {
      if (heroSwiper) {
        heroSwiper.destroy(true, true);
        heroSwiper = null;
      }
    }
  }

  initHeroSlider();

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(initHeroSlider, 150);
  });
});