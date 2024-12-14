/** Show the "exercise 5" **/
function showExercise5alumno() {
    document.getElementsByClassName('row')[0].style.display = 'none';
    document.getElementsByClassName('row')[1].style.display = 'none';
    document.getElementsByClassName('row')[2].style.display = 'none';
    document.getElementsByClassName('row')[3].style.display = 'none';
    document.getElementsByClassName('row')[4].style.display = 'none';
    document.getElementsByClassName('row')[5].style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function () {
    let result = document.getElementById("result");
    let clear = document.getElementById("clear");
    let equals = document.getElementById("equals");
    let mod = document.getElementById("mod");

    let buttons = document.querySelectorAll(".flex-container > div:not(#clear):not(#equals):not(#mod)");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            result.textContent += button.textContent;
        });
    });

    //Lo que sale en "textContent" luego de picar el igual "=". En este caso no sale nada.
    clear.addEventListener("click", function () {
        result.textContent = "";
    });

    //Aqui salta el mensaje de "ERROR", no como alerta de windows, sino en la misma calculadora(en el recuadro de los resultados).
    equals.addEventListener("click", function () {
        try {
            result.textContent = eval(result.textContent);
        } catch (error) {
            result.textContent = "Error";
        }
    });

    //Estos calcula el modulo
    mod.addEventListener("click", function () {
        result.textContent += " MOD ";
    });
});