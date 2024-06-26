window.addEventListener('load', bindEvents);
function bindEvents(){
var buttons = document.getElementsByTagName('button');
console.log(buttons);
for(var i = 0; i<buttons.length; i++){
    var currentButton = buttons[i];
    currentButton.addEventListener('click', printXorZero); // Event Binding
}
}
// Maintain a Count , to check if count goes
// > 4 then check game over conditions
function isGameOver(){

    // In game over conditions
    // 1. Row values are same
    // 2. Cols Values are same
    // 3. Diagonal values are same
}
function reset(){
    
}
var flag = true;
function printXorZero(){
    if(this.innerText.trim().length ==0){
    var buttonValue = flag?"X":"0";
    this.innerText = buttonValue; // <button>X</button>
    flag = !flag;
    }
    //alert("U Click on button");
}

