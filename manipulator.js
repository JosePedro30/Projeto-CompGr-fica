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
        circle.start = 600
    }else{
        console.log("not check")
        circle.amplitude = 0
        circle.start = 800
    }
},false);

Check2.addEventListener("input",function(){
    if(this.checked){
        console.log("check")
        circle2.amplitude = circle.amplitude + 1
        circle2.start = 500
    }else{
        console.log("not check")
        circle2.amplitude = 0
        circle2.start = 800
    }
},false);

Check3.addEventListener("input",function(){
    if(this.checked){
        console.log("check")
        circle3.amplitude = circle2.amplitude + 1
        circle3.start = 400
    }else{
        console.log("not check")
        circle3.amplitude = 0
        circle3.start = 800
    }
},false);



var Icon = document.getElementById("SunIcon");
var activeIcon = "sun"
var Cloud = document.getElementById("Cloud");
var onda1 = document.getElementById("onda1")
var onda2 = document.getElementById("onda2")
var onda3 = document.getElementById("onda3")

Icon.addEventListener("click",function(){
    if(activeIcon == 'sun'){
        console.log("teste")
        Icon.src = "./assets/rain.svg"
        document.body.style.backgroundImage = "url('/assets/rainbeach.jpg')";
        Cloud.style.display = "block"
        activeIcon = "rain"
        circle.amplitude = 40
        circle2.amplitude = 25
        circle3.amplitude = 50
        onda1.value = 40
        onda2.value = 25
        onda3.value = 50
    }else{
        console.log("teste2")
        Icon.src = "./assets/sun.svg"
        document.body.style.backgroundImage = "url('/assets/beach.jpg')";
        Cloud.style.display = "none"
        activeIcon = "sun"
        circle.amplitude = 5
        circle2.amplitude = 10
        circle3.amplitude = 15
        onda1.value = 5
        onda2.value = 10
        onda3.value = 15
    }
});