import {sendData} from './api';

const userNameInput = document.querySelector('#user-name');
const userTelephoneInput = document.querySelector('#user-telephone');
const userEmailInput = document.querySelector('#user-email');
const UserAgreeCheckbox = document.querySelector('#user-agree');
const formButton = document.querySelector('.form__btn');
const bookForm = document.querySelector('#book-form');
const checkBoxLabel = document.querySelector('.form__checkbox-label');

const EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
const TELEPHONE_REGEX = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/;

const TEXTS = {
  empty: 'Поле не должно быть пустым',
  telephoneError: 'Проверьте правильность набранного номера',
  emailError: 'Проверьте правильность набранного адресса электронной почты',
};

const validateForm = (targetInput, texts, formKey, regex) => {
  if (targetInput.value === '') {
    targetInput.setCustomValidity(`${texts.empty}`);
  } else if (regex && !regex.test(targetInput.value)) {
    targetInput.setCustomValidity(`${texts[`${formKey}`]}`);
  } else {
    targetInput.setCustomValidity('');
  }
  targetInput.reportValidity();
};

const switchButton = () => {
  if (!UserAgreeCheckbox.checked) {
    formButton.disabled = true;
  } else {
    formButton.disabled = false;
  }
};

const addValidation = () => {
  if (userNameInput) {
    userNameInput.addEventListener('input', () => {
      validateForm(userNameInput, TEXTS);
    });
  }
  if (userTelephoneInput) {
    userTelephoneInput.addEventListener('input', () => {
      validateForm(userTelephoneInput, TEXTS, 'telephoneError', TELEPHONE_REGEX);
    });
  }
  if (userEmailInput) {
    userEmailInput.addEventListener('input', () => {
      validateForm(userEmailInput, TEXTS, 'emailError', EMAIL_REGEX);
    });
  }
  if (UserAgreeCheckbox) {
    UserAgreeCheckbox.addEventListener('change', switchButton);
  }

  if (checkBoxLabel) {
    checkBoxLabel.addEventListener('keydown', (evt) =>{
      if (evt.key === 'Enter' || evt.keyCode === 32) {
        evt.preventDefault();
        if (UserAgreeCheckbox.checked) {
          UserAgreeCheckbox.checked = false;
        } else {
          UserAgreeCheckbox.checked = true;
        }
      }
    });
  }
};

const showLoadAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.color = 'red';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'white';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

const setFormSubmit = () => {
  addValidation();

  bookForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
        () => showLoadAlert('Форма успешно отправлена'),
        () => showLoadAlert('Проверьте форму'),
        new FormData(evt.target)
    );
  });
};

export {setFormSubmit};
