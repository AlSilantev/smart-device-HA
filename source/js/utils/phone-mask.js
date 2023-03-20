// window.addEventListener('DOMContentLoaded', function () {
//   [].forEach.call(document.consultationForm.userPhoneNumber, function (input) {
//     let keyCode;
//     function getUserNumberMask(evt) {
//       evt.keyCode && (keyCode = evt.keyCode);
//       let beginingPosition = this.selectionStart;

//       if (beginingPosition < 3) {
//         evt.preventDefault();
//       }

//       let phoneMask = '+7()';
//       let i = 0;
//       let defaultValue = phoneMask.replace(/\D/g, '');
//       let value = this.value.replace(/\D/g, '');
//       let newValue = phoneMask.replace(/[_\d]/g, function (a) {
//         return i < value.length ? value.charAt(i++) || defaultValue.charAt(i) : a;
//       });

//       i = newValue.indexOf('_');

//       if (i !== -1) {
//         i < 5 && (i = 3);
//         newValue = newValue.slice(0, i);
//       }

//       let regExp = phoneMask.substr(0, this.value.length).replace(/_+/g,
//           function (a) {
//             return '\\d{1,' + a.length + '}';
//           }).replace(/[+()]/g, '\\$&');

//       regExp = new RegExp('^' + regExp + '$');

//       if (!regExp.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
//         this.value = newValue;
//       }
//       if (evt.type == 'blur' && this.value.length < 5) {
//         this.value = '';
//       }
//     }


//     input.addEventListener('input', getUserNumberMask, false);
//     input.addEventListener('focus', getUserNumberMask, false);
//     input.addEventListener('blur', getUserNumberMask, false);
//     input.addEventListener('keydown', getUserNumberMask, false);
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  let getUserNumberMask = function (evt) {
    let phoneInput = evt.target;
    let clearInputValue = phoneInput.dataset.phoneClear;
    let pattern = phoneInput.dataset.phonePattern;
    let maskDefault = '+7(__________)';
    let mask = pattern ? pattern : maskDefault;
    let i = 0;
    let defaultValue = mask.replace(/\D/g, '');
    let value = evt.target.value.replace(/\D/g, '');
    if (clearInputValue !== 'false' && evt.type === 'blur') {
      if (value.length < mask.match(/([\_\d])/g).length) {
        evt.target.value = '';
        return;
      }
    }
    if (defaultValue.length >= value.length) {
      value = defaultValue;
    }
    evt.target.value = mask.replace(/./g, function (a) {
      if (/[_\d]/.test(a) && i < value.length) {
        return value.charAt(i++);
      } else if (i >= value.length) {
        return '';
      } else {
        return a;
      }
      // return /[_\d]/.test(a) && i < value.length ? value.charAt(i++) : i >= value.length ? '' : a;
    });
  };
  let phoneInputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phoneInputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, getUserNumberMask);
    }
  }
});

