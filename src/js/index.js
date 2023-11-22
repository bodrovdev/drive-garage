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

// ? --- Анимации
// ? - Блок О НАС
window.addEventListener('load', () => {
  if (ifExist('index-about')) {

    let options = {
      threshold: 0.8,
    };

    let about_observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelector('.index-about__square-anim').classList.add('index-about__square-anim--active');
        document.querySelector('.index-about__img-anim').classList.add('index-about__img-anim--active');
        document.querySelector('.index-about__info-border').classList.add('index-about__info-border--active');
        about_observer.disconnect();
      }
    }, options);

    about_observer.observe(document.querySelector('.index-about__info'));
  }
})

// ? - Блок НАШИ УСЛУГИ
window.addEventListener('load', () => {
  if (ifExist('services__item')) {

    let services_items = Array.from(document.querySelectorAll('.services__item'));

    let intervalId;
    let timeoutId;

    function defaultInterval() {
      intervalId = setInterval(() => {
        let result_array = services_items.sort(() => .5 - Math.random()).slice(0, 3);
        result_array.map(item => item.classList.add('services__item--active'));

        timeoutId = setTimeout(() => {
          services_items.map(item => { item.classList.remove('services__item--active') })
        }, 1500);

      }, 3000);
    }
    defaultInterval();

    services_items.map(item => {
      item.addEventListener('mouseover', () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
        services_items.map(value => { value !== item ? value.classList.remove('services__item--active') : value; });
        item.classList.add('services__item--active');
      });
    })

    services_items.map(item => {
      item.addEventListener('mouseleave', () => {
        item.classList.remove('services__item--active');
        defaultInterval();
      });
    })
  }
});

// ? - Блок ФИДБЕК
window.addEventListener('load', () => {
  if (ifExist('feedback')) {

    let options = {
      threshold: 0.1,
    };

    let feedback_observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelector('.feedback__img').classList.add('feedback__img--active');
        document.querySelector('.feedback__column--left').classList.add('feedback__column--active');
        feedback_observer.disconnect();
      }
    }, options);

    feedback_observer.observe(document.querySelector('.feedback'));
  }
})

// ? - Блок описания, страница каталога
window.addEventListener('load', () => {
  if (ifExist('archive__description-image')) {

    let options = {
      threshold: 0.8,
    };

    let about_observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelector('.archive__description-image').classList.add('archive__description-image--active');
        about_observer.disconnect();
      }
    }, options);

    about_observer.observe(document.querySelector('.archive__description-image'));
  }
})

// ? - Блок с вакансиями
window.addEventListener('load', () => {
  if (ifExist('vacancies-card__item')) {

    let options = {
      threshold: 0.8,
    };

    let about_observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        document.querySelectorAll('.vacancies-card__item').forEach(item => item.classList.add('vacancies-card__item--active'));
        about_observer.disconnect();
      }
    }, options);


    document.querySelectorAll('.vacancies-card__item').forEach(item => {
      about_observer.observe(item);
    })
  }
})

// ? --- Аккордеон на странице архива
import { accordionFunc } from './templates/accordionFunc';
accordionFunc('archive');

// ? --- Модалки
import { modalFunc } from './templates/modalFunc';
modalFunc('modal-without-form');
modalFunc('modal-with-form');

window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.modal-with-form__button').click();
  }, 60000)
})