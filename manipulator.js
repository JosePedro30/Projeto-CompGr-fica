var Range1 = document.getElementById("onda1");
var Range2 = document.getElementById("onda2");
var Range3 = document.getElementById("onda3");

Range1.addEventListener("input",function(){
    var value = document.getElementById("onda1").value
    console.log(value)
    circle.amplitude = value
},false);

Range2.addEventListener("input",function(){
    var value = document.getElementById("onda2").value
    console.log(value)
    circle2.amplitude = value
},false);

Range3.addEventListener("input",function(){
    var value = document.getElementById("onda3").value
    console.log(value)
    circle3.amplitude = value
},false);



var Check1 = document.getElementById("check1");
var Check2 = document.getElementById("check2");
var Check3 = document.getElementById("check3");

Check1.addEventListener("change",function(){
    if(this.checked){
        console.log("check")
        circle.amplitude = 1
        circle.start = 135
    }else{
        console.log("not check")
        circle.amplitude = 0
        circle.start = 150
    }
},false);

Check2.addEventListener("input",function(){
    if(this.checked){
        console.log("check")
        circle2.amplitude = circle.amplitude + 1
        circle2.start = 115
    }else{
        console.log("not check")
        circle2.amplitude = 0
        circle2.start = 150
    }
},false);

Check3.addEventListener("input",function(){
    if(this.checked){
        console.log("check")
        circle3.amplitude = circle2.amplitude + 1
        circle3.start = 95
    }else{
        console.log("not check")
        circle3.amplitude = 0
        circle3.start = 150
    }
},false);