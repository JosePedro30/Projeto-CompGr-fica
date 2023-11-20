const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const circle = {
    x: 0,
    y: canvas.height / 2,
    amplitude: 50,
    angle: 0,
    phase: 0,
    diam: 10,
};

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circle.x++;  // Movendo o círculo para a direita

    // Atualizando a posição y do círculo com uma onda senoidal
    circle.y = canvas.height / 2 + circle.amplitude * Math.sin(circle.angle + circle.phase);
    circle.angle += 0.1;

    // Desenhando o círculo
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.diam, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // Verificando se o círculo ultrapassou o limite direito do canvas
    if (circle.x > canvas.width + circle.diam) {
        circle.x = -circle.diam;  // Movendo o círculo de volta para o início
    }

    requestAnimationFrame(render);
}

// Iniciando a animação
render();
