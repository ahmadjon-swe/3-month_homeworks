"use strict";

// // 1-masala //////////////////////////////////////////////////////////////////

// function checkBrackets(str) {
//     let arr = str.split("");
//     let br = {"{": "}", "(": ")", "[": "]"};

//     while (arr.length) {
//         if (br[arr.shift()] !== arr.pop()) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkBrackets("{[([({})])]}"));

// // 2-masala //////////////////////////////////////////////////////////////////

// function maxSndMax(arr) {
//     let newArr = arr.sort((a, b) => b - a);
//     return [newArr[0], newArr[1]];
// }

// console.log(maxSndMax([1, 4, 3, 80, 9]));

// // 3-masala //////////////////////////////////////////////////////////////////

// function maxMultiply(arr) {
//     let newArr = arr.sort((a, b) => b - a);
//     return `${newArr[0]} * ${newArr[1]} = ${newArr[0] * newArr[1]}`;
// }

// console.log(maxMultiply([1, 4, 3, 80, 9]));
