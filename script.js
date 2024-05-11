function scrollTitle() {
  let triggerHeightLandingPage = 0;

  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

  if (scrollTop >= triggerHeightLandingPage) {
    this.document.querySelector(
      '.landing-page h1:nth-child(1)',
    ).style.transform = 'translateX(' + scrollTop + 'px)';
    this.document.querySelector(
      '.landing-page h1:nth-child(2)',
    ).style.transform = 'translateX(-' + scrollTop + 'px)';
    this.document.querySelector(
      '.landing-page h1:nth-child(3)',
    ).style.transform = 'translateX(' + scrollTop * 1.5 + 'px)';
  } else {
    this.document.querySelector(
      '.landing-page h1:nth-child(1)',
    ).style.transform = 'translateX(0px)';
  }
}

function scrollOpacity() {
  const scrollTop = window.scrollY;
  const maxScroll = 600;

  const opacity = 1 - scrollTop / maxScroll;

  const clampedOpacity = Math.min(Math.max(opacity, 0), 1);

  document.querySelector('.landing-page h1:nth-child(1)').style.opacity =
    clampedOpacity;
  document.querySelector('.landing-page h1:nth-child(2)').style.opacity =
    clampedOpacity;
  document.querySelector('.landing-page h1:nth-child(3)').style.opacity =
    clampedOpacity;
  document.querySelector('.landing-page').style.filter =
    'brightness(' + clampedOpacity + ')';
}

function scrollWork() {
  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  let triggerHeightWork = 1100;
  if (scrollTop >= triggerHeightWork) {
    this.document.querySelector('.our-work').classList.add('open');
  } else {
    this.document.querySelector('.our-work').classList.remove('open');
  }
}
function scrollFooter() {
  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  let triggerHeigthFooter = 2400;
  if (scrollTop >= triggerHeigthFooter) {
    this.document.querySelector('.footer').classList.add('open');
  } else {
    this.document.querySelector('.footer').classList.remove('open');
  }
}

function scrollHistory() {
  let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
  let triggerHeightHistory = 700;
  if (scrollTop >= triggerHeightHistory <= 1100) {
    this.document.querySelector('.history-text p').classList.add('open');
  } else {
    this.document.querySelector('.history-text p').classList.remove('open');
  }
}

window.addEventListener('scroll', scrollTitle);
window.addEventListener('scroll', scrollWork);
window.addEventListener('scroll', scrollOpacity);
window.addEventListener('scroll', scrollFooter);

document.querySelector('.open-menu')?.addEventListener('click', function () {
  document.querySelector('.menu')?.classList.toggle('open');
  document.querySelector('.open-menu')?.classList.toggle('open');
});

const slide = new Slide('.slide', '.slide-wrapper');

const team = [
  {
    name: 'Bob',
    subtitle: 'Designer',
    img: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaAnUmDad3CRaNrA8Fufyvw4HkRriOk56OCDLBMcVEDA&s',
      alt: 'Bob',
    },
  },
  {
    name: 'Frank',
    subtitle: 'UX/UI Analyst',
    img: {
      src: 'https://img.freepik.com/premium-vector/businessman-back-view_98292-5717.jpg',
      alt: 'Frank',
    },
  },
  {
    name: 'Carlos',
    subtitle: 'System Architet',
    img: {
      src: 'https://img.freepik.com/premium-vector/businessman-avatar_24908-26511.jpg?w=360',
      alt: 'Carlos',
    },
  },
];
team.forEach(function (member) {
  const listItem = document.createElement('li');

  let image = document.createElement('img');
  image.src = member.img.src;
  image.alt = member.img.alt;

  const nameH1 = document.createElement('h3');
  nameH1.textContent = member.name;

  const subtitle = document.createElement('p');
  subtitle.textContent = member.subtitle;

  const subtitleDiv = document.createElement('div');

  listItem.classList.add('slide-item');
  subtitle.classList.add('subtitle');
  subtitleDiv.appendChild(nameH1);
  subtitleDiv.appendChild(subtitle);
  listItem.appendChild(image);
  listItem.appendChild(subtitleDiv);

  document.querySelector('.slide').appendChild(listItem);
});
slide.init();
