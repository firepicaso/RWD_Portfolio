
const hamburger = document.querySelector('.hamburger-icon');
const cancel =  document.querySelector('.cancel-icon');
const navList =  document.querySelector('.pages');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
hamburger.addEventListener('click',() => {
navList.classList.add('active');
cancel.classList.add('active-icon');
hamburger.classList.add('disabled');
container.classList.add('active-color');
main.classList.add('blur');
}
);

cancel.addEventListener('click', () => {
    navList.classList.remove('active');
    cancel.classList.remove('active-icon');
    hamburger.classList.remove('disabled');
    main.classList.remove('blur');
})
