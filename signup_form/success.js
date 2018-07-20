var aString = $('.info p').html(location.href)[0].innerText;
var quote = aString.substr(aString.search('html?')+5,aString.length);
// username=asf&dob=aw&gender=male&address=awruy&pnumber=aery&email=ertu&password=ytq
var deCode = decodeURIComponent(quote);
console.log(deCode);
var quote_split = deCode.split(/[=&]/);
// console.log(quote_split);
var labels = ['username','dob','gender','address','pnumber','email','password'];
for (var i = 0; i < labels.length; i++) {
    if (quote_split.indexOf(labels[i]) != -1) {
        // console.log(quote_split.indexOf(labels[i]));
        for (var j = 0; j < quote_split.length; j++) {
            quote_split[j] = quote_split[j].replace(/\+/g,' ');
            // console.log(quote_split[j]);
            }
        }
        document.write('Your ' + labels[i] + ': ' + quote_split[quote_split.indexOf(labels[i])+1] + '</br>');
    }