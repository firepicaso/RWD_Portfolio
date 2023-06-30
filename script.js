const menu = document.querySelector('.menu-icon');
const cancel = document.querySelector('.cancel-icon');
const pages = document.querySelector('.pages');
const pageselections = document.querySelectorAll('.page-selection');
const main = document.querySelector('.main');
const header = document.querySelector('.header');
const logo = document.querySelector('.logo');
const modal = document.querySelector('.modal');
const modalCancel = document.querySelector('.modal-cancel');
const modalButton1 = document.querySelector('.modal-button1');
const modalButton2 = document.querySelector('.modal-button2');
const modalButton3 = document.querySelector('.modal-button3');
const modalButton4 = document.querySelector('.modal-button4');
const form = document.querySelector('.contact-form');

const works = [
  {
    title: 'Tonic',
    client: 'CANOPY',
    workType: 'Back End Dev',
    year: '2015',
    featuredImage: './Assets/Tonic1.png',
    featuredImageBig: './Assets/Tonic1Big.svg',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Multi-Post Stories',
    client: 'FACEBOOK',
    workType: 'Full Stack Dev',
    year: '2015',
    featuredImage: './Assets/Muti1.png',
    featuredImageBig: './Assets/Multi1Big.svg',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Facebook 360',
    client: 'FACEBOOK',
    workType: 'Full Stack Dev',
    year: '2015',
    featuredImage: './Assets/Tonic2.png',
    featuredImageBig: './Assets/Multi2Big.svg',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
  {
    title: 'Uber Navigation',
    client: 'UBER',
    workType: 'Lead Developer',
    year: '2018',
    featuredImage: './Assets/Multi2.png',
    featuredImageBig: './Assets/Tonic2Big.svg',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.',
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    liveLink: '#',
    sourceLink: '#',
  },
];

function seeProject(index) {
  const work = works[index];
  const modalHeading = document.querySelector('.modal-heading');
  const modalClient = document.querySelector('.client');
  const modalCaption = document.querySelector('.caption');
  const modalYear = document.querySelector('.year');
  const modalImage = document.querySelector('.portfolio-image');
  const modalDescription = document.querySelector('.modal-description');
  const modalTechlist = document.querySelector('.tech-list-portfolio');
  const modalSeelive = document.querySelector('.see-live');
  const modalSeesource = document.querySelector('.see-source');

  modalHeading.textContent = work.title;
  modalClient.textContent = work.client;
  modalCaption.textContent = work.workType;
  modalYear.textContent = work.year;
  modalSeelive.setAttribute('href', work.liveLink);
  modalSeesource.setAttribute('href', work.sourceLink);

  if (window.innerWidth >= 768) {
    modalDescription.textContent = work.descriptionDesktop;
    modalImage.setAttribute('src', work.featuredImageBig);
  } else {
    modalDescription.textContent = work.description;
    modalImage.setAttribute('src', work.featuredImage);
  }

  modalTechlist.innerHTML = '';
  work.technologies.forEach((technology) => {
    const li = document.createElement('li');
    li.innerText = technology;
    modalTechlist.appendChild(li);
  });

  modal.classList.toggle('active');
  main.classList.toggle('blur');
  header.classList.toggle('blur');
}

function openMenu() {
  pages.classList.add('active');
  cancel.classList.add('active');
  main.classList.add('blur');
  logo.classList.add('blur');
  menu.classList.add('blur');
}

function closeMenu() {
  pages.classList.remove('active');
  cancel.classList.remove('active');
  main.classList.remove('blur');
  logo.classList.remove('blur');
  menu.classList.remove('blur');
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

modalButton1.addEventListener('click', () => { seeProject(0); });
modalButton2.addEventListener('click', () => { seeProject(1); });
modalButton3.addEventListener('click', () => { seeProject(2); });
modalButton4.addEventListener('click', () => { seeProject(3); });

modalCancel.addEventListener('click', () => {
  modal.classList.toggle('active');
  main.classList.toggle('blur');
  header.classList.toggle('blur');
});

const fullName = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

let formData = {
  fullName: '',
  email: '',
  message: '',
};

form.addEventListener('submit', (event) => {
  const validation = document.querySelector('.validation');
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    validation.innerText = 'Please type email address in lower case!';
  } else {
    form.submit();
  }
});

function saveForm() {
  formData.fullName = fullName.value;
  formData.email = email.value;
  formData.message = message.value;
  localStorage.setItem('formLocalStorage', JSON.stringify(formData));
}

fullName.addEventListener('input', saveForm);
email.addEventListener('input', saveForm);
message.addEventListener('input', saveForm);

window.addEventListener('load', () => {
  const localData = localStorage.getItem('formLocalStorage');
  if (localData !== null) {
    formData = JSON.parse(localStorage.getItem('formLocalStorage'));
    fullName.value = formData.fullName;
    email.value = formData.email;
    message.value = formData.message;
  }
});