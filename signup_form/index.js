var aString = $('.info p').html(location.href)[0].innerText;
var quote = aString.substr(aString.search('html?')+5,aString.length);
// username=asf&dob=aw&gender=male&address=awruy&pnumber=aery&email=ertu&password=ytq
var quote_split = quote.split(/[=&]/);
// console.log(quote_split);
var labels = ['username','dob','gender','address','pnumber','email','password'];
for (var i = 0; i < labels.length; i++) {
    if (quote_split.indexOf(labels[i]) != -1) {
        // console.log(quote_split.indexOf(labels[i]));
        document.write('Your ' + labels[i] + ': ' + quote_split[quote_split.indexOf(labels[i])+1] + '</br>');
    }
}
