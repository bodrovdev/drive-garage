function accordionFunc(rootClassName) {
  window.addEventListener('load', () => {
    let accordionList = document.querySelectorAll(`.${rootClassName}__accordion-item`);

    if (accordionList === null) {
      return;
    }
    else {
      accordionList.forEach(item => {
        let accordionItemContent = item.querySelector(`.${rootClassName}__accordion-item-content`);
        let accordionItemTop = item.querySelector(`.${rootClassName}__accordion-item-top`);

        item.addEventListener('click', () => {
          if (item.classList.contains(`${rootClassName}__accordion-item--active`)) {
            item.classList.remove(`${rootClassName}__accordion-item--active`);
            item.setAttribute('style', '');
          }
          else {
            item.classList.add(`${rootClassName}__accordion-item--active`);
            item.setAttribute(`style`, `height:${accordionItemContent.offsetHeight + accordionItemTop.offsetHeight}px; transition:all 0.3s;`);
          }
        })
      })
    }
  })
}

export { accordionFunc };