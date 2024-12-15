/** Show the "exercise 2" **/
function showExercise2admin() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'flex';
    document.getElementsByClassName('row')[3].style.display = 'none';
    document.getElementsByClassName('row')[4].style.display = 'none';
    document.getElementsByClassName('row')[5].style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    // Botones de filtro
    const buttons = document.querySelectorAll('.buttons button');
    const rows = document.querySelectorAll('.attendance-table tbody tr');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.textContent.trim();
            rows.forEach(row => {
                const status = row.querySelector('.status').textContent.trim();
                if (filter === 'Mostrar Todo' || filter === 'Mostrar Tot' || status.includes(filter)) {
                    row.style.display = ''; // Mostrar fila
                } else {
                    row.style.display = 'none'; // Ocultar fila
                }
            });
        });
    });

    // Añadir funcionalidad para cambiar estados
    rows.forEach(row => {
        const statusCell = row.querySelector('.status');
        statusCell.addEventListener('click', () => {
            const currentStatus = statusCell.textContent.trim();
            let newStatus = prompt(
                "Introduce el nuevo estado (Present, Absent, Retard, Absència Justificada):",
                currentStatus
            );

            if (newStatus) {
                newStatus = newStatus.toLowerCase();
                // Validar y actualizar clase y texto
                if (['present', 'absent', 'retard', 'absència justificada'].includes(newStatus)) {
                    statusCell.textContent = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
                    statusCell.className = `status ${newStatus.replace(' ', '').toLowerCase()}`;
                } else {
                    alert("Estado no válido");
                }
            }
        });
    });
});

function applyFiltersSe() {
    const groupInput = document.getElementById('filter-group1').value.trim().toLowerCase();
    const roomInput = document.getElementById('filter-room1').value.trim().toLowerCase();
    const rows = document.querySelectorAll('.attendance-table1 tbody tr');

    rows.forEach(row => {
      const group = row.cells[1].textContent.trim().toLowerCase();
      const room = row.cells[2].textContent.trim().toLowerCase();

      if ((groupInput === '' || group.includes(groupInput)) && (roomInput === '' || room.includes(roomInput))) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  }

  function clearFiltersSe() {
    document.getElementById('filter-group1').value = '';
    document.getElementById('filter-room1').value = '';
    const rows = document.querySelectorAll('.attendance-table1 tbody tr');

    rows.forEach(row => {
      row.style.display = '';
    });
  }