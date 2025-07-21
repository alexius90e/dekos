const burgerButton = document.querySelector('.header__main-burger-button');
const headerMainDialog = document.querySelector('.header__main-dialog');

if (burgerButton && headerMainDialog) {
  burgerButton.addEventListener('click', (event) => {
    headerMainDialog.classList.add('active');
  });

  headerMainDialog.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isCloseBtn = event.target.classList.contains('header__main-dialog-close');

    if (isLayout || isCloseBtn) {
      event.currentTarget.classList.remove('active');
    }
  });
}

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

const certificatesSwiperEl = document.querySelector('.certificates .swiper');

if (certificatesSwiperEl) {
  const swiper = new Swiper(certificatesSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
