import './assets/sass/main.scss';
import { showSideMenu, smoothScroll, showAnswer } from './assets/scripts';

const button = document.querySelector('.toggle-icon');
const sideMenu = document.querySelector('.nav-menu');
const mouseButton = document.querySelector('.hero__mouse');
const faqBlock = document.querySelector('.faq');

button.addEventListener('click', () => {
  showSideMenu(button, sideMenu);
});

mouseButton.addEventListener('click', (e) => {
  e.preventDefault();
  smoothScroll('.our-story', 1000);
});

faqBlock.addEventListener('click', (e) => {
  if (!e.target.classList.contains('faq-item__show-btn')) return;
  const button = e.target;
  const icon = button.children[0];
  const questionBlock = button.parentNode.parentNode.children[0];
  const answerBlock = button.parentNode.parentNode.children[1];
  showAnswer(icon, questionBlock, answerBlock);
});

const emailInput = document.querySelector('#email');

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
