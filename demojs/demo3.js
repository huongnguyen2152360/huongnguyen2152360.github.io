// function bai1(a,b) {
//     document.write(Math.max(a,b));
// }
// Test cases:
// console.log(bai1(1,20));
// console.log(bai1("a",20));
// console.log(bai1(0,-99));

// function bai2(n) {
//     if (n > 0) {
//         result = 1;
//         for (var i = 0; i < n; i++) {
//             var result = result * (n-i);
//         }
//     }
//     return result;
// }
// console.log(bai2(5));
// console.log(bai2(0));
// console.log(bai2(3));

// function bai3(arr) {
//     var sochan = [];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i]% 2 == 0 && typeof arr[i] == "number") {
//             sochan.push(arr[i]);
//         }
//     }
//     sochan.sort(function(a,b){return b-a});
//     return sochan;
//     }
// console.log(bai3([1,99,234,676,-10,84,55]));
// console.log(bai3([2,4,79,123,34,-34]));

function bai4(user) {
    if (1 <= user.username.length < 20 && 6 <= user.password.length <= 20 && user.confirm === user.password) {
        alert("Thank you for joining us!");
    }
}
// Test case:
// console.log(bai4(user = {
//     username: prompt("Username:", "username"),
//     password: prompt("Password:", "secret"),
//     confirm: prompt("Confirm your password:", "secret")
// }));
