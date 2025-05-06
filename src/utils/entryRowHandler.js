import { alert } from './showAlert.js'

export const saveRowAsTask = (dayTaks, row) => {
  getTimer(row);

  const children = Array.from(row.children);
  const id = row.id;
  const rowValues = {
    id: `row-${id}`,
    cliente: children[0].querySelector('.entry-input').value,
    tarea: children[1].querySelector('.entry-input').value,
    inicio: conversor(children[2].querySelector('.entry-input').value) || '00:00',
    fin: conversor(children[3].querySelector('.entry-input').value) || '00:00',
    duracion: children[4].textContent,
    hora: children[5].textContent,
  };

  if (
    rowValues.cliente !== '' &&
    rowValues.tarea !== '' &&
    rowValues.inicio !== '00:00' &&
    rowValues.fin !== '00:00' &&
    rowValues.duracion !== '0' &&
    rowValues.hora !== '0'
  ) {
    dayTaks.push(rowValues);
    console.log('From getValueRow', dayTaks);
  }

  return dayTaks;
};

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
