import Swiper from 'swiper/bundle';

const reviews_slider = new Swiper(".reviews__slider", {
  direction: "horizontal",
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: "auto",
    },
  },

  navigation: {
    nextEl: '.reviews_arrow_next',
    prevEl: '.reviews_arrow_prev',
  },

});