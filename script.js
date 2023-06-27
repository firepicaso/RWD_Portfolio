const container = document.querySelector('.container');
const navBar = document.querySelector('.nav');
const hamburger = document.querySelector('.menu-icon');
const cancel = document.querySelector('.cancel-icon');
const main = document.querySelector('.main');
const navList = document.querySelector('.pages');

hamburger.addEventListener('click', () => {
  navList.classList.add('active-list');
  cancel.classList.add('active-icon');
  hamburger.classList.add('disabled');
  container.classList.add('active-color');
  main.classList.add('blur');
  container.classList.add('active-container');
  navBar.classList.add('active-nav');
});

cancel.addEventListener('click', () => {
  navList.classList.remove('active-list');
  cancel.classList.remove('active-icon');
  hamburger.classList.remove('disabled');
  main.classList.remove('blur');
  container.classList.remove('active-container');
  navBar.classList.remove('active-nav');
});
