const cancel = document.querySelector('.cancel-icon');
const navList = document.querySelector('.pages');
const menu = document.querySelector('.menu-icon');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');

menu.addEventListener('click', () => {
  navList.classList.add('add-pages');
  cancel.classList.add('active-icon');
  main.classList.add('blur');
  logo.classList.add('blur');
  menu.classList.add('blur');
});

cancel.addEventListener('click', () => { 
  navList.classList.remove('add-pages');
  cancel.classList.remove('active-icon');
  main.classList.remove('blur');
  logo.classList.remove('blur');
  menu.classList.remove('blur');
});
