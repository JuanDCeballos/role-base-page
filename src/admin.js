import { createElement } from './helperDOMfunction';
import '../dist/style.css';

function admin() {
  const el = createElement('div', {
    id: 'adminContainer',
    class: ['admin-container'],
  });

  const para = createElement('p', {
    textContent: 'ENTRASTE COMO UN ADMINISTRADOR',
    class: ['log-as'],
  });

  el.appendChild(para);

  return el;
}

export { admin };
