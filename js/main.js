import { router } from './router.js';
import { aplicarAnimaciones } from './animaciones.js';

// Función para activar el comportamiento del submenú con clic
function activarSubmenu() {
  const toggleServicios = document.getElementById('toggle-servicios');
  const submenu = document.querySelector('.submenu');

  if (toggleServicios && submenu) {
    toggleServicios.addEventListener('click', (e) => {
      e.preventDefault();
      submenu.classList.toggle('show');
    });
  }
}

// Cuando cambie la ruta con hash (#), actualiza contenido y submenu
window.addEventListener('hashchange', () => {
  router();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  aplicarAnimaciones();
  activarSubmenu(); // 👈 asegura que se active al cambiar de vista
});

// Al cargar la página por primera vez
window.addEventListener('load', () => {
  router();
  aplicarAnimaciones();
  activarSubmenu(); // 👈 también se activa al inicio
});