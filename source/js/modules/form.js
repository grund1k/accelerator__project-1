const userNameInput = document.querySelector('#user-name');
const userTelephoneInput = document.querySelector('#user-telephone');
const userEmailInput = document.querySelector('#user-email');
const UserAgreeCheckbox = document.querySelector('#user-agree');
const formButton = document.querySelector('.form__btn');
const bookForm = document.querySelector('#book-form');

const EMAIL_REGEX = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
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
  if (!userNameInput.reportValidity() || !userEmailInput.reportValidity() || !userTelephoneInput.reportValidity() || !UserAgreeCheckbox.checked) {
    formButton.disabled = true;
  } else {
    formButton.disabled = false;
  }
};

const addValidation = () => {
  userNameInput.addEventListener('input', () => {
    validateForm(userNameInput, TEXTS);
    switchButton();
  });
  userTelephoneInput.addEventListener('input', () => {
    validateForm(userTelephoneInput, TEXTS, 'telephoneError', TELEPHONE_REGEX);
    switchButton();
  });
  userEmailInput.addEventListener('input', () => {
    validateForm(userEmailInput, TEXTS, 'emailError', EMAIL_REGEX);
    switchButton();
  });

  UserAgreeCheckbox.addEventListener('change', switchButton);
};

const setFormSubmit = () => {
  addValidation();

  bookForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });
};

export {setFormSubmit};
