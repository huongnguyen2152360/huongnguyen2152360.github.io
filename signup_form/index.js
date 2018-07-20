$('#signUpForm').on('submit', function() {
    var isValid = true;
    if ($('#username').val().trim() == '') {
        $('#username').next('span').text('Name is empty!');
        isValid = false;
    } else {$('#username').next('span').text('');}
    if ($('#dob').val().trim() == '') {
        $('#dob').next('span').text('Date is empty!');
        isValid = false;
    }
    else {$('#dob').next('span').text('');}
    if ($('#email').val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/) == null) {
        $('#email').next('span').text('Email is invalid!');
        isValid = false;
    }else {$('#email').next('span').text('');}
    if ($('#password').val().trim() == '') {
        $('#password').next('span').text('Password is empty!');
        isValid = false;
    }else {$('#password').next('span').text('');}
    return isValid;
})