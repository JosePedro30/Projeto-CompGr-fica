const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var amplitude = 50;
var frequency = 0.05;
var phase = 0;
ctx.lineWidth = 0,2;

var wiggleAmplitude = 5;


diam = 10

function Onda() {
    ctx.moveTo(0, canvas.height / 2); //mover para a posição central

    amplitude += 0.5 * wiggleAmplitude - wiggleAmplitude / 2;

    for(var x = 0; x < canvas.width - (canvas.width / 2); x++) {
        
        var y = amplitude * Math.sin(frequency * x + phase);

        if(y>0){ //metade de baixo
            ctx.strokeStyle = "red";
            ctx.fillStyle = "black";
            if(y>0 && y<10){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y>10 && y<20){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y>20 && y<30){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-2, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y>30 && y<40){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-3, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y>40 && y<50){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-4, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }

        if(y<0){ //metade do topo
            if(y<0 && y>-10){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y<-10 && y>-20){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y<-20 && y>-30){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-2, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y<-30 && y>-40){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-3, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            if(y<-40 && y>-50){
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-4, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }

        }

    }


    phase += 0.05;

    requestAnimationFrame(Onda);

}

Onda()

