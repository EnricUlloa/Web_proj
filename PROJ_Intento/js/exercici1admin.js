/** Show the "exercise 1" **/
function showExercise1admin() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'flex';
    document.getElementsByClassName('row')[2].style.display = 'none';
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