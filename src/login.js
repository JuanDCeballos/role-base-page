import { createElement } from './helperDOMfunction';
import '../dist/style.css';
import logo from './images/logo.svg';

function login() {
  const el = createElement('div', {
    id: 'loginContainer',
    class: ['login-container'],
  });

  const img = createElement('img', {
    class: ['logo-img'],
    src: logo,
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
    class: ['cta-login'],
    textContent: 'Login ',
  });

  el.appendChild(img);
  el.appendChild(inputs);
  el.appendChild(btn);

  return el;
}

export { login };
