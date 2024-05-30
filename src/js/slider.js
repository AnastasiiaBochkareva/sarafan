/* eslint-disable */

import Swiper, {
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
  Scrollbar,
} from 'swiper';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/scrollbar';

const clientsSlider = new Swiper('.clients__slider', {
  slidesPerView: '3',
  spaceBetween: 20,
  navigation: {
    prevEl: '.main-projects__navigation_prev',
    nextEl: '.main-projects__navigation_next',
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  grabCursor: true,
  freeMode: {
    enabled: true,
    sticky: false,
    momentumBounce: true,
  },
  slideToClickedSlide: true,
  mousewheel: {
    enabled: true,
    sensitivity: 9.5,
  },
  longSwipesMs: 200,
  breakpoints: {
    1440: {
      slidesPerView: '3',
      spaceBetween: 20,
    },
    767: {
      slidesPerView: '2',
    },
    320: {
      slidesPerView: '1',
      spaceBetween: 10,
    },
  },
});
Swiper.use([Navigation, Pagination, Mousewheel, FreeMode, Scrollbar]);
