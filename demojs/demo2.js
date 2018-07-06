
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

// function bai2(p) {
//         for (var i = p.length - 1; 0 <= i && i < p.length; i--) {
//             document.write(p[i]);
//         }
//     }
    // Test cases:
//console.log(bai2("world"));
// console.log(bai2("level"));
// console.log(bai2("hello"));

function duplicate(string) {
    var result = string;
    for (var i = 0; i < 9; i++) {
        result += ("-" + string);
    }
    document.write(result);
}
// //Test cases:
// console.log(duplicate("123"));
// console.log(duplicate("4578"));


// function bai4(names) {
//     var sortNames = names.sort(function(a,b) {return a.localeCompare(b)});
//     for (var i = 1; i < names.length; i++) {
//         document.write(i + ". " + sortNames[i] + "<br>");
//     }
// }
// console.log(bai4(["c", "B", "D", "A", "F", "R", "Z"]));
// console.log(bai4(["Yoona","Stacy","Aaron","Joseph", "John","David","Olivia"]));

// function bai5(numbers) {
//     var result = []
//     for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i]**2)
//     }
//     return result;
// }
// //Test cases
// console.log(bai5([2,4,6,8]));
// console.log(bai5([1,2,3,4]));
// console.log(bai5([5,5,99,121]));

// function bai6(sodu) {
//     var result = new Array();
//     for (var i = 0; i < sodu.length; i++) {
//         number = sodu[i]%2;
//         result.push(number);
//     }
//     return result;
// }
// // Test cases
// console.log(bai6([2,7,5]));
// console.log(bai6([13,27,65]));
// console.log(bai6([10,97,5]));

