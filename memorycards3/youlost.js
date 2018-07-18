const body = document.querySelector('body');
body.addEventListener('click',function(){
    document.getElementById('laughSound').play();
})
$('.playagainBtn').click(function(){
    location.assign('gameplay.html');
})