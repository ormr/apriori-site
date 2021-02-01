import '../assets/sass/main.scss';
import { showSideMenu } from '../assets/scripts';

const button = document.querySelector('.toggle-icon');
const sideMenu = document.querySelector('.nav-menu');

button.addEventListener('click', () => {
  showSideMenu(button, sideMenu);
});

const emailInput = document.querySelector('#footer-email-input');

const sliceLabelForInput = (e) => {
  const labelEl = e.target.parentNode.children[1];
  labelEl.classList.add('default-field__label_focused');
};

const unsliceLabelForInput = (e) => {
  if (!e.target.value) {
    const labelEl = e.target.parentNode.children[1];
    labelEl.classList.remove('default-field__label_focused');
  }
};

emailInput.addEventListener('focus', sliceLabelForInput);

emailInput.addEventListener('blur', unsliceLabelForInput);
