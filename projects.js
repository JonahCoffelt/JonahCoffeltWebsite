// Get a reference to the button
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");
let btn4 = document.getElementById("b4");
let btn5 = document.getElementById("b5");
let btn6 = document.getElementById("b6");
let btn7 = document.getElementById("b7");

let img1 = document.getElementById("i1");
let img2 = document.getElementById("i2");
let img3 = document.getElementById("i3");
let img4 = document.getElementById("i4");
let img5 = document.getElementById("i5");
let img6 = document.getElementById("i6");

// Add an event handler for the click event
btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
btn3.addEventListener("click", button3);
btn4.addEventListener("click", button4);
btn5.addEventListener("click", button5);
btn6.addEventListener("click", button6);
btn7.addEventListener("click", reset);

img1.addEventListener("click", button1);
img2.addEventListener("click", button2);
img3.addEventListener("click", button3);
img4.addEventListener("click", button4);
img5.addEventListener("click", button5);
img6.addEventListener("click", button6);

function clear(){
    document.getElementById("c1").style.opacity = "0%";
    document.getElementById("c2").style.opacity = "0%";
    document.getElementById("c3").style.opacity = "0%";
    document.getElementById("c4").style.opacity = "0%";
    document.getElementById("c5").style.opacity = "0%";
    document.getElementById("c6").style.opacity = "0%";
    document.getElementById("g").style.opacity = "0%";
}

function reset() {
    clear()
    document.getElementById("g").style.opacity = "100%";
}

function button1(){
    clear()
    document.getElementById("c1").style.opacity = "100%";
}
function button2(){
    clear()
    document.getElementById("c2").style.opacity = "100%";
}
function button3(){
    clear()
    document.getElementById("c3").style.opacity = "100%";
}
function button4(){
    clear()
    document.getElementById("c4").style.opacity = "100%";
}
function button5(){
    clear()
    document.getElementById("c5").style.opacity = "100%";
}
function button6(){
    clear()
    document.getElementById("c6").style.opacity = "100%";
}
