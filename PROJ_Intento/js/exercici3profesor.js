/** Show the "exercise 3" **/
function showExercise3profesor() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'none';
    document.getElementsByClassName('row')[3].style.display = 'flex';
    document.getElementsByClassName('row')[4].style.display = 'none';
    document.getElementsByClassName('row')[5].style.display = 'none';
}

document.querySelector('.logout').addEventListener('click', () => {
    alert('Sessió tancada correctament!');
  });