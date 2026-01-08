'use strict';

// // 1-masala ///////////////////////////////////////////////////////////////////////////////////////////////////


// function SquareEvenSum(arr) {
//     let sum=0
//     arr.forEach(v => {
//         v=Math.abs(v)
//         if (v%2===0) {
//             sum+=v**2
//         }else{
//             sum+=v
//         }
//     });
//     return sum
// }

// console.log(SquareEvenSum([-3,2,5]));

// // 2-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function checkTwoArr(arr1, arr2) {
//     for (const v of arr1) {
//         if(arr2.includes(v)) return false
//     }

//     return true
// }

// console.log(checkTwoArr([1,4,3],[2,8,9]));

// // 3-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function sortArr(arr1, arr2, element) {
//     let newArr=[...arr1, ...arr2].sort((a,b)=>a-b)
//     return [[...newArr], [...newArr.reverse()], newArr.map(()=>element)]
// }
// console.log(sortArr([1,10],[2,3,4], 'node.js'));

// // 4-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// const numSplit= num=> [Math.floor(num/2), Math.round(num/2)]

// console.log(numSplit(9));

// // 5-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// const sortByLength = arr => arr.sort((a,b)=>a.length-b.length)

// console.log(sortByLength(['a', 'ccc', 'bb', 'dddd']));

// // 6-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function doubleEven(arr) {
//     // // 1-usul
//     // let evens=arr.filter(v=>v%2===0).sort((a,b)=>a-b)
//     // let odds=arr.filter(v=>v%2===1)
    
//     // return [...evens, ...odds].map(v=>v*2)

//     // 2-usul
//     let even=[]
//     let odd=[]
//     for (const v of arr) {
//         if(v%2===0){
//             even.push(v)
//         }else{
//             odd.push(v)
//         }
//     }

//     return [...even.sort((a,b)=>a-b), ...odd].map(v=>v*2)
// }

// console.log(doubleEven([11,3,4,6,8,2,44,12,9]));

// // 7-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function reverseMatrix(arr) {
//     arr=arr.map(v => {
//         if(Array.isArray(v)){
//             return reverseMatrix(v)
//         } else{
//             return v
//         }
//     });
//     return arr.reverse()
// }

// console.log(reverseMatrix([[1,2,3],[4,5,6],[7,8,9]]));

// // 8-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function numToStr(start, end) {
//     if (start>9 || start<0 || end>9 || end<0) {
//         return null
//     }
//     const numbers={
//         0: 'zero',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine'
//     }

//     let arr=[]
//     for (let i = start; i <= end; i++) {
//         arr.push(numbers[i])
//     }

//     return [[...arr], [...arr.reverse()]]
// }

// console.log(numToStr(1,5));

// // 9-masala ///////////////////////////////////////////////////////////////////////////////////////////////////

// function addToArr(num) {
//     let retArr=[]
//     let varArr=[]


//     for (let i = 1; i <=num; i++) {
//         if(varArr.length>2){
//             retArr.push(varArr)
//             varArr=[]
//         }
//     varArr.push(i)

//     }
//     if(varArr.length) retArr.push(varArr)


//     return retArr
// }

// console.log(addToArr(10));