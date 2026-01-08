"use strict";

// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// // videoda aytilgan masalaga yechim
// function triangle(arr) {
//     let length = arr.length - 1;
//     arr.forEach((v) => {
//         console.log(" ".repeat(length), ...v);
//         length--;
//     });
// }

// let arr = [[2], [2, 3], [4, 5, 6], [4, 1, 8, 3]];
// triangle(arr);

// // lekin rasimda output: 11,
// // va explanationdagi uchburchakda bazi sonlarning pastiga chizilgan
// // menimcha o'rtaga yaqin bo'lgan sonlarning yig'indisini chiqarish kerak edi

// function sumMiddle(arr) {
//     let sum = 0;
//     arr.forEach((v) => {
//         sum += v[Math.floor((v.length - 1) / 2)];
//     });
//     return sum;
// }

// let arr1 = [[2], [3, 4], [4, 5, 6], [4, 1, 8, 3]];
// console.log(sumMiddle(arr1));

// // 2-masala ////////////////////////////////////////////////////////////////////////////////
// function sortNum(arr) {
//     let sorted = [];
//     let others = [];
//     arr.forEach((v) => {
//         if ((Number(v) && parseFloat(v)) || v === 0) {
//             sorted.push(v);
//         } else {
//             others.push(v);
//         }
//     });
//     return [sorted.sort((a, b) => a - b), others];
// }

// let arr2 = [1, null, 4, false, 33, 44, 2, true];
// console.log(sortNum(arr2));

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// function sortAll(arr) {
//     let all = {};
//     arr.forEach((v) => {
//         let type = typeof v;
//         if (all[type]) {
//             all[type].push(v);
//         } else {
//             all[type] = [v];
//         }
//     });

//     for (const k in all) {
//         all[k] = all[k]?.sort((a, b) => a - b);
//     }
//     // yoki
//     // all.number = all.number?.sort((a, b) => a - b);

//     return Object.values(all);
// }

// let arr3 = [1, null, 4, false, 33, 44, 2, true];
// console.log(sortAll(arr3));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// const type = (arr) => arr.map((v) => typeof v);

// let arr4 = [1, null, 4, false, 33, 44];

// console.log(type(arr4));
