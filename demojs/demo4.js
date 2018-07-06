// function bai1() {
//     var now = new Date();
//     document.write(now);
//     var month = now.getMonth() + 1;
//     if (month == 2 || month == 3 || month == 4) {
//         return "Spring";
//     }
//     if (month == 5 || month == 6 || month == 7) {
//         return "Summer";
//     }
//     if (month == 8 || month == 9 || month == 10) {
//         return "Fall";
//     }
//     else {
//         return "Winter";
//     }
// }
// console.log(bai1());

// function bai2(arr) {
//     if (typeof arr == "number") {
//         var string = arr.toString();
//     }
//     if (typeof arr == "string") {
//         var string = arr;
//     }
//     if (string.length <= 10) {
//         document.write(string);
//     }
//     else {
//         document.write(string.substr(0,10) + "...");
//     }
// }

//Test cases:
// console.log(bai2(12345678901234567890));
// console.log(bai2("abcdefghij"));
// console.log(bai2("abcdefghijklmnop"));
// console.log(bai2(1234));

// function bai3(x) {
//     while (x >=0 && x <= 10) {
//         if (x >=0 && x<= 3.9) {
//             return "Điểm F";
//         };
//         if (x >= 4 && x <= 5.4) {
//             return "Điểm D";
//         };
//         if (x >= 5.5 && x <= 6.9) {
//             return "Điểm C";
//         };
//         if (x >= 7 && x <= 8.4) {
//             return "Điểm B";
//         };
//         if (x >= 8.5 && x <= 10) {
//             return "Điểm A";
//         }
//     }
// }
// Test cases:
// console.log(bai3(4));
// console.log(bai3(8.5));
// console.log(bai3(7.5));

// function bai4(fips) {
//     switch (fips) {
//         case "FR":
//             return "Bonjour";
//             break;
//         case "JA":
//             return "Ohayo gozaimatsu";
//             break;
//         case "SP":
//             return "Hola";
//             break;
//         case "TH":
//             return "S̄wạs̄dī";
//             break;
//         case "BR":
//             return "Olá";
//             break;
//         default:
//             return "Xin chào";
//             break;
//     }
// }
// Test cases:
// console.log(bai4("FR"));
// console.log(bai4("JA"));
// console.log(bai4("lala"));

// function bai5(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == true) {
//             return i;
//             break;
//         }
//     }
// }
// //Test cases:
// // console.log(bai5([false, false, false, true, false, true, false, true]));
// // console.log(bai5([true, false, false]));
// // console.log(bai5([false, false, false, false, false, true]));
// // console.log(bai5([false, false]));

//Bài 6
function bai6() {
    for (var i = 0, j = 1; i <= 100, j <=100; i+=2, j+=2) {
            document.write(`<p style="color:red">${i}</p>`);
            document.write(`<p style="color:green">${j}</p>`);
        }
    }
// Test cases:
console.log(bai6());