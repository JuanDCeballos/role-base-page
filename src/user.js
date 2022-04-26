import { createElement } from './helperDOMfunction';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../dist/style.css';
import { content } from './index';
import { home } from './home';

function user() {
  const el = createElement('div', {
    id: 'userContainer',
    class: ['user-container', 'final-user'],
  });

  const icon = createElement('i', {
    class: ['fa-solid', 'fa-house', 'go-home'],
  });

  icon.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(home());
  });

  const para = createElement('p', {
    textContent: 'ENTRASTE COMO UN USUARIO',
    class: ['log-as'],
  });

  el.appendChild(para);
  el.appendChild(icon);

  return el;
}

export { user };
