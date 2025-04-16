export function aplicarAnimaciones() {
  const secciones = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  secciones.forEach(sec => {
    sec.classList.add('invisible');
    observer.observe(sec);
  });
}