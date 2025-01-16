document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded');
  initializeApp();
});
// * - DOM Elements
const tbodyEntries = document.querySelector('#schedule-entries');
const submitButton = document.querySelector('#schedule-submit');

const weekValue = document.querySelector('#timer-week');
const monthValue = document.querySelector('#timer-month');
const dayValue = document.querySelector('#timer-day');
const dateValue = document.querySelector('#timer-date');
console.log(weekValue, monthValue, dayValue, dateValue)

const dateObj = {};

const defaulRows = 5;

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

const initializeApp = () => {
  console.log('App has been initialized');
  // #0 - Dafault date is today
  const date = new Date();
  generateDateValue(date);
  printDate(dateObj);

  // #1 - Delete all the rows from the table.
  deleteChild(tbodyEntries);

  // #2 - Create the default rows.
  for (let i = 0; i < defaulRows; i++) {
    defaultEntry();
  }

  // #3 - Listeners for the rows Entrys than whe generated.
  // * - Collect the values from the rows before to save them in storage.
  entryRowValues();

  // #4 - Listener for the submit button, to save the data.
  // * - It's only when the button is clicked that the object "myScheduleStorage" is saved in local storage.
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button has been clicked');
    // TODO - Valide content before saving.
    saveSchedule(myScheduleStorage);
  });

};

// Functions
const generateDateValue = (date) => {
  const monthsName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const daysName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  const monthNum = date.getMonth()
  const dayWeek = date.getDay();

  const getWeekNumber = (inputDate) => {
    const firstJan = new Date(inputDate.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((inputDate - firstJan + 86400000) / 86400000);
    const firstWeekDay = firstJan.getDay() || 7;
    const adjustedDate = dayOfYear + (firstWeekDay <= 4 ? firstWeekDay - 1 : firstWeekDay - 8);
    return Math.ceil(adjustedDate / 7);
  };
  const weekNum = getWeekNumber(date);

  dateObj.moth = monthsName[monthNum],
  dateObj.day = daysName[dayWeek],
  dateObj.week = weekNum;
  dateObj.fullDate = date.toISOString().split('T')[0]

  return dateObj;
}
const printDate = (date) => {
  console.log(date);
  dayValue.innerHTML = date.day;
  monthValue.innerHTML = date.moth;
  weekValue.innerHTML = `Semana ${date.week}`;

  dateValue.value = date.fullDate;
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

// Listeners
const entryRowValues = () => {
  const allRows = document.querySelectorAll('.entry-row');
  allRows.forEach(row => {
    const id = row.id;

    row.addEventListener('change', (e) => {

      const row = document.getElementById(id);
      const rowHijos = Array.from(row.children)

      const rowValues = {
        id: `id-${id}`,
        cliente: rowHijos[0].querySelector('.entry-input').value,
        tarea: rowHijos[1].querySelector('.entry-input').value,
        inicio: rowHijos[2].querySelector('.entry-input').value,
        fin: rowHijos[3].querySelector('.entry-input').value,
        duracion: rowHijos[4].value,
        hora: rowHijos[5].value,
      }
      console.log(rowValues)
    });

  });
}
// TODO - Listener when date change we print the new date

// Helpers
const deleteChild = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

const generateID = () => {
  return Math.floor(Math.random() * 1000);
}

// TODO - This function should save the object "myScheduleStorage" in local storage.
const saveSchedule = (schedule) => {
  console.log(schedule);
};
