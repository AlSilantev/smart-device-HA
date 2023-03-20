if (window.matchMedia('(max-width: 769px)').matches) {
  const accordionWrappers = document.querySelectorAll('.footer__section-wrapper');

  accordionWrappers.forEach((wrapper) => {
    wrapper.addEventListener('click', (e) => {

      if (e.target.parentNode.classList.contains('footer__section-wrapper--accordion-activated')) {
        e.target.parentNode.classList.remove('footer__section-wrapper--accordion-activated');
        e.target.parentNode.classList.add('footer__section-wrapper--accordion-closed');
        return;
      }

      accordionWrappers.forEach((accordion) => {
        accordion.classList.remove('footer__section-wrapper--accordion-activated');
        accordion.classList.add('footer__section-wrapper--accordion-closed');
      });

      wrapper.classList.add('footer__section-wrapper--accordion-activated');
    });
  });

  // console.log(title);
  // console.log(accordionParent);


  // if (accordionParent.classList.contains('footer__section-wrapper--accordion-closed')) {
  //   accordionParent.classList.toggle('footer__section-wrapper--accordion-activated');
  //   accordionParent.classList.toggle('footer__section-wrapper--accordion-closed');
  // } else {
  //   accordionParent.classList.toggle('footer__section-wrapper--accordion-closed');
  //   accordionParent.classList.toggle('footer__section-wrapper--accordion-activated');
  // }

  // accordionParent.classList.toggle('footer__section-wrapper--accordion-activated');
  //   });
  // });


  // accordion.addEventListener('click', () => {
  //   const list = accordion.nextElementSibling;

  //   if (list.classList.contains('footer__list-wrapper--accordion-active') && accordion.classList.contains('footer__title--accordion-active')) {
  //     list.classList.remove('footer__list-wrapper--accordion-active');
  //     accordion.classList.remove('footer__title--accordion-active');
  //   } else {
  //     document.querySelectorAll('.footer__list-wrapper').forEach((accordionList) => {
  //       accordionList.classList.remove('footer__list-wrapper--accordion-active');
  //       accordion.classList.remove('footer__title--accordion-close');
  //     });

  //     list.classList.toggle('footer__list-wrapper--accordion-active');
  //     accordion.classList.toggle('footer__title--accordion-close');
  //   }
  // })
}
