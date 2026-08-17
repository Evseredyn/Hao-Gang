// 1. Функція збереження в localStorage
function saveToRecentlyViewed(product) {
  let list = JSON.parse(localStorage.getItem('recentlyViewed')) || [];
  list = list.filter(item => item.id !== product.id);
  list.unshift(product);
  if (list.length > 10) list.pop();
  localStorage.setItem('recentlyViewed', JSON.stringify(list));
}

// 2. Запис поточного товару при відкритті сторінки
document.addEventListener('DOMContentLoaded', () => {
  // На WordPress ці дані будуть підставлятися динамічно через PHP
  const currentProduct = {
    id: 'product-001',
    title: 'М\'які капсули GANBAO, 60 капсул',
    price: '890',
    image: './images/products/ganbao.png',
    url: window.location.pathname
  };

  saveToRecentlyViewed(currentProduct);
});