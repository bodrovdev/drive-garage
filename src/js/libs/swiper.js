import Swiper from 'swiper/bundle';

let video_reviews_slider = new Swiper(".video-reviews__slider", {
  direction: "horizontal",
  spaceBetween: 40,

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: '.video-reviews__arrow--next',
    prevEl: '.video-reviews__arrow--prev',
  },

});

let reviews_slider = new Swiper(".reviews__slider", {
  direction: "horizontal",

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },

  navigation: {
    nextEl: '.reviews__arrow--next',
    prevEl: '.reviews__arrow--prev',
  },

});

var works_slider_init = false;

function works_slider() {
  if (window.innerWidth < 1200) {
    if (!works_slider_init) {
      works_slider_init = true;

      var works_slider = new Swiper(".index-works__slider", {
        direction: "horizontal",
        spaceBetween: 25,

        breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
          },
        },

        navigation: {
          nextEl: '.index-works__arrow--next',
          prevEl: '.index-works__arrow--prev',
        },

      });
    }
  } else if (works_slider_init) {
    works_slider.destroy();
    works_slider_init = false;
  }
}
works_slider();
window.addEventListener("resize", works_slider);

var page_works_slider_init = false;

function page_works_slider() {
  if (window.innerWidth < 1200) {
    if (!page_works_slider_init) {
      page_works_slider_init = true;

      var page_works_slider = new Swiper(".works__slider", {
        direction: "horizontal",
        spaceBetween: 25,

        breakpoints: {
          320: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2,
          },
        },

        navigation: {
          nextEl: '.works__arrow--next',
          prevEl: '.works__arrow--prev',
        },

      });
    }
  } else if (page_works_slider_init) {
    page_works_slider.destroy();
    page_works_slider_init = false;
  }
}
page_works_slider();
window.addEventListener("resize", page_works_slider);