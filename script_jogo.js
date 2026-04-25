document.addEventListener("DOMContentLoaded", function () {

    let cartas = document.querySelectorAll(".carta");
    let tabuleiro = document.querySelector(".tabuleiro");
    let musica = document.getElementById("musica");

    let primeira = null;
    let segunda = null;

    document.onclick = function () {
        musica.play();
        document.onclick = null;
    };

    let lista = Array.from(cartas);
    lista.sort(function () {
        return Math.random() - 0.5;
    });

    for (let i = 0; i < lista.length; i++) {
        tabuleiro.appendChild(lista[i]);
    }

    for (let i = 0; i < cartas.length; i++) {

        cartas[i].addEventListener("mousedown", (evento) => {
            cartas[i].style.transform = "scale(0.9)";
        });

        cartas[i].addEventListener("mouseup", (evento) => {
            cartas[i].style.transform = "scale(1)";
        });

        cartas[i].addEventListener("mouseleave", (evento) => {
            cartas[i].style.transform = "scale(1)";
        });

        cartas[i].onclick = function () {

            if (cartas[i] === primeira || cartas[i] === segunda) {
                return;
            }

            cartas[i].classList.add("virada");

            if (primeira === null) {
                primeira = cartas[i];
            } else {
                segunda = cartas[i];

                setTimeout(function () {

                    if (primeira.dataset.valor !== segunda.dataset.valor) {
                        primeira.classList.remove("virada");
                        segunda.classList.remove("virada");
                    }

                    primeira = null;
                    segunda = null;

                }, 800);
            }
        };
    }

});