// // js/product-single.js

// // 1. Функція збереження в localStorage
// function saveToRecentlyViewed(product) {
//   let list = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
//   list = list.filter(item => item.id !== product.id);
//   list.unshift(product);
//   if (list.length > 10) list.pop();
//   localStorage.setItem('recentlyViewed', JSON.stringify(list));
// }

// // 2. Запис поточного товару при відкритті сторінки
// document.addEventListener('DOMContentLoaded', () => {
//   // На WordPress ці дані будуть підставлятися динамічно через PHP
//   const currentProduct = {
//     id: 'product-001',
//     title: 'М\'які капсули GANBAO, 60 капсул',
//     price: '890',
//     image: './images/products/ganbao.png',
//     url: window.location.pathname
//   };

//   saveToRecentlyViewed(currentProduct);
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

  // 4. Фіксація переглянутого товару в localStorage
  if (typeof saveToRecentlyViewed === 'function') {
    const currentProduct = {
      id: 'product-001',
      title: 'М\'які капсули GANBAO, 60 капсул',
      price: '890',
      image: './images/products/ganbao.png',
      url: window.location.pathname
    };
    saveToRecentlyViewed(currentProduct);
  }
});