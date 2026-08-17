// document.addEventListener('DOMContentLoaded', () => {
//   // 1. Ініціалізація слайдера мініатюр
//   const swiperThumbs = new Swiper('.product-swiper-thumbs', {
//     spaceBetween: 12,
//     slidesPerView: 'auto',
//     freeMode: true,
//     watchSlidesProgress: true,
//   });

//   // 2. Ініціалізація головного слайдера та прив'язка thumbs
//   const swiperMain = new Swiper('.product-swiper-main', {
//     spaceBetween: 10,
//     navigation: {
//       nextEl: '.product-swiper-main .swiper-button-next',
//       prevEl: '.product-swiper-main .swiper-button-prev',
//     },
//     thumbs: {
//       swiper: swiperThumbs,
//     },
//   });
// });

document.addEventListener('DOMContentLoaded', () => {

  // 1. Ініціалізація Swiper Thumbs (Мініатюр)
  const swiperThumbs = new Swiper('.product-swiper-thumbs', {
    spaceBetween: 12,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
  });

  // 2. Ініціалізація головного слайдера
  const swiperMain = new Swiper('.product-swiper-main', {
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: swiperThumbs,
    },
  });

  // 3. Логіка Табів (Десктоп) та Акордеона (Мобільні / Планшети)
  const tabBtns = document.querySelectorAll('.product-tabs__btn');
  const tabPanes = document.querySelectorAll('.tab-pane');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Для перемикання табів на десктопі
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetTab)?.classList.add('active');
    });
  });

  // Логіка кліку по заголовку акордеона на мобільних
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parentPane = header.closest('.tab-pane');
      parentPane.classList.toggle('accordion-open');
    });
  });
});