/** Show the "exercise 2" **/
function showExercise2admin() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'flex';
    document.getElementsByClassName('row')[3].style.display = 'none';
    document.getElementsByClassName('row')[4].style.display = 'none';
    document.getElementsByClassName('row')[5].style.display = 'none';
}

/* Esto se va a guardar para el perfil administrador */

/*
document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const newSubject = prompt('Ingrese la nueva materia:');
            if (newSubject) {
                cell.textContent = newSubject;
            }
        });
    });
});
*/