document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');
  const overlay = document.getElementById('menuOverlay');

  function openMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.add('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'false');

    if (window.bodyScrollLock) {
      window.bodyScrollLock.disableBodyScroll(mobileMenu);
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('mobile-menu--open');
    mobileMenu.setAttribute('aria-hidden', 'true');

    if (window.bodyScrollLock) {
      window.bodyScrollLock.enableBodyScroll(mobileMenu);
    } else {
      document.body.style.overflow = '';
    }
  }

  if (burgerBtn) burgerBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('mobile-menu--open')) {
      closeMenu();
    }
  });
});