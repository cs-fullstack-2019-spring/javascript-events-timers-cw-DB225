// Create a simple form with a textarea, a hidden message with the text Start typing, and a button that says Allow Typing.
// When the page initially displays, the textarea should be disabled, and the message hidden.
// When the User clicks the button, display the hidden message, and enable the textarea so you can type into it.
// Clicking the button a second time should hide the hidden message and disable the textarea.
// Each press of the button should toggle the behavior.
var typing = false;

var buttonClick = document.getElementById("clickIn");
var areaClick = document.getElementById("areaType");
var Inner = document.getElementById("inner");

buttonClick.addEventListener("click",function(event){
   if (typing){
       areaClick.setAttribute("disabled", "");
       areaClick.value="";
       typing = false;
   }
   else{
       areaClick.removeAttribute("disabled");
       areaClick.innerText = "";
       Inner.innerText = "Write Here...";
       typing = true;
   }
});