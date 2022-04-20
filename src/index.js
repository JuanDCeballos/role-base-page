function component() {
  const element = document.createElement('p');

  element.textContent = 'eeee';

  return element;
}

document.body.appendChild(component());
