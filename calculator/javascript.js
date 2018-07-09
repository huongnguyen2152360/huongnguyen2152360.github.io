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
        if (input.value[i] == "π") {
            if (input.value.length == 1) {
                var output = input.value.replace(/π/g,3.14159265);
            }
            else {var output = input.value.replace(/π/g,'*3.14159265');}
        }
        // if (input.value[i] == "(") {
        //     input.value[input.value.length -1] += ")";
        // }
        // Cho xuong cuoi, truoc khi thuc hien eval
        if(input.value[i] == "√(") {
            var output = input.value.replace(/√/g,'Math.sqrt()');
        }
    }
    if (input.value[input.value.length -1] == "." || operators.indexOf(input.value[input.value.length -1]) > -1) {
    input.value = input.value.replace(/[.+-*/]/g,'');
    }
    for (var i = 0; i < input.value.length; i++) {
        if (input.value[i] == "(") {
            input.value[input.value.length - 1] + ")";
        }
    }
    input.value = eval(output);
}

function clearall(a) {
    input.value = "";
}

function clearInputValue(a){
    input.value = input.value.substr(0, input.value.length - 1);
}
function absolute(a) {
    input.value = Math.abs(input.value);
}
function ln(a) {
    input.value = Math.log(input.value);
}
function percentagebtn(a) {
    input.value = input.value/100;
}
function pibtn(a) {
    input.value += a.innerText;
}
function squareRoot(a) {
    input.value += a.innerText + "(";
}