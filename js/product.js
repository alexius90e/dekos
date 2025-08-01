const productThumbsSwiperEl = document.querySelector('.product__middle-gallery-thumbs .swiper');
const productMainSwiperEl = document.querySelector('.product__middle-gallery-main .swiper');
const productMainSwiperPrevBtn = document.querySelector('.product__middle-gallery-prev');
const productMainSwiperNextBtn = document.querySelector('.product__middle-gallery-next');

if (productThumbsSwiperEl && productMainSwiperEl) {
  const thumbsSwiper = new Swiper(productThumbsSwiperEl, {
    spaceBetween: 10,
    slidesPerView: 2,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'horizontal',
    breakpoints: {
      320: {
        direction: 'horizontal',
        slidesPerView: 3,
      },
      481: {
        direction: 'horizontal',
        slidesPerView: 4,
      },
      769: {
        direction: 'vertical',
        slidesPerView: 4,
      },
    },
  });
  const swiper = new Swiper(productMainSwiperEl, {
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: productMainSwiperNextBtn,
      prevEl: productMainSwiperPrevBtn,
    },
    thumbs: {
      swiper: thumbsSwiper,
    },
  });
}

const productBottomGalleryVideoEls = document.querySelectorAll('.product__bottom-gallery-video');

productBottomGalleryVideoEls.forEach((videoEl) => {
  videoEl.addEventListener('click', (event) => {
    const isButton = event.target.classList.contains('product__bottom-gallery-video-play-button');
    const isPlay = event.target.classList.contains('product__bottom-gallery-video-play');

    if (isButton || isPlay) {
      event.currentTarget.classList.add('active');
    }
  });
});

const productBottomInstructionEls = document.querySelectorAll('.product__bottom-instruction');

productBottomInstructionEls.forEach((instructionEl) => {
  instructionEl.addEventListener('click', (event) => {
    const isActive = event.currentTarget.classList.contains('active');
    const isToggler = event.target.classList.contains('product__bottom-instruction-toggler');
    const panel = instructionEl.querySelector('.product__bottom-instruction-panel');

    if (isToggler && panel) {
      if (isActive) {
        panel.style.maxHeight = `${0}px`;
        event.currentTarget.classList.remove('active');
      } else {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        event.currentTarget.classList.add('active');
      }
    }
  });
});
