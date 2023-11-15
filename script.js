const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var amplitude = 50;
var frequency = 0.05;
var phase = 0;
ctx.lineWidth = 0,2;

var wiggleAmplitude = 5;


diam = 6

function Onda() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.moveTo(0, canvas.height / 2); //mover para a posição central no eixo do y

    amplitude += 0.5 * wiggleAmplitude - wiggleAmplitude / 2;

    for(var x = 0; x < canvas.width; x++) {
        
        var y = amplitude * Math.sin(frequency * x + phase);
        console.log(y)

        if(y>0){ //metade de baixo
            ctx.fillStyle = "red";
            if(y>0 && y<10){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y>10 && y<20){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-0.5, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y>20 && y<30){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y>30 && y<40){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1.5, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y>40 && y<50){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-2, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
        }

        if(y<0){ //metade do topo
            ctx.fillStyle = "blue";
            if(y<0 && y>-10){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y<-10 && y>-20){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-0.5, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y<-20 && y>-30){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y<-30 && y>-40){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-1.5, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }
            if(y<-40 && y>-50){
                ctx.beginPath();
                ctx.arc(x, y + canvas.height / 2, diam-2, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.fill();
            }

        }

    }


    phase += 0.05;

    requestAnimationFrame(Onda);

}

Onda()

