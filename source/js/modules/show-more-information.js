const moreInfoButton = document.querySelector('.company-information__more-information-button');
const companyDescription = document.querySelector('.company-information__description-wrapper');

moreInfoButton.innerHTML = 'Подробнее';

moreInfoButton.addEventListener('click', () => {
  companyDescription.classList.toggle('company-information__description-wrapper--more-information-closed');


  if (moreInfoButton.innerHTML === 'Подробнее') {
    moreInfoButton.innerHTML = 'Свернуть';
  } else {
    moreInfoButton.innerHTML = 'Подробнее';
  }
});
