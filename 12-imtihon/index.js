"use strict";

// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// function rearrangeArr(arr) {
//     // unmutating sort
//     const array = [...arr].sort((a, b) => b - a);
//     const result = [];
//     while (array.length) {
//         result.push(array.shift());
//         if (array.length) result.push(array.pop());
//     }

//     return result;
// }

// console.log(rearrangeArr([1, 4, 5, 6, 72, 9, 4]));

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

// function findUniqueWords(str) {
//     const arr = str.split(" ");
//     return arr.filter((v) => arr.filter((val) => val === v).length === 1);
// }

// console.log(findUniqueWords("orange apple banana cherry apple banana"));

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// const findLongestWord = (arr) => arr.find((v) => v.length === Math.max(...arr.map((val) => val.length)));

// console.log(findLongestWord(["orange", 'apple', 'banana', 'cherry', 'apple', "grapefruit", 'banana']));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// const multiStr = (str, num) => str.repeat(num);

// console.log(multiStr("salom", 3));

// // 5-masala ////////////////////////////////////////////////////////////////////////////////

// const findCommon = (arr1, arr2) => arr1.filter((v) => arr2.includes(v));

// console.log(findCommon([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
