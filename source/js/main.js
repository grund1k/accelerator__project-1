import {iosVhFix} from './utils/ios-vh-fix';
import {openMenu} from './modules/menu';
import {setFormSubmit} from './modules/form';
// ---------------------------------


window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  // Modules
  const openMenuButton = document.querySelector('.header__toggle');

  openMenuButton.addEventListener('click', () => {
    openMenu();
  });

  setFormSubmit();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {
  //   initModals();
  // });
});
