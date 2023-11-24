import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// ? --- Мобильное меню
const burger = document.getElementById('burger');
const mobile_menu = document.getElementById('mobile_menu');

function openMobileMenu() {
  burger.classList.add('main-nav__burger--active');
  mobile_menu.classList.add('main-nav__mobile-menu--active');

  disableBodyScroll(mobile_menu);
}
function closeMobileMenu() {
  burger.classList.remove('main-nav__burger--active');
  mobile_menu.classList.remove('main-nav__mobile-menu--active');

  enableBodyScroll(mobile_menu);
}

// ? - Открытие / закрытие меню по клику на бургер
// burger.addEventListener('click', () => {
//   burger.classList.contains('main-nav__burger--active') ? closeMobileMenu() : openMobileMenu();
// })