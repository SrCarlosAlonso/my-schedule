import { alert } from './showAlert.js'

export const entryRowValues = () => {
  const allRows = document.querySelectorAll('.entry-row');

  allRows.forEach(row => {
    const id = row.id;

    row.addEventListener('change', (e) => {

      const row = document.getElementById(id);
      const rowHijos = Array.from(row.children)

      const rowValues = {
        id: `row-${id}`,
        cliente: rowHijos[0].querySelector('.entry-input').value,
        tarea: rowHijos[1].querySelector('.entry-input').value,
        inicio: conversor(rowHijos[2].querySelector('.entry-input').value),
        fin: conversor(rowHijos[3].querySelector('.entry-input').value),
        duracion: rowHijos[4].value,
        hora: rowHijos[5].value,
      }
      console.log(rowValues)

    });
    getTimer(row);
  });
}

const getTimer = (row) => {
  const inputTimeStart = row.querySelector('input#time-start');
  const inputTimeEnd = row.querySelector('input#time-end');
  const printMinutes = row.querySelector('td:nth-child(5)');
  const printHours = row.querySelector('td:nth-child(6)');

  const handleTimeChange = () => {
    const TS = conversor(inputTimeStart.value);
    const TE = conversor(inputTimeEnd.value);

    if ( TS > TE ) return alert('error', 'The end time must be greater than the start time');


    const timeMinutes = TE - TS;
    const timeHours = (timeMinutes / 60).toFixed(2);

    printMinutes.textContent = timeMinutes;
    printHours.textContent = timeHours;

    console.log({ start: inputTimeStart.value, end: inputTimeEnd.value, minutes: timeMinutes, hours: timeHours });
  };

  inputTimeStart.addEventListener('change', handleTimeChange);
  inputTimeEnd.addEventListener('change', handleTimeChange);
};

function conversor(hora) {
  const [h, m] = hora.split(':').map(Number);
  return h * 60 + m;
}

