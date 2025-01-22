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
        inicio: rowHijos[2].querySelector('.entry-input').value,
        fin: rowHijos[3].querySelector('.entry-input').value,
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
    const TS = inputTimeStart.value;
    const TE = inputTimeEnd.value;

    if (TS !== '' && TS !== undefined && TE !== '' && TE !== undefined) {
      calTime(TS, TE, 'min');
      calTime(TS, TE, 'hour');
    }
  };

  inputTimeStart.addEventListener('change', handleTimeChange);
  inputTimeEnd.addEventListener('change', handleTimeChange);

  const calTime = (start, end, operator) => {
    const startTime = start;
    const endTime = end;
    const operationTime = operator;

    if (operationTime === 'min') {
      return console.log('Calculating minutes');
      // printMinutes.textContent = 'Min...' Problem with the scope

    } else if (operationTime === 'hour') {
      return console.log('Calculating hours');
      // printHours.textContent = 'Hrs...' Problem with the scope

    }
  };

};

// TODO - Refactor this, donr use two functions for calculate min and hours, I think with one unic fuction if we define STAR, END and OPERATION we can calculate the time in the same function and convert in the same place STRING to NUMBER.


