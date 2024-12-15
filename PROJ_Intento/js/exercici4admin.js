/** Show the "exercise 4" **/
function showExercise4admin() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'none';
    document.getElementsByClassName('row')[3].style.display = 'none';
    document.getElementsByClassName('row')[4].style.display = 'flex';
    document.getElementsByClassName('row')[5].style.display = 'none';
}

const estudiantes = [
    { id: 1, nombre: "Juan Pérez" },
    { id: 2, nombre: "María López" },
    { id: 3, nombre: "Carlos Ruiz" }
];

function revisarLista() {
    // Mostrar la tabla de estudiantes
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';

    const tbody = document.getElementById('student-list');
    tbody.innerHTML = ''; // Limpiar cualquier dato previo

    // Generar filas para cada estudiante
    estudiantes.forEach(estudiante => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = estudiante.nombre;

        const statusCell = document.createElement('td');
        const select = document.createElement('select');
        select.className = 'status-select';
        select.innerHTML = `
            <option value="present">Present</option>
            <option value="retard">Retard</option>
            <option value="absent">Absent</option>
            <option value="justified">Absencia Justificada</option>
        `;
        select.setAttribute('data-id', estudiante.id);
        statusCell.appendChild(select);

        row.appendChild(nameCell);
        row.appendChild(statusCell);

        tbody.appendChild(row);
    });
}

function confirmarAsistencia() {
    const grupo = document.getElementById('grupo').value;
    const aula = document.getElementById('aula').value;
    const selects = document.querySelectorAll('.status-select');
    const asistencia = [];

    selects.forEach(select => {
        const id = select.getAttribute('data-id');
        const estado = select.value;
        const estudiante = estudiantes.find(e => e.id == id);
        asistencia.push({ nombre: estudiante.nombre, grupo, aula, estado });
    });

    // Mostrar resumen final
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';

    const finalList = document.getElementById('final-list');
    finalList.innerHTML = ''; // Limpiar datos previos

    asistencia.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.nombre;

        const groupCell = document.createElement('td');
        groupCell.textContent = item.grupo;

        const roomCell = document.createElement('td');
        roomCell.textContent = item.aula;

        const statusCell = document.createElement('td');
        statusCell.textContent = item.estado;

        row.appendChild(nameCell);
        row.appendChild(groupCell);
        row.appendChild(roomCell);
        row.appendChild(statusCell);

        finalList.appendChild(row);
    });

    // Actualizar llistat dinámico
    actualizarLlistat(asistencia);
}

function actualizarLlistat(asistencia) {
    document.getElementById('llistat').style.display = 'block';
    const llistatBody = document.getElementById('llistat-body');
    llistatBody.innerHTML = '';

    asistencia.forEach(item => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = item.nombre;

        const statusCell = document.createElement('td');
        statusCell.textContent = item.estado;

        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.onclick = () => editarEstado(item);
        actionCell.appendChild(editButton);

        row.appendChild(nameCell);
        row.appendChild(statusCell);
        row.appendChild(actionCell);

        llistatBody.appendChild(row);
    });
}

function editarEstado(item) {
    const nuevoEstado = prompt(`Editar estado de ${item.nombre}`, item.estado);
    if (nuevoEstado) {
        item.estado = nuevoEstado;
        actualizarLlistat([item]);
    }
}

function reiniciar() {
    document.getElementById('step-3').style.display = 'none';
    document.getElementById('llistat').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
}