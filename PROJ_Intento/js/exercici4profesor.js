/** Show the "exercise 4" **/
function showExercise4profesor() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'none';
    document.getElementsByClassName('row')[3].style.display = 'none';
    document.getElementsByClassName('row')[4].style.display = 'flex';
    document.getElementsByClassName('row')[5].style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
    var circle = document.getElementById("circle");

    // Canviar a disc(cercle buit) quan el mouse está a dins
    circle.addEventListener("mouseover", function () {
        circle.style.backgroundColor = "black";
    });

    // Canviar a cercle(cercle omplert) quan el mouse surt
    circle.addEventListener("mouseout", function () {
        circle.style.backgroundColor = "transparent";
    });
});

function crearElements() {
    var cantidad = document.getElementById("quantitatInput").value;
    var tipo = document.getElementById("tipusInput").value;

    // Netejar el contingut existent
    var container = document.getElementById("container");
    container.innerHTML = ""; 

    for (var i = 0; i < cantidad; i++) {
        var elemento = document.createElement(tipo);
        elemento.textContent = tipo.toUpperCase() + " " + (i + 1);
        elemento.id = tipo + (i + 1);
        elemento.className = "elemento-comun";
        container.appendChild(elemento);
    }
}