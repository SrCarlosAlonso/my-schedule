import { domElements } from './domElements.js'
const { scheduleWrapper } = domElements;

export const alert = (type, message) => {

  // Eliminamos la alerta si existe
  document.querySelector('#alert')?.remove();

  const alert = document.createElement('div');
  alert.id = 'alert';
  alert.classList.add(type);

  const messageParagraph = document.createElement('p');
  messageParagraph.textContent = message;

  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.id = 'alert-close';
  closeButton.setAttribute('aria-label', 'Close alert');

  const closeIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  closeIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  closeIcon.setAttribute('fill', 'none');
  closeIcon.setAttribute('stroke', 'currentColor');
  closeIcon.setAttribute('stroke-linecap', 'round');
  closeIcon.setAttribute('stroke-linejoin', 'round');
  closeIcon.setAttribute('stroke-width', '2');
  closeIcon.setAttribute('viewBox', '0 0 24 24');

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', 'M18 6 6 18M6 6l12 12');
  closeIcon.appendChild(path);

  closeButton.appendChild(closeIcon);

  closeButton.addEventListener('click', () => {
    alert.remove();
  });

  alert.appendChild(messageParagraph);
  alert.appendChild(closeButton);
  scheduleWrapper.insertAdjacentElement('afterend', alert);

  setTimeout(() => {
    const alert = document.querySelector('#alert');
    if (alert) {
      alert.remove();
    }
  }, 3000);
};
