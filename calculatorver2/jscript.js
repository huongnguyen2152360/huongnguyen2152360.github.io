const input = document.getElementById("inputmath");
const operators = ["+", "-", "x", "÷"];

function numb(n) {
    input.value += n.innerText;
}
function clearAll(n) {
    input.value = "";
}
function clearBtn(n) {
    input.value = input.value.substr(0, input.value.length - 1);
}
function percentageBtn(n) {
    input.value = input.value / 100;
}
function squareBtnn(n) {
    input.value = (input.value) ** 2;
}
function equalBtnn(n) {
    var output = input.value.replace(/x/g, '*').replace(/÷/g, '/');
    if (input.value[input.value.length - 1] == "." || operators.indexOf(input.value[input.value.length - 1]) > -1) {
        input.value.replace(/[.+-*/]/g, '');
    }
    console.log(output);
    input.value = eval(output);
}