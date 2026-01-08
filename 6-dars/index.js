"use strict";

// // Amaliyot

// // 1-masala////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.myPush = function (...element) {
//     return [...this, ...element];
// };

// let arr1 = [1, 5, 6, 7];
// console.log(arr1.myPush(9, 3));

// // 2-masala////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.unique = function () {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (!arr.includes(this[i])) arr[arr.length] = this[i];
//     }
//     return arr;
// };

// let arr2 = [5, 9, 8, 7, 9, 4, 8];
// console.log(arr2.unique());

// //

// Array.prototype.myFilter = function (callback) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) arr[arr.length] = this[i];
//     }
//     return arr;
// };

// let arr3 = [10, 2, 42, 9, 3, 6, 7, 12, 99, 65, 78, 25];
// console.log(arr3.myFilter((v) => v > 20));

// //

// Array.prototype.myMap = function (callback) {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         arr[arr.length] = callback(this[i], i, this);
//     }
//     return arr;
// };

// let arr4 = [10, 2, 42, 9, 3, 6, 7, 12, 99, 65, 78, 25];
// console.log(arr4.myMap((v, i, h) => h));

// //

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

// let arr5 = [10, 2, 42, 9, 3, 6, 7, 12, 99, 65, 78, 25];
// let arr01 = [];
// arr5.myForEach((v) => {
//     arr01.push(v + 5);
// });
// console.log(arr01);

// //

// Array.prototype.myFlat = function (num = 1) {
//     let arr = this;
//     let result = [];
//     while (num) {
//         if (num === Infinity) {
//             let anyArr = 0;
//             arr.forEach((v) => {
//                 if (Array.isArray(v)) {
//                     anyArr++;
//                 }
//             });
//             if (!anyArr) num = 1;
//         }
//         result = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (!Array.isArray(arr[i])) {
//                 result[result.length] = arr[i];
//             } else {
//                 for (let j = 0; j < arr[i].length; j++) {
//                     result[result.length] = arr[i][j];
//                 }
//             }
//         }
//         arr = result;
//         num--;
//     }

//     return arr;
// };

// let arr6 = [1, 2, [3, [4], [[5, [6, [[[[7, [8]]]]]]]]]];
// arr6 = arr6.myFlat(Infinity);
// console.log(arr6);

// // 3-masala////////////////////////////////////////////////////////////////////////////////////////////////

// class MyMath {
//     //

//     static abs(num) {
//         if (num >= 0) return num;
//         num = num.toString().split("");
//         num.shift();
//         return Number(num.join(""));
//     }

//     //

//     static trunc(num) {
//         let str = "";
//         num = String(num);
//         for (let i = 0; i < num.length; i++) {
//             if (num[i] === ".") break;
//             str += num[i];
//         }
//         return Number(str);
//     }

//     //

//     static floor(num) {
//         let floored = 0;
//         if (num > 0) {
//             while (floored + 1 < num) {
//                 floored++;
//             }
//         } else if (num < 0) {
//             while (floored > num) {
//                 floored--;
//             }
//         }
//         return floored;
//     }

//     //

//     // optimalroq floor (Kamroq aylanish)
//     static floorPro(num) {
//         num = MyMath.trunc(num);
//         if (num < 0) num--;
//         return num;
//     }

//     //

//     static ceil(num) {
//         num = MyMath.trunc(num);
//         if (num > 0) num++;
//         return num;
//     }

//     //

//     static round(num) {
//         if (!num) return num;
//         let float = MyMath.abs(num % MyMath.trunc(num));
//         if (num > 0) {
//             if (float >= 0.5) {
//                 return MyMath.ceil(num);
//             } else {
//                 return MyMath.floor(num);
//             }
//         } else {
//             if (float <= 0.5) {
//                 return MyMath.ceil(num);
//             } else {
//                 return MyMath.floor(num);
//             }
//         }
//     }

//     //

//     static min(...nums) {
//         let min = nums[0];
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] < min) min = nums[i];
//         }
//         return min;
//     }

//     //

//     static max(...nums) {
//         let max = nums[0];
//         for (let i = 1; i < nums.length; i++) {
//             if (nums[i] > max) max = nums[i];
//         }
//         return max;
//     }
// }

// console.log(MyMath.abs(-5));
// console.log(MyMath.trunc(-2.3));
// console.log(MyMath.ceil(2.3));
// console.log(MyMath.floor(-2.3));
// console.log(MyMath.round(2.3));
// console.log(MyMath.max(12, 32, 4));
// console.log(MyMath.min(12, 32, 4));