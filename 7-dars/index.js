'use strict';

// // Amaliyot /////////////////////////////////////////////////
// // 1-masala ////////////////////////////////////////////////////////////////////////////////

// class Animal {
//     constructor(ism, turi, tone){
//         this.name= ism
//         this.species = turi
//         this.tone= tone
//     }

//     speak(){
//         const tone= {
//             cat: 'miyov',
//             dog: 'vov vov',
//             lion: 'hrrrrr'
//         }

//         if(this.tone) return this.tone
//         return tone[this.species] || 'gapirmaydigan xayvon'
//     }
// }

// let it = new Animal('tuzik', 'dog')
// let sher = new Animal('dilozor', 'lion')
// let pishak = new Animal('najim', 'cat')
// let qochqor = new Animal('chempion', 'sheep', 'baaaaaaaaaaa')

// console.log(it.speak())
// console.log(sher.speak())
// console.log(pishak.speak())
// console.log(qochqor.speak())

// // 2-masala ////////////////////////////////////////////////////////////////////////////////

//  class Product {
//     static #arr= []
//     constructor(name, type, weight, price){
//         this.name=name
//         this.type=type
//         this.weight=weight
//         this.price=price

//         Product.#arr.push(this)
//     }

//     static byPrice(){
//         return Product.#arr.sort((a, b)=>a.price-b.price)
//     }
    
//     static byWeight(){
//         return Product.#arr.sort((a, b)=>a.weight-b.weight)
//     }
//  }


//  let a = new Product('snikers', 'oziq_ovqat', 300, 12000)
//  let b = new Product('pistolet', 'oyinchoq', 150, 25000)
//  let c = new Product('shakar', 'oziq_ovqat', 1000, 8000)
//  let d = new Product('olma', 'meva_cheva', 1000, 9000)

//  console.log(Product.byPrice())
//  console.log(Product.byWeight())

// // 3-masala ////////////////////////////////////////////////////////////////////////////////

// class User {
//     static users=[]

//     constructor(username, password){
//         if(!User.users.some(v=>v.username===username)){
//             this.username=username
//             this.password=password

//             User.users.push(this)
//         }else{
//             console.log(`${username} useri band. bohsqasini kiriting`);
//         }
//     }


//     static login(username, password){
//         if(User.users.some(v => 
//             v.username==username &&
//             v.password==password
//         )){
//             console.log('xush kelibsiz')
//         }else{
//             console.log("Login yoki parol xato")
//         }
//     }

//     static getUsers(){
//         return this.users
//     }
    
// }

// let user1=new User('ahmadjon', 12345678)
// let user2=new User('ali', 11111111)
// let user3=new User('ahmadjon', 20010707) // user band deb chiqadi


// console.log(User.getUsers());


// User.login('ahmadjon', 12345678)
// User.login('ali', 11111111)
// User.login('ahmadjon', 20010707)

// // 4-masala ////////////////////////////////////////////////////////////////////////////////

// class Flight {
//     static seatsTemple() {
//         let seatsTemple={}
//         for (let i = 1; i <= 25; i++) {
//             seatsTemple[i]=null        
//         }
//         return seatsTemple
//     }

//     constructor(flightNumber, departureTime, destination){
//         this.flightNumber=flightNumber
//         this.departureTime=departureTime
//         this.destination=destination
//         this.seats={...Flight.seatsTemple()}
//     }

//     bookSeat(seatNum, name){
//         if(!this["seats"][seatNum]){
//             this["seats"][seatNum]=name
//             console.log(`${seatNum}-o'rindiq ${name} nomiga rasmiylashtirildi`)
//         }else{
//             console.log(`${seatNum}-o'rindiq band`)
//         }
//     }

//     cancelSeat(seatNum){
//         if(this["seats"][seatNum]){
//             this["seats"][seatNum]=null
//             console.log(`${seatNum}-o'rindiq uchun buyurtma bekor qilindi`)
//         }else{
//             console.log(`${seatNum}-o'rindiq allaqachon bo'sh`)
//         }
//     }

//     getAvailableSeats(){
//         let available=[]
//         for(const k in this.seats){
//             if(!this['seats'][k]) available.push(k)
//         }
//     console.log(`bo'sh o'rindiqlar: ${available.join(', ')}`)
//     }
// }

// let fligt1=new Flight(1, 1200, 'BAA')
// fligt1.bookSeat(1, "Ahmadov Ahmadjon")
// fligt1.bookSeat(3, "Ali Valiyev")
// fligt1.bookSeat(1, "Alisher Navoiy")
// fligt1.cancelSeat(3)
// fligt1.cancelSeat(3)
// fligt1.cancelSeat(15)
// fligt1.getAvailableSeats()


// // 5-masala ////////////////////////////////////////////////////////////////////////////////

// class Course{
//     constructor(name, code){
//         this.courseName=name
//         this.courseCode=code
//         this.students={}
//     }

//     addStudent(id, name){
//         this['students'][id]=name
//     }

//     removeStudent(id){
//         if(this['students'][id]) {
//             delete this['students'][id]
//         }
//     }

//     getStudents(){
//         return this.students
//     }
// }

// let matematika=new Course('Beginner', 11030)
// matematika.addStudent(254, 'Ali')
// matematika.addStudent(126, 'Vali')
// console.log(matematika.getStudents())
// matematika.removeStudent(254)
// console.log(matematika.getStudents())


// // 6-masala ////////////////////////////////////////////////////////////////////////////////

// class Wallet{
//     constructor(money=0){
//         this.balance=Number(money)
//     }

//     spendMoney(money){
//         if(money<=this.balance){
//             this.balance-=money
//         }else{
//             console.log("Xisobingizda yetarli mablag' mavjud emas");
//         }
//     }

//     addMoney(money){
//         this.balance+=Number(money)
//     }

//     getBalance(){
//         return this.balance
//     }
// }

// let kiwi = new Wallet('900')
// console.log(kiwi.getBalance());
// kiwi.addMoney(400)
// kiwi.spendMoney(800)
// console.log(kiwi.getBalance());
// kiwi.addMoney(50)
// kiwi.spendMoney(600)
// console.log(kiwi.getBalance());

// // 7-masala ////////////////////////////////////////////////////////////////////////////////


// class Notification{
//     constructor(message, date){
//         this.message=message
//         this.date=date
//     }

//     get sendNotification(){
//         console.log(this.message);
//     }

//     clearNotification(){
//         this.message=''
//     }
// }

// let txt=new Notification('Uyga vazifa berildi', Date.now()+24*60*60*1000)

// txt.sendNotification
// txt.clearNotification()
// console.log(txt)