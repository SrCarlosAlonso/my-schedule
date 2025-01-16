import { generateID } from '../utils/helpers.js';
import { domElements } from '../utils/domElements.js';
const { tbodyEntries } = domElements;

export const defaultEntry = () => {
  const tr = document.createElement('tr');
  tr.classList.add('entry-row');
  tr.id = generateID();

  const tdClient = document.createElement('td');
  const inputClient = document.createElement('input');
  inputClient.type = 'text';
  inputClient.classList.add('entry-input');
  tdClient.appendChild(inputClient);

  const tdTaks = document.createElement('td');
  const inputTask = document.createElement('input');
  inputTask.type = 'text';
  inputTask.classList.add('entry-input');
  tdTaks.appendChild(inputTask);

  const tdStart = document.createElement('td');
  const inputStart = document.createElement('input');
  inputStart.type = 'time';
  inputStart.classList.add('entry-input');
  tdStart.appendChild(inputStart);

  const tdEnd = document.createElement('td');
  const inputEnd = document.createElement('input');
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
