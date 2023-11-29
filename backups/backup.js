const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var amplitude = 50;
var frequency = 0.05;
var phase = 0;
ctx.lineWidth = 0.2;

var wiggleAmplitude = 5;


let circle = {
    amplitude: 20, angle: 0, x: 0, y:0, diam: 2, phase: 0
}

let circle2 = {
    amplitude: 30, angle: 0, x: 0, y:0, diam: 5, phase: Math.PI/2
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    circle.x++
    circle.y = canvas.height/2 + circle.amplitude * Math.sin(circle.angle + circle.phase );
    circle.angle += 0.1

    ctx.beginPath()
    ctx.arc(circle.x, circle.y , circle.diam, 0, 2 * Math.PI);
    ctx.fill()


    // circle2.x++
    // circle2.y = canvas.height/2 + circle2.amplitude * Math.sin(circle2.angle  + circle2.phase);
    // circle2.angle += 0.1

    // ctx.beginPath()
    // ctx.arc(circle2.x, circle2.y , circle2.diam, 0, 2 * Math.PI);
    // ctx.fill()


    

    requestAnimationFrame(render);

}

render()

