import {clearNoJsCode} from '../utils/clear-no-js';

const header = document.querySelector('.header');
const closeMenuButton = header.querySelector('.nav__modal-toggle');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav--header a');
const body = document.querySelector('.body');

const switchOverlay = (status) => {
  if (overlay) {
    if (status === 'hidden') {
      overlay.classList.remove('overlay--active');
    }

    if (status === 'active') {
      overlay.classList.add('overlay--active');
    }
  }
};

clearNoJsCode(header, 'header');
header.classList.remove('header--nav-open');
header.classList.add('header--nav-close');

const openMenu = () => {
  if (header) {
    header.classList.add('header--nav-open');
    header.classList.remove('header--nav-close');
    switchOverlay('active');
    body.classList.add('body--fixed');

    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    overlay.addEventListener('click', closeMenu);

    closeMenuButton.addEventListener('click', closeMenu);
  }
};

const closeMenu = () => {
  if (header) {
    header.classList.add('header--nav-close');
    header.classList.remove('header--nav-open');
    switchOverlay('hidden');
    body.classList.remove('body--fixed');

    navLinks.forEach((link) => {
      link.removeEventListener('click', closeMenu);
    });

    overlay.removeEventListener('click', closeMenu);

    closeMenuButton.removeEventListener('click', closeMenu);
  }
};

export {openMenu};
