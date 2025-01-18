import { generateID } from '../utils/helpers.js';
import { domElements } from '../utils/domElements.js';
import { clientes } from '../utils/formatClient.js';
const { tbodyEntries } = domElements;

export const defaultEntry = () => {
  const tr = document.createElement('tr');
  tr.classList.add('entry-row');
  tr.id = generateID();

  const tdClient = document.createElement('td');
  const inputClient = document.createElement('select');
  inputClient.classList.add('entry-input');
  tdClient.appendChild(inputClient);

  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'Selecciona un cliente';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  inputClient.appendChild(defaultOption);

  // TODO - Create the dropdown options.
  clientes.forEach(cliente => {
    const option = document.createElement('option');
    option.value = cliente.id;
    option.textContent = cliente.name;
    inputClient.appendChild(option);
  });

  const tdTaks = document.createElement('td');
  const inputTask = document.createElement('input');
  inputTask.type = 'text';
  inputTask.classList.add('entry-input');
  tdTaks.appendChild(inputTask);

  const tdStart = document.createElement('td');
  const inputStart = document.createElement('input');
  inputStart.id = `time-start`,
  inputStart.type = 'time';
  inputStart.classList.add('entry-input');
  tdStart.appendChild(inputStart);

  const tdEnd = document.createElement('td');
  const inputEnd = document.createElement('input');
  inputEnd.id = `time-end`,
  inputEnd.type = 'time';
  inputEnd.classList.add('entry-input');
  tdEnd.appendChild(inputEnd);

  const tdMinutes = document.createElement('td');
  const textMinutes = document.createTextNode('0');
  tdMinutes.appendChild(textMinutes);

  const tdHours = document.createElement('td');
  const textHours = document.createTextNode('0');
  tdHours.appendChild(textHours);

  tr.appendChild(tdClient);
  tr.appendChild(tdTaks);
  tr.appendChild(tdStart);
  tr.appendChild(tdEnd);
  tr.appendChild(tdMinutes);
  tr.appendChild(tdHours);
  tbodyEntries.appendChild(tr);
};
