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

export const entryRowValues = () => {
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
        return console.log('Row is valid', rowValues);

      } else {
        console.log('Row is invalid');
      }
    });
  });

}
// Ahora cada row se debe guardar en un array solo si es valido, sino es valido no se guarda
//  Pero supongo que cada vez que guarda primero hace una copia del objeto lo borrar y luego lo guarda porque sino va a borrar todo el rato el
