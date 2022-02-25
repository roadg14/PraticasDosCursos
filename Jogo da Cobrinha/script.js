let canvas = document.getElementById("Cobrão");
let context = canvas.getContext("2d");
let box = 32;

function criarBG() {
    context.fillStyle = "Lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();