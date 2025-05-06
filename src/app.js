import { generateDateValue, dateObj, printDate } from './utils/generateDate.js';
import { defaultEntry } from './components/defaulEntry.js';
import { saveRowAsTask } from './utils/entryRowHandler.js';
import { deleteChild } from './utils/helpers.js';
import { alert } from './utils/showAlert.js'

import { domElements } from './utils/domElements.js'
const { tbodyEntries, defaulRows, dateValue, submitButton } = domElements;

// Define objt for save the tasks of the day
let dayTaks = {
  id: '99',
  date: {
    day: '03',
    month: 'May',
    year: '2025',
    week: '19'
  },
  tasks: [

  ]
};

export const initializeApp = () => {
  // console.log('App has been initialized');

  // #0 - Dafault date is today
  let date = new Date();
  generateDateValue(date);

  //  If the date is changed, the date object is updated and the date is printed.
  dateValue.addEventListener('change', (e) => {
    date = new Date(dateValue.value);
    generateDateValue(date);
    getDataRows(date);
  })

  // #1 - Delete all the rows from the table.
  deleteChild(tbodyEntries);

  // #2 - Create the default rows.
  for (let i = 0; i < defaulRows; i++) {
    defaultEntry();
  }

  // #3 - Listeners for the rows Entrys than whe generated.
  // * - Collect the values from the rows before to save them in storage.
  const rows = document.querySelectorAll('.entry-row');
  rows.forEach((row) => {
    row.addEventListener('change', (e) => {
      const dayTasksCopy = dayTaks.tasks;
      row = e.target.parentElement.parentElement; // Get the row element
      dayTaks.tasks = saveRowAsTask(dayTasksCopy, row); // Get the values from the row
      console.log('From event', dayTaks);
    });
  });

  // #4 - Listener for the submit button, to save the data.
  // * - It's only when the button is clicked that the object "myScheduleStorage" is saved in local storage.
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (dayTaks.tasks.length === 0) {
      return alert('error', 'No hay tareas para guardar');
    }
    saveSchedule(dayTaks);
  });

};

// TODO - This function should save the object "myScheduleStorage" in local storage.
const saveSchedule = (dayTaks) => {
  console.log('dayTaks:', dayTaks);
};
