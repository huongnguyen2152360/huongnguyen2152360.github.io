var frontCard = $('.front');
var backCard = $('.back');
$('.card').click(function() {
    $('.front').css('transform','rotateY(0deg)');
    $('.back').css('transform','rotateY(180deg)');
})