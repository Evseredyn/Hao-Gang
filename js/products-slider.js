document.addEventListener('DOMContentLoaded', () => {
  const productsSlider = new Swiper('.products-slider', {
    slicePerView: 1,
    spaceBetween: 16,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Мобільні пристрої (від 480px) — 2 картки
      480: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      // Планшети (від 768px) — 3 картки
      768: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      // Десктоп (від 1024px) — 4 або 5 карток
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    }
  });

  // Обробка перемикання кнопки "В обране" (клік на сердечко)
  document.querySelectorAll('.product-card__favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.classList.toggle('product-card__favorite--active');
    });
  });
});