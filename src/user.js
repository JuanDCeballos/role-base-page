import { createElement } from './helperDOMfunction';
import '../dist/style.css';

function user() {
  const el = createElement('div', {
    id: 'userContainer',
    class: ['user-container'],
  });

  const para = createElement('p', {
    textContent: 'You login as an user',
  });

  el.appendChild(para);

  return el;
}

export { user };
