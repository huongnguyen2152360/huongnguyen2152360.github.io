
// function bai1(n) {
//     var result = 1;
//     for (var i = 0; i < n; i++) {
//         result = result * (n-i);
//     };
//     return result;
// }
// //Test cases:
// console.log(bai1(3));
// console.log(bai1(5));
// console.log(bai1(7));

// var p = ["h","e","l","l","o"];
// function bai2(p) {
//     var result = p[p.length -1]
//     for (var i = 2; i <= p.length; i++) {
//     result = result + p[p.length - i];
//     }
//     return result;
// }
// // Test cases:
// console.log(bai2(["w","o","r","l","d"]));
// console.log(bai2(["l","e","v","e","l"]));
// console.log(bai2(["h","e","l","l","o"]));

// function duplicate(string) {
//     for (var i = 0; i < 10; i++) {
//         document.write(string + "-");
//     }
// }
// //Test cases:
// console.log(duplicate("123"));
// console.log(duplicate("4578"));

// var names = ["A", "B", "C"];
// function bai4(names) {
//     var sortNames = names.sort();
//     for (var i = 1; i < names.length; i++) {
//         document.write(i + ". " + sortNames[i] + "<br>");
//     }
// }
// console.log(bai4(["C", "B", "D", "A", "F", "R", "Z"]));
// console.log(bai4(["Yoona","Stacy","Aaron","Joseph", "John","David","Olivia"]));

// function bai5(numbers) {
//     for (var i = 0; i < numbers.length; i++) {
//         numbers[i] = numbers[i]**2 
//     }
//     return numbers;
// }
// Test cases
// console.log(bai5([2,4,6,8]));
// console.log(bai5([1,2,3,4]));
// console.log(bai5([5,5,99,121]));

function bai6(sodu) {
    var result = new Array();
    for (var i = 0; i < sodu.length; i++) {
        number = sodu[i]%2;
        result.push(number);
    }
    return result;
}
// Test cases
console.log(bai6([2,7,5]));
console.log(bai6([13,27,65]));
console.log(bai6([10,97,5]));

