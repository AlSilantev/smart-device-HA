export const openModal = (modalContainer, modal, openModalButton, autofocus = '') => {
  openModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'flex';
    modal.style.display = 'flex';
    if (autofocus) {
      autofocus.focus();
    }
  });
};

export const closeModal = (modalContainer, modal, closeModalButton) => {
  closeModalButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
    modal.style.display = 'none';
  });
};

const modalContainer = document.querySelector('.modal-container');
const modal = document.querySelector('.modal');
const openModalButton = document.querySelector('.header__order-call-button');
const closeModalButton = document.querySelector('.modal__close-button');
const autofocusField = document.consultationForm.userName;

if (openModalButton) {
  openModal(modalContainer, modal, openModalButton, autofocusField);
  closeModal(modalContainer, modal, closeModalButton);
}


