import '../assets/sass/main.scss';
import { showSideMenu } from '../assets/scripts';

const button = document.querySelector('.toggle-icon');
const sideMenu = document.querySelector('.nav-menu');

button.addEventListener('click', () => {
  showSideMenu(button, sideMenu);
});
