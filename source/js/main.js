import {iosVhFix} from './utils/ios-vh-fix';
import {openMenu} from './modules/menu';
import {setFormSubmit} from './modules/form';
import {setSmoothsScroll} from './modules/acnchor-smooth-scroll';
// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils

  iosVhFix();
  // Modules
  const openMenuButton = document.querySelector('.header__toggle');

  openMenuButton.addEventListener('click', () => {
    openMenu();
  });

  setFormSubmit();

  const smoothLinks = document.querySelectorAll('a[href^="#"]');

  setSmoothsScroll(smoothLinks);
});
