const menu = document.querySelector('.menu-icon');
const cancel = document.querySelector('.cancel-icon');
const pages = document.querySelector('.pages');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');
const pageselections = document.querySelectorAll('.page-selection');

function openMenu() {
  pages.classList.toggle('active');
  cancel.classList.toggle('active');
  main.classList.toggle('blur');
  logo.classList.toggle('blur');
  menu.classList.toggle('blur');
}

function closeMenu() {
  pages.classList.toggle('active');
  cancel.classList.toggle('active');
  main.classList.toggle('blur');
  logo.classList.toggle('blur');
  menu.classList.toggle('blur');
}

menu.addEventListener('click', () => {
  openMenu();
});

cancel.addEventListener('click', () => {
  closeMenu();
});

pageselections.forEach((page) => {
  page.addEventListener('click', () => {
    closeMenu();
  });
});