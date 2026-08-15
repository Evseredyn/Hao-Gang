document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('recentlyViewedSection');
  const wrapper = document.getElementById('recentlyViewedWrapper');

  if (!section || !wrapper) return;

  // Отримуємо товари з localStorage
  const recentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed')) || [];

  // Якщо переглянутих товарів немає — ховаємо секцію
  if (recentlyViewed.length === 0) {
    section.style.display = 'none';
    return;
  }

  // Якщо є товари — показуємо секцію та наповнюємо слайдами
  section.style.display = 'block';

  wrapper.innerHTML = recentlyViewed.map(product => `
    <div class="swiper-slide">
      <div class="product-card">
        <a href="${product.url}" class="product-card__link">
          <img src="${product.image}" alt="${product.title}" class="product-card__img">
          <h3 class="product-card__title">${product.title}</h3>
          <p class="product-card__price">${product.price} грн</p>
        </a>
      </div>
    </div>
  `).join('');

  // Ініціалізація Swiper слайдера
  new Swiper('.recently-swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 24 },
      1025: { slidesPerView: 5, spaceBetween: 24 }
    }
  });
});