"use strict";

// // 1-masala //////////////////////////////////////////////////////////////////

// const palindrome = (str) => str === str.split("").reverse().join("");

// console.log(palindrome("level"));
// console.log(palindrome("apple"));

// // 2-masala //////////////////////////////////////////////////////////////////

// const decimalToBinary = (num) => Number(num.toString(2));

// console.log(decimalToBinary(15));

// // 3-masala //////////////////////////////////////////////////////////////////

// function swapElements(array, i1, i2) {
//     // immutable qilish
//     let arr = [...array];
//     let e1 = arr[i1];
//     arr[i1] = arr[i2];
//     arr[i2] = e1;
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(swapElements(arr, 2, 4));
// console.log(arr);

// // 4-masala //////////////////////////////////////////////////////////////////

// function letterFrequency(str) {
//     let frequency = {};
//     str.split("").forEach((v) => {
//         frequency[v] = (frequency[v] || 0) + 1;
//     });
//     return frequency;
// }

// console.log(letterFrequency("jsctiptt"));

// // 5-masala //////////////////////////////////////////////////////////////////

// function isAnagram(str1, str2) {
//     if (
//         str1.length !== str2.length &&
//         !str1.includes(" ") &&
//         !str2.includes(" ")
//     )
//         return false;

//     let arr1 = str1.toLowerCase().split("").sort();
//     let arr2 = str2.toLowerCase().split("").sort();

//     // bir nechta aralash so'zlarda " " (ochiq joy) xalaqit bermasligi uchun

//     while (arr1.includes(" ")) {
//         let i = arr1.findIndex((v) => v === " ");
//         arr1.splice(i, 1);
//     }

//     while (arr2.includes(" ")) {
//         let i = arr2.findIndex((v) => v === " ");
//         arr2.splice(i, 1);
//     }

//     while (arr1.length) {
//         if (arr1.pop() !== arr2.pop()) return false;
//     }

//     return true;
// }

// console.log(isAnagram("Listen", "sile nt"));

// // 6-masala //////////////////////////////////////////////////////////////////

// function longestUniqueSubstring(str) {
//     let arr = [];
//     let result = [];
//     str.split("").forEach((v) => {
//         if (!arr.includes(v)) {
//             arr.push(v);
//         } else {
//             if (result.length < arr.length) result = arr;
//             arr = [v];
//         }
//     });

//     return result.join("");
// }

// console.log(longestUniqueSubstring("abcabcbb"));
// console.log(longestUniqueSubstring("bbbb"));

// // 7-masala //////////////////////////////////////////////////////////////////

// function maxSubArrSum(arr) {
//     let result = [];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             let vArr = arr.slice(i, j);
//             let vSum = vArr.reduce((a, b) => a + b);
//             if (vSum > sum) {
//                 sum = vSum;
//                 result = vArr;
//             }
//         }
//     }

//     return [sum, result];
// }

// console.log(maxSubArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// // 8-masala //////////////////////////////////////////////////////////////////

// function findTwoSum(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === num) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }

//     return false;
// }
// console.log(findTwoSum([1, 5, 7, 4, 9], 11));
k
// // 9-masala //////////////////////////////////////////////////////////////////

// function longestConsecutive(array) {
//     let arr = [];
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i - 1] < array[i] || i === 0) {
//             arr.push(array[i]);
//         } else {
//             if (result.length < arr.length) result = arr;
//             arr = [array[i]];
//         }
//     }

//     return [result.length, result];
// }

// console.log(longestConsecutive([1, 4, 200, 2, 3]));

// // 10-masala /////////////////////////////////////////////////////////////////

// function sumPosNeg(array) {
//     let neg = 0,
//         pos = 0;
//     array.forEach((v) => {
//         v < 0 ? (neg += v) : (pos += v);
//     });

//     return {positiveSum: pos, negativeSum: neg};
// }

// console.log(sumPosNeg([1, -2, 3, -4, 5]));
