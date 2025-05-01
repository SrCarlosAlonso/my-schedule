import { alert } from './showAlert.js'

export const getValueRow = (date) => {
  const rows = document.querySelectorAll('.entry-row');
  //  Se tiene que sacar el Objeto fuera para no reescribirlo cada vez que se llama a la función
  const objDate = getActualDate(date);
  const id = `id-${getWeekNumber(date)}${objDate[3]}`;
  let dayTaks = {
    id: id,
    date: {
      day: objDate[2],
      month: objDate[1],
      year: objDate[3],
      week: getWeekNumber(date)
    },
    tasks: [

    ]
  };

  // Ahora tenemos que recorrer todas las filas para añadir un event listener a cada uno
  rows.forEach((row) => {
    getTimer(row);

    row.addEventListener('change', (e) => {
      saveTasks(row);
    });
  });

  function saveTasks(task) {
    const children = Array.from(task.children)
    const id = task.id;
    const rowValues = {
      id: `row-${id}`,
      cliente: children[0].querySelector('.entry-input').value,
      tarea: children[1].querySelector('.entry-input').value,
      inicio: conversor(children[2].querySelector('.entry-input').value) || '00:00',
      fin: conversor(children[3].querySelector('.entry-input').value) || '00:00',
      duracion: children[4].textContent,
      hora: children[5].textContent,
    }
    if (
      rowValues.cliente !== '' &&
      rowValues.tarea !== '' &&
      rowValues.inicio !== '00:00' &&
      rowValues.fin !== '00:00' &&
      rowValues.duracion !== '0' &&
      rowValues.hora !== '0'
    ){
      dayTaks.tasks.push(rowValues)
      // console.log('Task added:', rowValues);
      // console.log('Updated dayTaks:', dayTaks);
    }
  }
  return dayTaks;
};

const getActualDate = (date) => {
  const dateString = date.toString();
  const parts = dateString.split(" ");
  // console.log(result,parts);
  return parts;
};

const getWeekNumber = (d) => {
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = date.getUTCDay() || 7;
  date.setUTCDate(date.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
};

// TODO - It's not respecting the use of AM/PM. We need use a 24 hours format?.
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
