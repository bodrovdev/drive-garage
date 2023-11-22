function tabsFunc(rootClassName) {
  window.addEventListener('load', () => {
    let tabs_buttons = document.querySelectorAll(`.${rootClassName}__tabs-button`);
    if (tabs_buttons === null) {
      return;
    }
    else {
      let tabs_items = document.querySelectorAll(`.${rootClassName}__tabs-body-item`);

      tabs_buttons.forEach(button => {
        button.addEventListener('click', (e) => {

          tabs_buttons.forEach(button_value => { button_value.classList.remove(`${rootClassName}__tabs-button--active`) });
          button.classList.add(`${rootClassName}__tabs-button--active`);

          tabs_items.forEach(item => {
            if (button.dataset.tab === item.dataset.tab) {
              tabs_items.forEach(item_value => { item_value.classList.remove(`${rootClassName}__tabs-body-item--active`); });
              item.classList.add(`${rootClassName}__tabs-body-item--active`);
            }
          });
        });
      })
    }
  });
}

export { tabsFunc };