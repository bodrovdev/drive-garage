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
    document.querySelectorAll('input').forEach((input) => input.setAttribute('spellcheck', 'false'));
  }
})

// ? --- Аккордеон
import { accordionFunc } from './templates/accordionFunc';
accordionFunc('services');

// ? --- Звёзды рейтинга
window.addEventListener('load', () => {
  if (ifExist('reviews__slider-slide')) {
    let reviewItems = document.querySelectorAll('.reviews__slider-slide');

    reviewItems.forEach(item => {
      let reviewItemsStars = item.querySelectorAll('.reviews__slider-slide-star');
      for (let i = 0; i < item.dataset.rating; i++) {
        Array.from(reviewItemsStars)[i].classList.add('reviews__slider-slide-star--active');
      }
    })
  }
});

// ? --- Обрезание текста ревью
window.addEventListener('load', () => {
  if (ifExist('reviews__slider-slide-text')) {
    let reviewItemText = document.querySelectorAll('.reviews__slider-slide-text');
    reviewItemText.forEach(item => {
      if (item.scrollHeight > item.clientHeight) {
        item.classList.add('reviews__slider-slide-text--clamped');
        item.addEventListener('click', () => { item.classList.toggle('reviews__slider-slide-text--active') })
      }
    })
  }
});

// ? --- Фикс анимации в блоке услуг
window.addEventListener('load', () => {
  if (ifExist('all-services__item')) {
    let allServicesItems = document.querySelectorAll('.all-services__item');
    allServicesItems.forEach(item => item.addEventListener('mouseover', () => {
      item.classList.add('all-services__item--hovered');
    }))
    allServicesItems.forEach(item => item.addEventListener('mouseleave', () => {
      setTimeout(() => {
        item.classList.remove('all-services__item--hovered');
      }, 120)
    }))
  }
});