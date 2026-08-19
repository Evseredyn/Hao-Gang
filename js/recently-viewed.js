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

  // Якщо є товари — показуємо секцію та наповнюємо слайдами за загальним шаблоном сайту
  section.style.display = 'block';

  wrapper.innerHTML = recentlyViewed.map(product => `
    <div class="swiper-slide">
      <article class="product-card">
        <div class="product-card__image-wrapper">
          <a href="${product.url}" class="product-card__link">
            <img src="${product.image}" alt="${product.title}" class="product-card__img" loading="lazy">
          </a>
        </div>
        
        <div class="product-card__content">
          <h3 class="product-card__title">
            <a href="${product.url}">${product.title}</a>
          </h3>
          
          <div class="product-card__price-box">
            <span class="price-current">${product.price} грн</span>
            ${product.oldPrice ? `<span class="price-old">${product.oldPrice} грн</span>` : ''}
          </div>

          <button type="button" class="product-card__btn" data-product-id="${product.id || ''}">
            <svg width="18" height="18"><use href="#icon-cart"></use></svg>
            Купити
          </button>
        </div>
      </article>
    </div>
  `).join('');

  // Ініціалізація Swiper слайдера з опціями відстеження динамічних змін
  new Swiper('.recently-swiper', {
    slidesPerView: 2,
    spaceBetween: 16,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: '#recentlyViewedSection .swiper-button-next',
      prevEl: '#recentlyViewedSection .swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 3, spaceBetween: 20 },
      768: { slidesPerView: 4, spaceBetween: 24 },
      1025: { slidesPerView: 5, spaceBetween: 24 }
    }
  });
});