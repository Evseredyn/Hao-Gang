document.addEventListener('DOMContentLoaded', () => {
  const categoriesToggle = document.getElementById('categoriesToggle');
  const headerBottom = document.querySelector('.header__bottom');

  if (categoriesToggle && headerBottom) {
    categoriesToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = headerBottom.classList.toggle('header__bottom--expanded');
      categoriesToggle.classList.toggle('categories-toggle--active', isExpanded);
    });

    // Закриття меню при кліку поза межами нижньої лінії хедера
    document.addEventListener('click', (e) => {
      if (!headerBottom.contains(e.target)) {
        headerBottom.classList.remove('header__bottom--expanded');
        categoriesToggle.classList.remove('categories-toggle--active');
      }
    });

    // Закриття меню по натисканню Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        headerBottom.classList.remove('header__bottom--expanded');
        categoriesToggle.classList.remove('categories-toggle--active');
      }
    });
  }
});