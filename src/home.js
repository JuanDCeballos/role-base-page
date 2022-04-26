import { createElement } from './helperDOMfunction';
import '../dist/style.css';
import logo from './images/logo.svg';
import mainImg from './images/illustration-devices.svg';
import { login } from './login';

function home() {
  const el = createElement('div', {
    id: 'homeContainer',
    class: ['home-container'],
  });

  const nav = createElement('div', {
    class: ['nav-container'],
  });

  const logoImg = createElement('img', {
    class: ['logo-home'],
    src: logo,
  });

  const p = createElement('p', {
    textContent: 'LOGIN',
    class: ['nav-text'],
  });

  p.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(login());
  });

  nav.appendChild(logoImg);
  nav.appendChild(p);

  const main = createElement('div', {
    class: ['main-container'],
  });

  const mainImage = createElement('img', {
    class: ['main-home-image'],
    src: mainImg,
  });

  const text = createElement('div', {
    class: ['main-info'],
  });

  const title = createElement('h1', {
    class: ['title'],
    textContent: 'INFORMACION PODEROSA SOBRE DE SU EQUIPO',
  });

  const desc = createElement('p', {
    class: ['desc'],
    textContent:
      'Planificación de proyectos y seguimiento del tiempo para equipos ágiles',
  });

  const btn = createElement('button', {
    id: 'cta-home',
    class: ['cta', 'cta-home'],
    textContent: 'Login ',
  });

  btn.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(login());
  });

  text.appendChild(title);
  text.appendChild(desc);
  text.appendChild(btn);

  main.appendChild(mainImage);
  main.appendChild(text);

  el.appendChild(nav);
  el.appendChild(main);

  return el;
}

export { home };
