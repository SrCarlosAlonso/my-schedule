document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  initializeApp();
});

const tbodyEntries = document.querySelector('#schedule-entries');
const defaulRows = 5;

const submitButton = document.querySelector('#schedule-submit');

const initializeApp = () => {
  console.log('App has been initialized');

  deleteChild(tbodyEntries);

  for (let i = 0; i < defaulRows; i++) {
    defaultEntry();
  }

  const allRows = document.querySelectorAll('.entry-row');
  allRows.forEach(row => {
    console.log(row.id);
    // ? - When the input change, the object "myScheduleStorage" should be updated with the new values. But the object it's not saved in local storage yet.
    document.addEventListener('input', (event) => {
      console.log(event.target.value);
    });
  });
  // ? - It's only when the button is clicked that the object "myScheduleStorage" is saved in local storage.
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button has been clicked');
    saveSchedule(myScheduleStorage);
  });


};

// Helpers
const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const defaultEntry = () => {
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

const generateID = () => {
  return Math.floor(Math.random() * 1000);
}

// ! - This is the object that should be saved in local storage, confirm if it's correct.
// ? - Storage example
const myScheduleStorage = {
  id: 8112025,
  semana: 2,
  mes: 1,
  dia: 'lunes',
  entries: [
    {
      id: 1,
      client: 'Cliente 1',
      task: 'Tarea 1',
      start: '09:00',
      end: '10:00',
      minutes: 60,
      hours: 1
    }
  ]
}
// TODO - This function should save the object "myScheduleStorage" in local storage.
const saveSchedule = (schedule) => {
  console.log(schedule);
};
