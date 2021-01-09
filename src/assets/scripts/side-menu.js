export const showSideMenu = (button, sideMenu) => {
  if (
    !button.classList.contains('active') &&
    !button.classList.contains('end')
  ) {
    sideMenu.classList.add('nav-menu_shown');
    button.classList.add('active');
    document.querySelector('body').style.overflowY = 'hidden';
  } else {
    button.classList.add('end');
    button.classList.remove('active');
    setTimeout(() => {
      button.classList.remove('end');
      document.querySelector('body').style.overflowY = '';
    }, 700);
    sideMenu.classList.remove('nav-menu_shown');
  }
};
