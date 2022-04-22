import { createElement } from './helperDOMfunction';
import '../dist/style.css';

function user() {
  const el = createElement('div', {
    id: 'userContainer',
    class: ['user-container'],
  });

  const para = createElement('p', {
    textContent: 'ENTRASTE COMO UN USUARIO',
    class: ['log-as'],
  });

  el.appendChild(para);

  return el;
}

export { user };
