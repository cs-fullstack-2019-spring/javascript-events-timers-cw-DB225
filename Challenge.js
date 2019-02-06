// CHALLENGE:
// Animate the included sprite images
var Intvl = window.setInterval(myFunc, 500);
var btn = document.getElementById("move");
var startButton = document.getElementById("stop");
var x = 1;

function myFunc() {

    btn.setAttribute("src","guy"+x+".png");
    x++;
    if (x === 9){
        // clearInterval(Intvl);
        x=1;
    }
}
 // I will try later to fix the execution through the button