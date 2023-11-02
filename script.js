const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var amplitude = 50;
var frequency = 0.05;
var phase = 0;
ctx.lineWidth = 0,2;

var wiggleAmplitude = 5;

function Onda() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.moveTo(0, canvas.height / 2); //mover para a posição central no eixo do y

    amplitude += 0.5 * wiggleAmplitude - wiggleAmplitude / 2;

    for(var x = 0; x < canvas.width; x++) {
        
        var y = amplitude * Math.sin(frequency * x + phase);
        console.log(y)

        if(y>0){
            ctx.fillStyle = "red";
            ctx.beginPath();
            ctx.arc(x, y + canvas.height / 2, 5, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

        if(y<0){
            ctx.fillStyle = "blue";
            ctx.beginPath();
            ctx.arc(x, y + canvas.height / 2, 5, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
        }

    }


    phase += 0.05;

    requestAnimationFrame(Onda);

}

Onda()

