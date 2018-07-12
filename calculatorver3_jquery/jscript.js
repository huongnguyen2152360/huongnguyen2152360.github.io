const input = $("#inputmath");
const changeTheme = $('#changeBtn');
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
function changeThemeBtn() {
    $('input').css('background','linear-gradient(to bottom right, #dcdffc 0%, #08105a 100%)');
    $('.wrap').css('border','0.5px solid rgba(126,137,244,0.4)');
    $('#changeThemeBtn').css('border','0.5px solid rgba(126,137,244,0.4)');
    $('#changeThemeBtn').css('box-shadow','0px 8px 16px rgba(204,209,251,0.9)');
    $('.container').css('box-shadow','0px 8px 16px rgba(204,209,251,0.9)');
    $('.button-equal button').css('color','#1020b8');
}
