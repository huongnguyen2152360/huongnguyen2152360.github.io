// Bài 1
var para1 = document.getElementById("p1");
var para2 = document.getElementsByClassName("no-img");
function changeFontSize(x) {
    para1.style.fontSize = `${x}px`;
    for (var i = 0; i < para2.length; i++) { 
    para2[i].style.fontSize = `${x}px`;
}
}
//console.log(changeFontSize(15));

// Bài 2
var allP = document.querySelectorAll('p');
function increaseFontSize(paragraph) {
    var currentFontSize = window.getComputedStyle(allP[paragraph], null).getPropertyValue("font-size");
    var fontSizeNumber = currentFontSize.substr(0,currentFontSize.length - 2);
    if (fontSizeNumber > 30) {return;}
    allP[paragraph].style.fontSize = Number(fontSizeNumber) + 1 + "px";
}
// console.log(increaseFontSize(0));

// Bài 3
function decreaseFontSize(paragraph) {
    var decreaseNumber = 1;
    var currentFontSize = window.getComputedStyle(allP[paragraph], null).getPropertyValue("font-size");
    var fontSizeNumber = currentFontSize.substr(0,currentFontSize.length - 2);
    allP[paragraph].style.fontSize = Number(fontSizeNumber) - decreaseNumber + "px";
    if (decreaseNumber > 10) {return;}
}
// console.log(decreaseFontSize(0));

// Bài 4
function changeColor() {
    para1.style.color = "green";
    para2[0].style.color = "yellow";
    para2[1].style.color = "red";
}
//console.log(changeColor());

// Bài 5
function changeBgColor(color) {
    document.body.style.backgroundColor = `${color}`;
}
//console.log(changeBgColor("red"));

// Bài 6
function copyContent(paragraph1, paragraph2) {

    var content1 = document.getElementById(paragraph1);
    var content2 = document.getElementById(paragraph2);
    content1.innerText = content2.innerText;
}
// console.log(copyContent("p1", "p2"));