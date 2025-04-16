import home from './secciones/home.js';
import servicios from './secciones/servicios.js';
import sobremi from './secciones/sobreMi.js';
import contacto from './secciones/contacto.js';

const routes = {
  '/': home,
  '/servicios': servicios,
  '/sobremi': sobremi,
  '/contacto': contacto,
};

export function router() {
  const path = location.hash.slice(1).toLowerCase() || '/';
  const app = document.getElementById('app');
  app.innerHTML = routes[path] ? routes[path]() : '<h2>Página no encontrada</h2>';
}