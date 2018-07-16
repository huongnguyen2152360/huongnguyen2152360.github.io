const operators = ["+", "-", "x", "÷"];
let content ='';
var m = $("#inputmath").val(); //vì replace áp dụng cho string thôi 
function numb(n) {
    content += n.innerText;
    $("#inputmath").val(content);
    console.log(content);
}
function clearAll(n) {
    $("#inputmath").val() = "";
}
function clearBtn(n) {
    m = m.substr(0, m.length - 1);
}
function percentageBtn(n) {
    $("#inputmath").val() = $("#inputmath").val() / 100;
}
function squareBtnn(n) {
    $("#inputmath").val() = ($("#inputmath").val()) ** 2;
}
function equalBtnn(n) {
    var output = m.replace(/x/g, '*').replace(/÷/g, '/');
    if (m[m.length - 1] == "." || operators.indexOf(m[m.length - 1]) > -1) {
    m.replace(/[.+-*/]/g, '');
    }
    $("#inputmath").val(eval(output));
}
function changeThemeBtn() {
    $('input').css('background','linear-gradient(to bottom right, #dcdffc 0%, #08105a 100%)');
    $('.wrap').css('border','0.5px solid rgba(126,137,244,0.4)');
    $('#changeThemeBtn').css('border','0.5px solid rgba(126,137,244,0.4)');
    $('#changeThemeBtn').css('box-shadow','0px 8px 16px rgba(204,209,251,0.9)');
    $('.container').css('box-shadow','0px 8px 16px rgba(204,209,251,0.9)');
    $('.button-equal button').css('color','#1020b8');
}
