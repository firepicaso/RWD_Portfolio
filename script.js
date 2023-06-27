
const hamburger = document.querySelector('.hamburger-icon');
const cancel =  document.querySelector('.cancel-icon');
const navList =  document.querySelector('.pages');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
const portfolio = document.getElementById('portfoliolink');
const about = document.getElementById('aboutlink');
const contact = document.getElementById('contactlink');
const navBar =  document.querySelector('.nav');
hamburger.addEventListener('click',() => {
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
portfolio.addEventListener('click', () => {
    navList.classList.remove('active-list');
    cancel.classList.remove('active-icon');
    hamburger.classList.remove('disabled');
    main.classList.remove('blur');
    container.classList.remove('active-container');
    navBar.classList.remove('active-nav');
})
about.addEventListener('click', () => {
    navList.classList.remove('active-list');
    cancel.classList.remove('active-icon');
    hamburger.classList.remove('disabled');
    main.classList.remove('blur');
    container.classList.remove('active-container');
    navBar.classList.remove('active-nav');
})
contact.addEventListener('click', () => {
    navList.classList.remove('active-list');
    cancel.classList.remove('active-icon');
    hamburger.classList.remove('disabled');
    main.classList.remove('blur');
    container.classList.remove('active-container');
    navBar.classList.remove('active-nav');
})