document.addEventListener("DOMContentLoaded", () => {
  const toggleServicios = document.getElementById('toggle-servicios');
  const submenu = document.querySelector('.submenu');

  if (toggleServicios && submenu) {
    toggleServicios.addEventListener('click', (e) => {
      e.preventDefault();
      submenu.classList.toggle('show');
    });
  }

  const enlacesInternos = document.querySelectorAll('a[href^="#"]');
  enlacesInternos.forEach(enlace => {
    enlace.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
// testimonios.js
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
let currentIndex = 0;
let interval;

function goToSlide(index) {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = 'translateX(-' + (slideWidth * index) + 'px)';
  currentIndex = index;
}

nextButton.addEventListener('click', () => {
  goToSlide((currentIndex + 1) % slides.length);
  resetInterval();
});

prevButton.addEventListener('click', () => {
  goToSlide((currentIndex - 1 + slides.length) % slides.length);
  resetInterval();
});

function startAutoSlide() {
  interval = setInterval(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, 5000);
}

function resetInterval() {
  clearInterval(interval);
  startAutoSlide();
}

startAutoSlide();
