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

// modal cards ====
const cardButtons = document.querySelectorAll('#section-a .item button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleButtonClick(event) {
  const button = event.target;
  const card = button.closest('.item');
  const name = card.querySelector('h3').textContent;
  const imgSrc = card.querySelector('img').src;
  // add content to modal-inner
  modalInner.innerHTML = `
    <img width="300px" height="300px" src='${imgSrc}' alt='cool pic'/>
    <h3>${name}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, blanditiis consequatur? Repellat quo nemo quis sed blanditiis, a, corrupti porro quod possimus, assumenda temporibus aliquam impedit. Consequuntur quos iusto eum laudantium eligendi nihil culpa molestias dicta id rem. Nostrum molestiae odit cupiditate consectetur expedita, dignissimos eaque reprehenderit necessitatibus blanditiis eveniet.</p>
  `;

  // add open class to modal
  modalOuter.classList.add('open');
}

// closes modal when called
function closeModal() {
  modalOuter.classList.remove('open');
}

// listen for card button click to open modal
cardButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick);
});

// listen for esc key press to close modal
window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// listen for click outside of modal to close
modalOuter.addEventListener('click', event => {
  const isOutSide = !event.target.closest('.modal-inner');
  if (isOutSide) {
    closeModal();
  }
});
// end modal cards ====

// main nav opacity on scroll ====
window.addEventListener('scroll', () => {
  const mainNav = document.querySelector('#main-nav');
  if (window.scrollY > 20) {
    mainNav.style.opacity = '0.7';
  } else {
    mainNav.style.opacity = '1';
  }
});
// end main nav opacity on scroll ====

// smooth scrolling ====
$('.nav-list a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const { hash } = this;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
// end smooth scrolling ====
