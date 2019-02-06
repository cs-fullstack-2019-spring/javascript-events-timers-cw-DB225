// Create a button with the text Start countdown!.
// When the User clicks the button, display a countdown sequence from 10 to LIFTOFF!!.
// Display each number during the countdown, the the word LIFTOFF.

var btnStart = document.getElementById("start");
btnStart.addEventListener("click", function (e) {
    var count = 0;
    for(var i=10; i>= count; i--){
        if(i === 0){
            console.log("LIFTOFF");
        }
        else {
            console.log(i);
        }

    }
    e.preventDefault();
});