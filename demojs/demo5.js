// function printSquare(n) {
//     var string = "";
//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < n; j++) {
//             // hang ngang
//             string += " * ";
//         }
//     string += "</br>";
//     }
//     return string;
// }
// document.write(printSquare(5));

// function printTriangle(n) {
//     var string = "";
//     if (n <= 2) {return}
//         for (var i = 1; i <= n; i++) {
//             for (var j = 1; j <= i; j++) {
//                 string += " * ";
//                 }
//         string += "</br>";
//         }
//     return string;
//     }
// document.write(printTriangle(5));

// function printEmptyRectangle(a, b) {
//     var string = "";
//     if (a < 3 || b < 3) { return; }
//     for (var i = 1; i <= b; i++) {
//         for (var j = 1; j <= a; j++) {
//             if (i > 1 && i <= b - 1 && j > 1 && j <= a - 1) { string += "&nbsp;&nbsp;"}
//             else if (j == a || j == 1) {string += "*&nbsp;"}
//             else { string += "*&nbsp;"; };
//         }
//         string += "</br>";
//     }
//     return string;
// }
// document.write(printEmptyRectangle(5,3));
// document.write(printEmptyRectangle(6,4));

// function printSpecialTrigangle(n) {
//     var string = "";
//     if (n <= 1 || n % 2 == 0) { return; }
//     for (var i = 1; i <= n; i++) {
//         for (var j = 1; j <= 2 * n - 1; j++) {
//             if (j >= i && j <= 2 * n - i) {
//                 string += "*&nbsp;";
//             }
//             else {
//                 string += "&nbsp;&nbsp;";
//             }
//         }
//         string += "</br>";
//     }
//     return string;
// }
// document.write(printSpecialTrigangle(3));
// document.write(printSpecialTrigangle(5));

function printX(n) {
    var string = "";
    if (n <= 3 && n % 2 == 0) { return; }
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= n; j++) {
            if (j == i || j == n - i + 1) {
                string += "*";
            }
            else {
                string += "&nbsp;";
            }
        }
        string += "</br>";
    }
    return string;
}
// document.write(printX(5));
// document.write(printX(7));

function printButterfly(n) {
    var string = "";
    if (n <= 2) { return }
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            if ((i <= n / 2) + 1 && (j <= i || j > n - i)) { string += "*&nbsp;"; }
            else if ((i >= n / 2 + 1) && (j >= i || j <= n - i + 1)) { string += "*&nbsp;"; }
            else { string += "&nbsp;&nbsp;" }
        }
        string += "</br>";
    }
    return string;
}
document.write(printButterfly(5));


