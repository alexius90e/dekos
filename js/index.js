const firstScreenSwiperEl = document.querySelector('.first-screen .swiper');

if (firstScreenSwiperEl) {
  const swiper = new Swiper(firstScreenSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

const gallerySwiperEl = document.querySelector('.gallery .swiper');

if (gallerySwiperEl) {
  const swiper = new Swiper(gallerySwiperEl, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    loop: true,
  });
}
