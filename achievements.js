// Get a reference to the button
let btn1 = document.getElementById("b1");
let btn2 = document.getElementById("b2");
let btn3 = document.getElementById("b3");

// Add an event handler for the click event
btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
btn3.addEventListener("click", button3);

function clear(){
    document.getElementById("c1").style.opacity = "0%";
    document.getElementById("c2").style.opacity = "0%";
    document.getElementById("c3").style.opacity = "0%";
    document.getElementById("g").style.opacity = "0%";
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