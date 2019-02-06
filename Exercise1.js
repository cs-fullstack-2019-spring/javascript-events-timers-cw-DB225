// Create a simple form with a single checkbox and the message DON'T CLICK THIS CHECKBOX!.
// When the User tries to click checkbox, display a message, I TOLD YOU NOT TO CLICK THIS!!!
var typer = false;
var myCheckBox = document.getElementById("check");

myCheckBox.addEventListener("click", function(e){
   if(typer){
       typer = false;
   }
   else{
       alert("I TOLD YOU NOT TO CLICK THIS!!!");
       typer = true;
   }
    e.preventDefault();
});