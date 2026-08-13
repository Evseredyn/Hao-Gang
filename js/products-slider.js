document.addEventListener('DOMContentLoaded', () => {
  let productsSwiper = null;

  function initProductsSlider() {
    const isDesktop = window.innerWidth >= 768;

    if (isDesktop && !productsSwiper) {
      productsSwiper = new Swiper('.products-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 20 }
        }
      });
    } else if (!isDesktop && productsSwiper) {
      productsSwiper.destroy(true, true);
      productsSwiper = null;
    }
  }

  initProductsSlider();
  window.addEventListener('resize', initProductsSlider);
});