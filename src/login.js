import { createElement } from './helperDOMfunction';
import '../dist/style.css';
import logo from './images/logo.svg';
import { content } from './index';
import { user } from './user';
import { admin } from './admin';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import { home } from './home';

function login() {
  const el = createElement('div', {
    id: 'loginContainer',
    class: ['login-container'],
  });

  const logoImg = createElement('img', {
    class: ['logo-img'],
    src: logo,
  });

  logoImg.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(home());
  });

  const inputs = createElement('div', {
    class: ['inputs-container'],
  });

  const userLabel = createElement('label', {
    textContent: 'User',
  });

  const userInput = createElement('input', {
    type: 'text',
    class: ['user-input'],
    id: 'input-user',
  });

  const pwLabel = createElement('label', {
    textContent: 'Password',
  });

  const pwInput = createElement('input', {
    type: 'password',
    class: ['user-input'],
    id: 'input-password',
  });

  inputs.appendChild(userLabel);
  inputs.appendChild(userInput);
  inputs.appendChild(pwLabel);
  inputs.appendChild(pwInput);

  const btn = createElement('button', {
    id: 'cta-login',
    class: ['cta', 'cta-login'],
    textContent: 'Login ',
  });

  btn.addEventListener('click', () => {
    if (pwInput.value == 'Admin') {
      content.innerHTML = '';
      content.appendChild(admin());
    } else if (pwInput.value == 'User') {
      content.innerHTML = '';
      content.appendChild(user());
    }
  });

  el.appendChild(logoImg);
  el.appendChild(inputs);
  el.appendChild(btn);

  return el;
}

export { login };
