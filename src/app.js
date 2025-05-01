import { generateDateValue, dateObj, printDate } from './utils/generateDate.js';
import { defaultEntry } from './components/defaulEntry.js';
import { getValueRow } from './utils/entryRowHandler.js';
import { deleteChild } from './utils/helpers.js';
import { alert } from './utils/showAlert.js'

import { domElements } from './utils/domElements.js'
const { tbodyEntries, defaulRows, dateValue, submitButton } = domElements;

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
  getEntryRowValues();

  // #4 - Listener for the submit button, to save the data.
  // * - It's only when the button is clicked that the object "myScheduleStorage" is saved in local storage.
  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Button has been clicked');
    // TODO - Valide content before saving.
    saveSchedule(myScheduleStorage);
    alert('success', 'Schedule saved successfully');
  });

};

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
