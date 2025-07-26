const catalogFilterBlockEls = document.querySelectorAll('.catalog-filter__block');

catalogFilterBlockEls.forEach((block) => {
  block.addEventListener('click', (event) => {
    const isToggler = event.target.classList.contains('catalog-filter__block-top-toggler');
    const isPanelToggler = event.target.classList.contains(
      'catalog-filter__block-panel-more-button'
    );

    if (isToggler) {
      event.currentTarget.classList.toggle('active');
    }

    if (isPanelToggler) {
      const panel = event.currentTarget.querySelector('.catalog-filter__block-panel');
      const moreButton = event.currentTarget.querySelector(
        '.catalog-filter__block-panel-more-button'
      );
      if (panel) {
        const isPanelActive = panel.classList.contains('active');
        if (isPanelActive && moreButton) {
          panel.classList.remove('active');
          if (moreButton) moreButton.textContent = 'Показать еще';
        } else {
          panel.classList.add('active');
          if (moreButton) moreButton.textContent = 'Свернуть';
        }
      }
    }
  });
});

const catalogFilterToggler = document.querySelector('.catalog__top-filter-toggler');
const catalogFilter = document.querySelector('.catalog-filter');

if (catalogFilterToggler && catalogFilter) {
  catalogFilterToggler.addEventListener('click', () => {
    catalogFilter.classList.toggle('active');
  });

  catalogFilter.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('catalog-filter__close-button');

    if (isLayout || isClose) {
      catalogFilter.classList.remove('active');
    }
  });
}