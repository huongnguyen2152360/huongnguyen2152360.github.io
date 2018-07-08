// Get all buttons
// var allButtons = document.querySelectorAll(".row button");
// var allButtonsText = allButtons.innerText;

const input = document.getElementById("inputmath");
const operators = ["+","-","x","÷"];

function numb(n) {
    input.value += n.innerText;
}
function equalBtnn(m) {
    for (var i = 0; i < input.value.length; i++) {
        if (input.value[i] == "x") {
            var output = input.value.replace(/x/g, '*');
        }
        if (input.value[i] == "÷") {
            var output = input.value.replace(/÷/g, '/');
        }
    }
    if (input.value[input.value.length -1] == "." || operators.indexOf(input.value[input.value.length -1]) > -1) {
        
    }
    input.value = eval(output);
}

function clearall(a) {
    input.value = "";
}

function clearInputValue(a){
    input.value = input.value.substr(0, input.value.length - 1);
}
