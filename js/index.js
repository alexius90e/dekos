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

const gallerySlideEls = document.querySelectorAll('.gallery__slide');

gallerySlideEls.forEach((gallerySlideEl) => {
  gallerySlideEl.addEventListener('click', (event) => {
    const isPlayBtn = event.target.classList.contains('gallery__slide-play-button');

    if (isPlayBtn) {
      event.currentTarget.classList.add('active');
    }
  });
});

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

// brands

const allBrandsFilterCategorySelectEls = document.querySelectorAll(
  '.all-brands__filter-category-select'
);

allBrandsFilterCategorySelectEls.forEach((selectEl) => {
  selectEl.addEventListener('click', (event) => {
    const isToggler = event.target.classList.contains('all-brands__filter-category-select-toggler');
    const isLayout = event.target === event.currentTarget;

    if (isToggler) event.currentTarget.classList.add('active');
    if (isLayout) event.currentTarget.classList.remove('active');
  });
});

const allBrandsFilterSortSelectEls = document.querySelectorAll('.all-brands__filter-sort-select');

allBrandsFilterSortSelectEls.forEach((selectEl) => {
  selectEl.addEventListener('click', (event) => {
    const isToggler = event.target.classList.contains('all-brands__filter-sort-select-toggler');
    const isLayout = event.target === event.currentTarget;

    if (isToggler) event.currentTarget.classList.add('active');
    if (isLayout) event.currentTarget.classList.remove('active');
  });
});

// about

const aboutVideoItemEls = document.querySelectorAll('.about__videos-item');

aboutVideoItemEls.forEach((aboutVideoItemEl) => {
  aboutVideoItemEl.addEventListener('click', (event) => {
    const isPlayBtn = event.target.classList.contains('about__videos-item-play-button');

    if (isPlayBtn) {
      event.currentTarget.classList.add('active');
    }
  });
});

// project-banner

const projectBannerSwiperEl = document.querySelector('.project-banner .swiper');

if (projectBannerSwiperEl) {
  const swiper = new Swiper(projectBannerSwiperEl, {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
}

const projectBannerCallbackForm = document.querySelector('.project-banner__callback-form');
const projectBannerDialog = document.querySelector('.project-banner__dialog');

if (projectBannerCallbackForm && projectBannerDialog) {
  projectBannerCallbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    projectBannerDialog.classList.add('active');
  });

  projectBannerDialog.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('project-banner__dialog-close-button');

    if (isLayout || isClose) {
      projectBannerDialog.classList.remove('active');
    }
  });
}

// examples

const examplesSlideEls = document.querySelectorAll('.examples__slide');

examplesSlideEls.forEach((examplesSlideEl) => {
  examplesSlideEl.addEventListener('click', (event) => {
    const isPlayBtn = event.target.classList.contains('examples__slide-play-button');

    if (isPlayBtn) {
      event.currentTarget.classList.add('active');
    }
  });
});

// calculator

const calculatorEl = document.querySelector('.calculator');

if (calculatorEl) {
  calculatorEl.addEventListener('click', (event) => {
    const isCalculateBtn = event.target.classList.contains('calculator__main-controls-calculate');

    if (isCalculateBtn) {
      event.target.disabled = true;
      event.currentTarget.classList.add('active');
    }
  });
}
