$('.form-name2 p').click(function(){
    console.log($('.form-name2 p'))
    $('.form-name2').css('opacity','1');
    $('.form2').css('display','block');
    $('.form').css('display','none');
    $('.form-name').css('opacity','0.3');
    $('.form-name p').css('border','none');
})
$('.forgotpass').click(function(){
    $('.form-name2').css('opacity','1');
    $('.form2').css('display','block');
    $('.form').css('display','none');
    $('.form-name').css('opacity','0.3');
    $('.form-name p').css('border','none');
})
console.log($('.form-name p'));

// $('.form-name p').click(function() {
//     $('.form-name').css('opacity','1');
//     $('.form').css('display','block');
//     $('.form2').css('display','none');
//     $('.form-name2').css('opacity','0.3');
//     $('.form-name2 p').css('border','none');
// })
function signIn() {
    console.log('hello');
}
