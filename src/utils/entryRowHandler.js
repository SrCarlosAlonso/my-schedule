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
  const inputTimeEnd   = row.querySelector('input#time-end');
  const printMinutes   = row.querySelector('td:nth-child(5)');
  const printHours     = row.querySelector('td:nth-child(6)');

  const handleTimeChange = () => {
    const TS = inputTimeStart.value;
    const TE = inputTimeEnd.value;

    if (TS !== '' && TS !== undefined && TE !== '' && TE !== undefined) {
      calMinutes(TS, TE);
      calHhours(TS, TE);
    }
  };

  inputTimeStart.addEventListener('change', handleTimeChange);
  inputTimeEnd.addEventListener('change', handleTimeChange);

  const calMinutes = (start, end) => {
    console.log('Calculating minutes');
    console.log(start, end);
    printMinutes.textContent = 'Min...'
  }

  const calHhours = (start, end) => {
    console.log('Calculating hours');
    console.log(start, end);
    printHours.textContent = 'Hrs...'
  };
};


