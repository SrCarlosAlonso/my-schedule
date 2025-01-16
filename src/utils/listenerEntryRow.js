export const entryRowValues = () => {
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
