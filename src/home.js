import { createElement } from './helperDOMfunction';

function home() {
  const el = createElement('div', {
    id: 'homeContainer',
    class: ['home-container'],
  });

  const p = createElement('p', {
    textContent: 'hola',
    id: 'eee',
  });

  el.appendChild(p);

  return el;
}

export { home };
