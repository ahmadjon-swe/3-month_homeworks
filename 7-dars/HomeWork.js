'use strict';

// // 1-masala ////////////////////////////////////////////////////////////////////////////////
// class Person{
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }

//     greet(){
//         return "Assalom " +this.age+' yoshli ' +this.name
//     }
// }

// let a=new Person("Ali", 11)
// console.log(a.greet())


// // 2-masala ////////////////////////////////////////////////////////////////////////////////


// class BankAccount{
//     constructor(money=0){
//         this.balance=money
//     }

//     deposit(money){
//         this.balance+=money
//     }

//     withdraw(money){
//         if(money<=this.balance){
//             this.balance-=money
//         }else{
//             console.log("Kartangizda yetarlicha mablag' mavjud emas");
//         }
//     }

//     getBalance(){
//         return this.balance
//     }
// }

// let BRB = new BankAccount()

// BRB.deposit(800)
// BRB.withdraw(400)
// console.log(BRB.getBalance());
// BRB.deposit(50)
// BRB.withdraw(500)
// console.log(BRB.getBalance());

// // 3-masala ////////////////////////////////////////////////////////////////////////////////


// class Rectangele{
//     constructor(width, height){
//         this.height=height
//         this.width=width
//     }

//     get area(){
//         return this.height * this.width
//     }

//     get perimeter(){
//         return 2*(this.height+this.width)
//     }
// }

// let kv = new Rectangele(4, 5)

// console.log(kv.area);
// console.log(kv.perimeter);


// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// class Student{
//     constructor(name, id){
//         this.name=name
//         this.id=id
//         this.grades={}
//     }

//     setGrade(subject, grade){
//         this['grades'][subject]=grade
//     }

//     get GPA(){
//         let sum=0
//         for (const k in this.grades) {
//             sum+=this['grades'][k]/5
            
//         }
//         return Math.round((sum/Object.keys(this.grades).length)*100)
//     }
// }

// let me = new Student("Ahmadjon", 241566)
// me.setGrade('algebra', 5)
// me.setGrade('inliz tili', 5)
// me.setGrade('rus tili', 3)
// console.log(me.GPA);


// // 5-masala ////////////////////////////////////////////////////////////////////////////////


// class Clock {
//     constructor(){
//         this.time=new Date()
//         this.timer=setInterval(()=>{
//         this.time=new Date(),
//         // xar soniyada chiqarish
//         // console.log(`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`);
//         }, 1000)
//     }

//     displayTime(){
//         console.log(`${this.time.getHours()}:${this.time.getMinutes()}:${this.time.getSeconds()}`);
//         clearInterval(this.timer)
//     }
// }

// let now=new Clock()

// now.displayTime()

// // 6-masala ////////////////////////////////////////////////////////////////////////////////

// class Employee{
//     constructor(name, position, salary){
//         this.name-name
//         this.position=position
//         this.salary=salary
//     }

//     giveRaise(percentage){
//         this.salary*=1+percentage/100
//     }
// }

// let worker=new Employee("Ali", 'software engenier', 2000)
// console.log(worker);
// worker.giveRaise(100)
// console.log(worker);

// // 7-masala ////////////////////////////////////////////////////////////////////////////////


// class Order{
    
//     addItem(item, quantify){
//         this[item]=quantify
//     }

//     removeItem(item){
//         delete this[item]
//     }

//     get total(){
//         let sum=0
//         for (const k in this) {
//             sum+=this[k]
//         }
//         return sum
//     }
// }

// let order = new Order()
// order.addItem('notebook', 900)
// order.addItem('naushnik', 60)
// order.addItem('kitob', 15)
// console.log(order.total);
// console.log(order);
// order.removeItem('naushnik')
// console.log(order.total);
// console.log(order);



// // 8-masala ////////////////////////////////////////////////////////////////////////////////


// class Calculator{
//     static add(...numbers){
//         return numbers.reduce((a, b)=>a+b)
//     }

//     static subtract(num1, num2){
//         return num1-num2
//     }

//     static multiply(...numbers){
//         return numbers.reduce((a, b)=>a*b)
//     }

//     static divide(num1, num2){
//         return num1/num2
//     }
// }

// console.log(Calculator.add(1,2));
// console.log(Calculator.subtract(13,2));
// console.log(Calculator.multiply(3,2));
// console.log(Calculator.divide(1,2));


// // 9-masala ////////////////////////////////////////////////////////////////////////////////

// class Stack{
//     push(key,value){
//         this[key]=value
//     }
//     pop(){
//         let keys=Object.keys(this)
//         delete this[keys[keys.length-1]]
//     }
//     isEmpty(){
//         return !Object.keys(this).length>0
//     }
// }

// let obj=new Stack()
// console.log(obj.isEmpty());
// console.log(obj);
// obj.push('name', "Ahmadjon")
// obj.push('age', 24)
// obj.pop()
// console.log(obj.isEmpty());
// console.log(obj);

// // 10-masala ///////////////////////////////////////////////////////////////////////////////


// class Vehicle{
//     constructor(speed){
//         this.speed=speed
//     }
// }

// class Car extends Vehicle{
//     constructor(speed, fuel, tank){
//         super(speed)
//         this.fuel=fuel
//         this.tank=tank
//     }
// }

// let v=new Car(330, 11, 50)

// console.log(v);