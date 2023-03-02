if (window.matchMedia('(max-width: 769px)').matches) {
  document.querySelectorAll('.footer__title').forEach((title) => {
    title.addEventListener('click', () => {
      const list = title.nextElementSibling;

      if (list.classList.contains('footer__list-wrapper--accordion-active')) {
        list.classList.remove('footer__list-wrapper--accordion-active');
        title.classList.remove('footer__title--accordion-close');
      } else {
        document.querySelectorAll('.footer__list-wrapper').forEach((accordionList) => {
          accordionList.classList.remove('footer__list-wrapper--accordion-active');
          title.classList.remove('footer__title--accordion-close');
        });

        list.classList.toggle('footer__list-wrapper--accordion-active');
        title.classList.toggle('footer__title--accordion-close');
      }
    });
  });
}
