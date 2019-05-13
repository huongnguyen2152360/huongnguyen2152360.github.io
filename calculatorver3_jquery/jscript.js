const operators = ["+", "-", "x", "÷"];
let content ='';
function numb(n) {
    $("#inputmath")[0].value += n.innerText;
}
function clearAll(n) {
    $("#inputmath")[0].value = "";
}
function clearBtn(n) {
    $("#inputmath")[0].value = $("#inputmath")[0].value.substr(0, $("#inputmath")[0].value.length - 1);
}
function percentageBtn(n) {
    $("#inputmath")[0].value = $("#inputmath")[0].value / 100;
}
function squareBtnn(n) {
    $("#inputmath")[0].value = ($("#inputmath")[0].value) ** 2;
}
function equalBtnn(n) {
    var output = $("#inputmath")[0].value.replace(/x/g, '*').replace(/÷/g, '/');
    if ($("#inputmath")[0].value[$("#inputmath")[0].value.length - 1] == "." || operators.indexOf($("#inputmath")[0].value[$("#inputmath")[0].value.length - 1]) > -1) {
    $("#inputmath")[0].value.replace(/[.+-*/]/g, '');
    }
    $("#inputmath")[0].value = eval(output);
}

$('#changeThemeBtn').click(function() {
    $('input').toggleClass('changeInput');
    $('.wrap').toggleClass('changeBorder');
    $('#changeThemeBtn').toggleClass('changeBorder');
    $('#changeThemeBtn').toggleClass('changeBoxShadow');
    $('.container').toggleClass('changeBoxShadow');
    $('.button-equal button').toggleClass('changeEqualBtn');
})
