import {clearNoJsCode} from '../utils/clear-no-js';

const header = document.querySelector('.header');
const closeMenuButton = header.querySelector('.nav__modal-toggle');

clearNoJsCode(header, 'header');
header.classList.remove('header--nav-open');
header.classList.add('header--nav-close');

const openMenu = () => {
  if (header) {
    header.classList.add('header--nav-open');
    header.classList.remove('header--nav-close');

    closeMenuButton.addEventListener('click', closeMenu);
  }
};

const closeMenu = () => {
  if (header) {
    header.classList.add('header--nav-close');
    header.classList.remove('header--nav-open');

    closeMenuButton.removeEventListener('click', closeMenu);
  }
};

export {openMenu};
