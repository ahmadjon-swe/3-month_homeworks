"use strict";

// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// function closest(arr, num) {
//     let result = [];
//     let sum = arr[0] + arr[1] - num;
//     for (let i = 0; i < arr.length; i++) {
//         if (Math.abs(arr[i] + arr[i + 1] - num) < sum) {
//             result = [arr[i], arr[i + 1]];
//             sum = Math.abs(arr[i] + arr[i + 1] - num);
//         }
//     }

//     return result;
// }

// let arr1 = [21, 43, 11, 3, 45, 4, 32, 54];
// console.log(closest(arr1, 35));

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

// function addEven(arr) {
//     let fstEven = arr.find((v) => v % 2 === 0);
//     return arr.map((v) => {
//         if (v % 2 === 0) {
//             return (v += fstEven);
//         } else {
//             return v;
//         }
//     });
// }

// let arr2 = [1, 4, 5, 2, 33, 1, 8, 22];
// console.log(addEven(arr2));

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// function addOdd(arr) {
//     let lastOdd = [...arr].reverse().find((v) => v % 2 === 1);
//     return arr.map((v) => {
//         if (v % 2 === 1) {
//             return (v += lastOdd);
//         } else {
//             return v;
//         }
//     });
// }

// console.log(addOdd([1, 9, 4, 7, 5, 4, 6, 1, 7]));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// function maxReplaceMin(arr) {
//     let minI = arr.findIndex((v) => v === Math.min(...arr));
//     let maxI = arr.findIndex((v) => v === Math.max(...arr));

//     let varMIn = arr[minI];

//     arr[minI] = arr[maxI];
//     arr[maxI] = varMIn;

//     return arr;
// }

// console.log(maxReplaceMin([23, 43, 12, 56, 64]));

// // 5-masala ////////////////////////////////////////////////////////////////////////////////

// function minMaxZeromize(arr) {
//     // min vax ni indeksini topish
//     let minI = arr.findIndex((v) => v === Math.min(...arr));
//     let maxI = arr.findIndex((v) => v === Math.max(...arr));
//     // qaysi birinchi kelishi aniqlash
//     let idx = [minI, maxI].sort((a, b) => a - b);
//     return arr.map((v, i) => {
//         if (i > idx[0] && i < idx[1]) {
//             return 0;
//         } else {
//             return v;
//         }
//     });
// }

// console.log(minMaxZeromize([2, 54, 4, 11, 1, 34, 11]));
// console.log(minMaxZeromize([2, 54, 4, 11, 1, 34, 11, 99]));

// // 6-masala ////////////////////////////////////////////////////////////////////////////////

// function minMaxReverse(arr) {
//     // min vax ni indeksini topish
//     let minI = arr.findIndex((v) => v === Math.min(...arr));
//     let maxI = arr.findIndex((v) => v === Math.max(...arr));
//     // qaysi birinchi kelishi aniqlash
//     let idx = [minI, maxI].sort((a, b) => a - b);
//     // o'rtadagi arrayni ajratib olish. tog'ridan tog'ri reverse ishlamaydi
//     let middle = arr.slice(idx[0] + 1, idx[1]);

//     return [
//         ...arr.slice(0, idx[0] + 1),
//         ...middle.reverse(),
//         ...arr.slice(idx[1]),
//     ];
// }

// console.log(minMaxReverse([2, 54, 4, 11, 1, 34, 11]));
// console.log(minMaxReverse([2, 54, 4, 11, 1, 34, 11, 99]));

// // 7-masala ////////////////////////////////////////////////////////////////////////////////

// function removeNumber(array, index) {
//     // immutable qilish
//     let arr = [...array];

//     arr.splice(index, 1);

//     return arr;
// }

// console.log(removeNumber([54, 23, 65, 12], 1));

// // 8-masala ////////////////////////////////////////////////////////////////////////////////

// function removeDublicate(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1] || i === arr.length - 1) {
//             result.push(arr[i]);
//         } else {
//             i++;
//         }
//     }
//     return result;
// }

// console.log(removeDublicate([12, 43, 23, 54, 12]));
// console.log(removeDublicate([12, 43, 43, 23, 23, 54, 12, 23]));

// // 9-masala ////////////////////////////////////////////////////////////////////////////////

// const threeElements = (arr) => {
//     let result = [];
//     arr.forEach((v, i, a) => {
//         if (!result.includes(v) && a.filter((val) => val === v).length > 2)
//             result.push(v);
//     });
//     return result;
// };

// console.log(threeElements([12, 12, 44, 54, 44, 44, 2, 22, 2, 2]));

// // 10-masala ///////////////////////////////////////////////////////////////////////////////

// function evenIndexSum(arr) {
//     let sum = 0;

//     arr.forEach((v, i) => {
//         if (v % 2 === 0) sum += i;
//     });

//     return sum;
// }

// console.log(evenIndexSum([2, 43, 53, 23, 22, 53, 88, 10]));
