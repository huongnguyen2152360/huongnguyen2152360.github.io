function playAgainBtn() {
    location.assign('index.html');
}
var mySound = document.getElementById("myAudio");
function soundOnBtn() {
    mySound.play();
}
function soundOffBtn() {
    mySound.pause();
}