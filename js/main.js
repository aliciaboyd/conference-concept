// NAV 

const navBtn = document.querySelector('#btn-menu');
const nav = document.querySelector('.nav-container');
const navContainer = document.querySelector('.primary-nav');


navBtn.addEventListener('click', () => {
  navContainer.classList.add('activated');
  const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
  navBtn.setAttribute('aria-expanded', !isExpanded);
  !isExpanded && nav.classList.add('active');
})

// NAV OBSERVER

let options = { threshold: .55 }

function navCallback (entries) {
  navContainer.classList.toggle('activated', !entries[0].isIntersecting)
}

let navObs = new IntersectionObserver (navCallback, options);

navObs.observe (document.querySelector('.hero'));

// PROGRAM DROPDOWN

const dayHeader= document.querySelectorAll('.day-header');

dayHeader.forEach(dayHeader=> {
  dayHeader.addEventListener('click', event => {
    dayHeader.classList.toggle('active');
    const dayAccordianBody = dayHeader.nextElementSibling;
    if(dayHeader.classList.contains('active')) {
      dayAccordianBody.style.maxHeight = dayAccordianBody.scrollHeight + 'px';
    }
    else {
        dayAccordianBody.style.maxHeight = 0;
      };
  });
});


