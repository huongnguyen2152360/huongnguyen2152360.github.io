// 1 - Viết một hàm hiện ngày và thời gian hiện tại theo fomat:
// Today is: Friday | current time is 4PM : 50 : 22

function bai1() {
    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
    var am_pm = d.getHours() >= 12 ? "PM" : "AM";
    var minutes = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
    var seconds = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
    var time = "Today is: " + days[d.getDay()] + " | " + "Current time is " + hours + am_pm + " : " + minutes + " : " + seconds;
    return time;
}

//2 - Viết một function tính số ngày còn lại để đến ngày 2/9/2018
//ví dụ hôm nay là 31/8 thì còn 2 ngày, 1/9 thì còn 1 ngày

function bai2() {
    var d = new Date()
    var day1 = d.getDay() + 1;
    var month1 = d.getMonth();
    var date1 = new Date(2018, month1, day1);
    var date2 = new Date(2018, 9, 2);
    var one_day = 24 * 60 * 60 * 1000;
    //Convert both dates to milliseconds
    var date1_milisec = date1.getTime();
    var date2_milisec = date2.getTime();
    var milisec = date2_milisec - date1_milisec;
    //Convert back to days
    return Math.round(milisec / one_day);
}

//3 - Viết function khi truyền vào 2 số ra được kết quả nhân và chia 2 số đó
//ví dụ truyền 2 số (3,4) trả về phép nhân là 12 phép chia là 0.75
function bai3(a, b) {
    var multiply = a * b;
    var divide = a / b;
    return result = "Kết quả phép nhân là: " + multiply + " // " + "Kết quả phép chia là: " + divide;
}

//4- Viết function chuyển đổi nhiệt độ từ độC sang nhiệt độ Celsius, độ F (công thức search trên mạng)

function bai4(x) {
    return result = "Nhiệt độ Fahrenheit là: " + ((x * 9 / 5) + 32);
}

//5- Viết một function truyền vào 2 số trả về tổng 2 số đó, nếu 2 số bằng nhau thì trả về 3 lần tổng 2 số đó. ví dụ (2,2) kết quả 12
function bai5(x,y) {
    if (x==y) {return 3*(x+y);}
    else {return x+y;}
}
// console.log(bai5(2,2));
// console.log(bai5(3,5));

//6 - Viết một function đảo ngược số ví dụ 123 thành 321. Đầu vào đầu ra phải là số
function bai6(n) {
    var n = n.toString();
    return Number(n.split("").reverse().join(""));
}
// console.log(bai6(123));
// console.log(bai6(987325423));