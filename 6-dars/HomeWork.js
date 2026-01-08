"use strict";

// // 1-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.foundUnique = function (arr, unique = false) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (arr.includes(this[i])) {
//             if (unique && result.includes(this[i])) continue;
//             result[result.length] = this[i];
//         }
//     }

//     return result;
// };

// let arr = [21, 36, 47, 25, 25];
// let arr1 = [22, 36, 48, 25];

// console.log(arr.foundUnique(arr1));
// console.log(arr.foundUnique(arr1, true));

// // 2-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// String.prototype.reverse = function () {
//     let str = "";
//     for (let i = this.length - 1; i >= 0; i--) {
//         str += this[i];
//     }
//     return str;
// };

// console.log("nima gap".reverse());

// // 3-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// function consa(name, age) {
//     (this.ism = name), (this.yosh = age);
// }
// consa.prototype.getName = function () {
//     return this.ism;
// };
// let ali = new consa("ali", 12);

// console.log(ali.getName());

// // 4-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// function ObjConstructor(name, age) {
//     (this.name = name), (this.age = age);
// }

// ObjConstructor.prototype.getAge = function () {
//     return this.age;
// };
// let a = new ObjConstructor("ali", 12);
// let b = new ObjConstructor("vali", 49);
// let c = new ObjConstructor("g'ani", 36);
// let d = new ObjConstructor("bali", 71);
// console.log(a.getAge());
// console.log(b.getAge());
// console.log(c.getAge());
// console.log(d.getAge());

// // 5-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.myConcat = function (arr) {
//     return [...this, ...arr];
// };

// console.log([1, 2].myConcat([3, 4]));

// // 6-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Object.prototype.keys = function () {
//     let arr = [];
//     for (const k in this) {
//         if (this.hasOwnProperty(k)) arr[arr.length] = k;
//     }
//     return arr;
// };

// let a = {a: 1, b: 2};
// console.log(a.keys());

// // 7-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// function crtObj(name, age) {
//     this.name = name;
//     this.age = age;
// }
// crtObj.prototype.getAge = function () {
//     return this.age;
// };

// let vali = new crtObj("Vali", 44);

// console.log(vali.getAge());
// delete crtObj.prototype.getAge;
// console.log(vali.getAge);

// // 8-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// String.prototype.upperCaseAll = function () {
//     let str = "";
//     for (let i = 0; i < this.length; i++) {
//         if (this[i - 1] === " " || i === 0) {
//             //metod ishlatmasdan 0 dan yaratish uchun harflar uchun obyekt yaratish ham mumkin ({a: A, b: B} shaklida)
//             str += this[i].toUpperCase();
//         } else {
//             str += this[i];
//         }
//     }
//     return str;
// };

// console.log("str harflar hammasi".upperCaseAll());

// // 9-masala ////////////////////////////////////////////////////////////////////////////////////////////////////////

// Array.prototype.myReplace = function (index, element) {
//     this[index] = element;
// };
// let arr = [1, 3, 4, 5];
// arr.myReplace(1, 2);
// console.log(arr);

// // // 10-masala ///////////////////////////////////////////////////////////////////////////////////////////////////////

// Object.prototype.reverseKeysValues = function () {
//     let keys = [],
//         values = [];
//     let obj = {};
//     for (const v in this) {
//         if (this.hasOwnProperty(v)) {
//             keys[keys.length] = v;
//             values[values.length] = this[v];
//         }
//     }

//     for (let i = 0; i < values.length; i++) {
//         // bir nechta bir xil valuelar bo'lganda, birinchisini olish
//         if (!obj[values[i]]) {
//             obj[values[i]] = keys[i];
//         }

//         // //

//         // // bir nechta bir xil valuelar bo'lganda, oxirgisini olish
//         // obj[values[i]]=keys[i]
//     }

//     return obj;
// };

// let obj = {a: 1, b: 2, c: 2};

// console.log(obj.reverseKeysValues());
