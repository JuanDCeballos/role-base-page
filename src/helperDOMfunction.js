function createElement(type, attributes) {
  var element = document.createElement(type);
  for (var key in attributes) {
    if (key == 'class') {
      element.classList.add.apply(element.classList, attributes[key]);
    } else {
      element[key] = attributes[key];
    }
  }
  return element;
}

export { createElement };
