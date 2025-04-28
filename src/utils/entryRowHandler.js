import { alert } from './showAlert.js'

const getTimer = (row) => {
  const inputTimeStart = row.querySelector('input#time-start');
  const inputTimeEnd = row.querySelector('input#time-end');
  const printMinutes = row.querySelector('td:nth-child(5)');
  const printHours = row.querySelector('td:nth-child(6)');

  const handleTimeChange = () => {
    const TS = conversor(inputTimeStart.value);
    const TE = conversor(inputTimeEnd.value);

    if (TS > TE) return alert('error', 'The end time must be greater than the start time');


    const timeMinutes = TE - TS;
    const timeHours = (timeMinutes / 60).toFixed(2);

    printMinutes.textContent = timeMinutes;
    printHours.textContent = timeHours;

  };
  inputTimeStart.addEventListener('change', handleTimeChange);
  inputTimeEnd.addEventListener('change', handleTimeChange);
};

function conversor(hora) {
  const [h, m] = hora.split(':').map(Number);
  return h * 60 + m;
}

// TODO - It's not respecting the use of AM/PM. We need use a 24 hours format?.

let allDayEntries = {};

export const getEntryRowValues = () => {
  const allRows = document.querySelectorAll('.entry-row');

  allRows.forEach(row => {
    const id = row.id;
    getTimer(row);

    row.addEventListener('change', (e) => {

      const row = document.getElementById(id);
      const rowHijos = Array.from(row.children)

      const rowValues = {
        id: `row-${id}`,
        cliente: rowHijos[0].querySelector('.entry-input').value,
        tarea: rowHijos[1].querySelector('.entry-input').value,
        inicio: conversor(rowHijos[2].querySelector('.entry-input').value) || '00:00',
        fin: conversor(rowHijos[3].querySelector('.entry-input').value) || '00:00',
        duracion: rowHijos[4].textContent,
        hora: rowHijos[5].textContent,
      }
      if (
        rowValues.cliente !== '' &&
        rowValues.tarea !== '' &&
        rowValues.inicio !== '00:00' &&
        rowValues.fin !== '00:00' &&
        rowValues.duracion !== '0' &&
        rowValues.hora !== '0'
      ) {
        return saveEntries(rowValues);
      }
    });
  });

}

function saveEntries(data) {
  let newEntry = {
    id: data.id,
    cliente: data.cliente,
    tarea: data.tarea,
    inicio: data.inicio,
    fin: data.fin,
    duracion: data.duracion,
    hora: data.hora
  };

  allDayEntries[data.id] = newEntry;
  console.log(allDayEntries)
  return allDayEntries;
}

// Ya tenemos el objeto AllDayEntries con todas las entradas del día, ahora quiero que ese objeto se guarde con el ID de la fecha, con campo de semana, y dia por lo que a la funcion getEntryRowsValues (llamarla de otra forma) tenemos que pasarle tambien la informacion de Date que se esta usando.
// Por otra parte el date esta2 mal.
