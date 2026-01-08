'use strict';


//  Amaliyot

// Arraylar bilan ishlash

// // 1-masala ////////////////////////////////////////////////////////////////////////////////////////

// function oneMaxOneMin(array) {
//     let arr=array.sort((a, b)=>b-a)
//     let ret=[]
//     while (arr.length) {
//         ret.push(arr.shift())
//         if(arr.length) ret.push(arr.pop())
//     }
//     return ret
// }

// let arr=[12,6,4,7,9,8,3,6]
// let a=oneMaxOneMin(arr)
// console.log(a);
// console.log(oneMaxOneMin(a));


// // 2-masala ////////////////////////////////////////////////////////////////////////////////////////

// function mostFoundOne(arr) {
//     let obj={}
//     arr.forEach(v=>obj[v]=(obj[v] || 0)+1)
//     return Object.keys(obj)[Object.values(obj).indexOf(Math.max(...Object.values(obj)))]
// }

// console.log(mostFoundOne([1, 13, true, 0, false, 'str', 10, 'str']));

// // 3-masala ////////////////////////////////////////////////////////////////////////////////////////

// const oddOrEven = arr => arr.map(v => v%2===1 ? v+1 : v);

// console.log(oddOrEven([12,5,4,7,9,8,3,6]));

// // 4-masala ////////////////////////////////////////////////////////////////////////////////////////

// const palidroms= arr=> arr.filter(v => v===v.split('').reverse().join(''))

// console.log(palidroms(['aka', 'uka', 'obbo', 'boybo\'y']));


// // String bilan ishlovchi masalalar

// // 5-masala ////////////////////////////////////////////////////////////////////////////////////////

// function ret2timers(str) {
//     let arr=[]
//     str=str.split(' ')
//     str.forEach(v => {
//         str.splice(str.indexOf(v), 1)
//         if(str.includes(v) && !arr.includes(v)) arr.push(v) 
//     });
//     return arr
// }

// console.log(ret2timers('xar qanday 2 marta qaytarilgan xar so\'zni 1 marta ko\'rsatadi'));

// // 6-masala ////////////////////////////////////////////////////////////////////////////////////////

// const byLength = str => str.split(' ').sort((a,b)=>b.length-a.length).join(' ')

// console.log(byLength("uzunlik bo'yicha kamayish tartibida taxlaydi"));

// // 7-masala ////////////////////////////////////////////////////////////////////////////////////////

// const firstLetter = str => str.split(' ').map(v=>v[0]).join('')

// console.log(firstLetter("xar bir so'zning birinchi xarfini qaytaradi"));

// // 8-masala ////////////////////////////////////////////////////////////////////////////////////////

// const squareNum= str=>str.split('').map(v=> {if(!isNaN(v) && v!==' '){return v**2}else{return v}}).join('')

// console.log(squareNum('ab4st 5 xar9 3as'));

// // 9-masala ////////////////////////////////////////////////////////////////////////////////////////
// function startWovel(str) {
//     let vowels=['a', 'e', 'i', 'o', 'u']
//     return str.split(' ').filter(v=>vowels.includes(v[0].toLowerCase()))
// }

// console.log(startWovel('faqat birinchi xarfi unlilarni qaytaradi oqshom uyda ilon uxladi'));

// // 10-masala ///////////////////////////////////////////////////////////////////////////////////////

// const squareNum= str=>str.split('').map(v=> {if(!isNaN(v) && v!==' '){return ++v}else{return v}}).join('')

// console.log(squareNum('as5a 2baej mert3'));

// // 11-masala ///////////////////////////////////////////////////////////////////////////////////////

// const reverseWords = str => str.split(' ').map(v=>v.split('').reverse().join('')).join(' ')
    
// console.log(reverseWords("so'zlarni reverse qiladi"));

// // 12-masala ///////////////////////////////////////////////////////////////////////////////////////

// function equalLength(str) {
//     let count=0
//     let length=[]
//     str.split(' ').forEach(v => {
//         if (length.includes(v.length)) count++
//         length.push(v.length)
//     });
//     return count
// }

// console.log(equalLength('teng xarf bo\'lgan so\'zlarni sanaydi'));

// // 13-masala ///////////////////////////////////////////////////////////////////////////////////////

// const notInSecond= (arr1, arr2) => arr1.filter(v=>!arr2.includes(v))

// console.log(notInSecond([1,2,4,6,9],[7,5,4,6]));

// // 14-masala ///////////////////////////////////////////////////////////////////////////////////////

// function sortByFirst(arr){
//     let obj={}
//     arr.forEach(v => {
//         if(obj[v[0]]){
//             obj[v[0]].push(v)
//         }else{
//             obj[v[0]]=[v]
//         }
//     });
//     return Object.values(obj)
// }

// console.log(sortByFirst(['soz', "word", 'katta', 'world', 'sabzi']));

// // 15-masala ///////////////////////////////////////////////////////////////////////////////////////

// function mostFoundOne(arr) {
//     let obj={}
//     let ret=[]
    
//     arr.forEach(v=>obj[v]=(obj[v] || 0)+1)
//     arr.map(v=> ret.push(v+'('+obj[v]+')'))

//     return ret
// }

// console.log(mostFoundOne([13, 1, true, 'str', 1, 'str',1]))

// // 16-masala ///////////////////////////////////////////////////////////////////////////////////////

// function nextMax(arr) {
//     let newArr=[]
//     for (let i = 0; i < arr.length; i++) {
//         let max=Math.max(...arr.slice(i+1))
//         if(max>arr[i]){
//             newArr.push(max)
//         }else{
//             newArr.push(-1)
//         }
//     }
//     return newArr
// }

// console.log(nextMax([12,5,4,7,9,8,3,6]));

// // 17-masala ///////////////////////////////////////////////////////////////////////////////////////

// function wordWithMostVowel(str) {
//     let max=''
//     str.split(' ').forEach(v=>{
//         if(countVowels(max)<countVowels(v)) max=v
//     })
//     return max
// }

// function wordWithMostVowelPro(str) {
//     return str.split(' ').reduce((a, b)=>{
//         if(countVowels(a)<countVowels(b)){
//             return b
//         }else{
//             return a
//         }
//     })
// }

// console.log(wordWithMostVowel("eng ko'p unli qatnashgan so'z"));
// console.log(wordWithMostVowelPro("eng ko'p unli qatnashgan so'z"));

// // yordamchi funksiya
// function countVowels(str) {
//     let count=0
//     let vowels=['a', 'e', 'i', 'o', 'u']
//     str.split('').forEach(v => {if(vowels.includes(v)) count++})
//     return count
// }