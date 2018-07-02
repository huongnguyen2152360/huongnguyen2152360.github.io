// // Bài 1 
// function bai1(x) {
//     return x**2;
//   }
//   // Test cases
//   console.log(bai1(3));
//   console.log(bai1(5));

// function bai2(a,b,c) {
//     return bai1(3*a +2*b -c);
// }
//  // Test cases
//   console.log(bai2(2,4,6));
//   console.log(bai2(3,5,7));

// var x = "abcdefghijklmnopqrstuvwxyzabcdefg"
// function bai3(x) {
//   return x.substr(0,10) + "...";
// }
// //Test cases
// console.log(bai3("kjahwawrkejhlkajfhkljawhlkfjh"));

// var x = "welcome to Techmaster"
// function bai4(x) {
//   var y = x.substr(0,1);
//   var z = y.toUpperCase();
//   return z + x.substr(1).toLowerCase();
// }
// console.log(bai4("welcome to this world!"));

// var p = (1,3,5,7,9,2,4,5,78);
// function bai5(p) {
//     var result = Math.min(p);
//     return result;
// }
// // Test cases
// //console.log(bai5(1,3,5,7,9,2,4,5,78));
// console.log(bai5(-1,567,4,56,-38,1900,0.5));
// console.log(bai5(456,-99,0.6,8237,128,28,7823));

// var names = ["Jessica", "Yoona", "Elisa", "John", "Aaron"];
// function bai6(names) {
//     var compare = function (a, b) {
//         return a.toLowerCase() > b.toLowerCase();
//     };
//     var result = names.sort(compare);
//     result = result.toString();
//     document.write(result.toString());
// //Test cases
// console.log(bai6(["Jessica", "Yoona", "Elisa", "John", "Aaron"]));
// // console.log(bai6(["zorione", "Ralf", "Bjarne", "Julianne", "Julianne"]));
// // console.log(bai6(["Olivia", "romaine", "cherish", "cherry", "Anna"]));

var teacher = {
    firstName: "John",
    lastName: "Carousel",
    age: 35,
    say: function() {
    }
}
var student = {
    firstName: "Aaron",
    lastName: "Bjarne",
    age: 17,
    say: function() {
    }
}
var parent = {
    firstName: "Julianna",
    lastName: "Bjarne",
    age: 45,
    say: function() {
    }
}
var aboutMe = function() {
    return ("Xin chào, tôi là " + this.firstName + " " + this.lastName + "." + " Năm nay tôi " + this.age + " tuổi.");
}
teacher.say = aboutMe;
student.say = aboutMe;
parent.say = aboutMe;

//Test cases
// console.log(teacher.say());
// console.log(student.say());
// console.log(parent.say());