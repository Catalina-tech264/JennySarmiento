// Carrusel sencillo para la sección de servicios

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  let current = 0;
  
  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      if (slide.dataset.bg) {
        slide.style.backgroundImage = slide.classList.contains('active') ? `url('${slide.dataset.bg}')` : '';
      }
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
    });
    current = idx;
  }

  dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => showSlide(idx));
  });

  // Opcional: auto-carrusel
  const auto = setInterval(() => {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }, 5000); // Cambia cada 5 segundos

  showSlide(0);
});