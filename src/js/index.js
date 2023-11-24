import { lock, unlock } from 'tua-body-scroll-lock';

function ifExist(className) {
  return document.querySelector(`.${className}`) !== null;
}

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// ? --- Отключение подсветки ошибок в инпутах
window.addEventListener('load', () => {
  if (!(document.querySelectorAll('input') === null)) {
    document.querySelectorAll('input').forEach((input) => {
      input.setAttribute('spellcheck', 'false');
    })
  }
})

// ? --- Аккордеон
import { accordionFunc } from './templates/accordionFunc';
accordionFunc('services');

// ? --- Звёзды рейтинга
window.addEventListener('load', () => {
  let shopItems = document.querySelectorAll('.reviews__slider-slide');
  console.log(shopItems);

  if (shopItems === null) {
    return;
  }
  else {
    shopItems.forEach(item => {
      let shopItemsStars = item.querySelectorAll('.reviews__slider-slide-star');
      for (let i = 0; i < item.dataset.rating; i++) {
        Array.from(shopItemsStars)[i].classList.add('reviews__slider-slide-star--active');
      }
    })
  }
});