document.addEventListener('DOMContentLoaded', (evento) => {

    let botao = document.getElementById("play");
    let musica = document.getElementById("musica");

    document.addEventListener('click', (evento) => {
        if (musica.paused) {
            musica.play().catch(() => {
            });
        }
    });

    botao.addEventListener('mouseover', (evento) => {
        botao.textContent = "BOA SORTE!";
    });

    botao.addEventListener('mouseout', (evento) => {
        botao.textContent = "JOGAR";
    });

    botao.addEventListener('click', (evento) => {
        window.location.href = "jogo.html";
    });

});