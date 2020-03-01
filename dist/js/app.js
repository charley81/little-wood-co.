// responsive nav ====
const navIcon = document.querySelector('.nav-icon');
const navOverlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav-list li');

navIcon.addEventListener('click', () => {
  navOverlay.classList.add('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navOverlay.classList.remove('open');
  });
});
// end responsive nav ====
