const menu = document.querySelector('.menu-icon');
const cancel = document.querySelector('.cancel-icon');
const pages = document.querySelector('.pages');
const main = document.querySelector('.main');
const logo = document.querySelector('.logo');
const pageselections = document.querySelectorAll('.page-selection');
const modal = document.querySelector('.modal');
const modalCancel = document.querySelector('.modal-cancel');
const modalButton1 = document.querySelector('.modal-button1');
const modalButton2 = document.querySelector('.modal-button2');
const modalButton3 = document.querySelector('.modal-button3');
const modalButton4 = document.querySelector('.modal-button4');

const works = [
  {
    title: 'Tonic',
    client: 'CANOPY',
    workType: 'Back End Dev',
    year: '2015',
    featuredImage: '.Assets/Tonic1',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Multi-Post Stories',
    client: 'FACEBOOK',
    workType: 'Full Stack Dev',
    year: '2015',
    featuredImage: '.Assets/Multi1',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Facebook 360',
    client: 'FACEBOOK',
    workType: 'Full Stack Dev',
    year: '2015',
    featuredImage: '.Assets/Multi1',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#'
  },
  {
    title: 'Uber Navigation',
    client: 'UBER',
    workType: 'Lead Developer',
    year: '2018',
    featuredImage: '.Assets/Multi1',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#'
  },
];

function seeProject() {
  modal.classList.toggle('active');
}

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

modalButton1.addEventListener('click', () => {seeProject();});
modalButton2.addEventListener('click', () => {seeProject();});
modalButton3.addEventListener('click', () => {seeProject();});
modalButton4.addEventListener('click', () => {seeProject();});

modalCancel.addEventListener('click', () => {
  modal.classList.toggle('active');
});