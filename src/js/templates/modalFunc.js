import { lock, unlock } from 'tua-body-scroll-lock';

// ? --- Модалки
function modalFunc(rootClassName) {
  window.addEventListener('load', () => {
    if (document.querySelector(`.${rootClassName}`) !== null && document.querySelector(`.${rootClassName}__form`) !== null) {

      let modal = document.querySelector(`.${rootClassName}`);
      let modal_wrapper = document.querySelector(`.${rootClassName}__wrapper`);
      let modal_inner = modal.querySelector(`.${rootClassName}__inner`);
      let modal_success = modal.querySelector(`.${rootClassName}__success`);
      let modal_buttons = document.querySelectorAll(`.${rootClassName}__button`);
      let modal_close = modal.querySelector(`.${rootClassName}__close`);
      let modal_form = document.querySelectorAll(`.${rootClassName}__form`);

      function modalClose() {
        if (modal.contains(modal_inner)) {
          // * Если обычная модалка
          modal.classList.remove(`${rootClassName}--active`);
          modal_inner.classList.remove(`${rootClassName}__inner--hidden`);
          modal_success.classList.remove(`${rootClassName}__success--active`);
          unlock(modal);
        }
        else {
          // * Если модалка с подтверждением отправки
          modal.classList.remove(`${rootClassName}--active`);
          unlock(modal);
        }
      }

      function modalClickOutside(e) {
        if (!(Array.from(modal_buttons).includes(e.target)) && !(modal_wrapper.contains(e.target))) {
          modalClose();
        }
      }

      // ? - Открытие
      modal_buttons.forEach(button => {
        button.addEventListener('click', () => {
          modal.classList.add(`${rootClassName}--active`);
          lock(modal);
          window.addEventListener('click', (e) => { modalClickOutside(e) });
        })
      })

      // ? - Закрытие по клику на кнопку
      modal_close.addEventListener('click', () => {
        modalClose();
        window.removeEventListener('click', (e) => { modalClickOutside(e) });
      });

      // ? - Закрытие по нажатию на esc
      window.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
          modalClose();
          window.removeEventListener('click', (e) => { modalClickOutside(e) });
        }
      });

      // ? - Отправка
      modal_form.forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault();

          if (modal.contains(modal_inner)) {
            // * Если обычная модалка
            modal_inner.classList.add(`${rootClassName}__inner--hidden`);
            modal_success.classList.add(`${rootClassName}__success--active`);
          }
          else {
            // * Если модалка с подтверждением отправки
            modal.classList.add(`${rootClassName}--active`);
            lock(modal);

            window.addEventListener('click', (e) => { modalClickOutside(e) });
          }
        })
      })
    }
  });
}

export { modalFunc };