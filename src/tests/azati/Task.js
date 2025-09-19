// var a = 22

// const bar = {
//   a: 10,
//   sum: () => {
//     return this.a * 2;
//   }
// };

// bar.sum()
//----------------------------------
// console.log('5')

// async function fetchData() {
//     console.log('after')
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log('before')
// }

// fetchData()

// console.log('2')

//----------------------------------
// function getData() {
//   return fetch('https://google.com').then(r => r.text())
// }

// const result  = await getData();
// console.log(result);

//----------------------------------
// let obj = {};

// obj["1"] = 1;
// obj[1] = 2;

// console.log(obj["1"]);

//----------------------------------

// const a = {}
// const b = {}
// a[b] = 1
// console.log(a) 
// console.log(b) 

//----------------------------------
// class B {
//   constructor() {
//       this.name = 'ivan'; 
//   }

//   method = () => { 
//       console.log(this.name);
//   }

//   method2() {
//       console.log(this.name);
//   }
// }

// const instance = new B();
// instance.method(); 
// instance.method2(); /
// const {method, method2) = instance
// method()
// method2()

//----------------------------------
// const numberValue = 10
// const objValue = {
//     c: 10,
// }

// function test1(a) {
//    return a+=10
// }

// function test2(b) {
//     return b.a = 11
// }

// test1(numberValue)
// test2(objValue) 
//----------------------------------

// function print() {
//   console.log("1");
// }
//   console.log("2");

// async function foo() {
//   console.log("3");
//   await print();
//   console.log("4");
// }

// foo();

// console.log(5);2 3 5 1 4

// for (var i = 0; i < 3; i++) {
// setTimeout(function log() {
//     console.log(i);
//  }, 1000)
// }

//----------------------------------

// const data = {
//   name: 'ivan',
//   adresses: {
//     city: 'Minsk'
//   }
// }
// // 
// const secondData = Object.assign(data)

// secondData.adresses.city = 'Homel'

// console.log(data.adresses.city, 'data') //
// console.log(secondData.adresses.city, 'data2') //

//----------------------------------

// 1)?.
// 2)...
// 3)?? 
// 4)!!
// 4)|| false || true
// 5)&& false && true
// 6)structuredClone()
// 7)[].at()
// 8)Object.groupBy
// 9)in
// 10)HasOwnProperty
// 11)toReversed()
// 12)[].with
// css- ~+ >

// useEffect(() => {
//   return () => console.log('1')
// },[])

// //----------------------------------
// function foo() {
//   const x = 10;

//   return {
//     x: 20,
//     bar: () => {
//       console.log(this.x);
//     },
//     baz: function() {
//       console.log(this.x);
//     }
//   }
// }

// const obj1 = foo();
// obj1.bar()
// obj1.baz()

// const obj2 = foo.bind({ x: 30 }).bind({ x: 40 })();

// obj2.bar() 
// obj2.baz()

//----------------------------------

// Promise.reject(1)  // 
//   .catch(r => r + 1) // 
//   .catch(r => r + 1) //
//   .catch(r => r + 1) //
//   .then(r => r + 1) // 
//   .finally(r => r + 10) //  
//   .then(r => r + 10) //

  
// var a = 'foo';

// function test(arg) {
//   /////
//   console.log(a)

//   if (arg) {
//     var a = 'bar'
//   }
// };

// test()

//----------------------------------

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function((response){
//     console.log(response)
// })
// .catch(function(error) {
//     console.log(error)
// })

// while(true) console.log('1');


// setTimeout(() => console.log(2))

// Promise.resolve().then(() => console.log(3))

// Promise.resolve().then(() => setTimeout(() => console.log(4)))

// Promise.resolve().then(() => console.log(5))

// setTimeout(() => console.log(6))

// console.log(7)


// let x = {a: 1, b: 2}

// function fn1(x) {
//     x.a = 5
// }

// function fn2() {
//     x.a = 5
// }

// function fn3(x) {
//     x = 5
// }

// function fn4() {
//     x = 5
// }

// fn1(x)
// console.log(x, '1') // 

// fn2(x)
// console.log(x, '2') // 

// fn3(x)
// console.log(x, '3') //

// fn4(x)
// console.log(x, '4') //

// String.prototype.sayHi = () => {
//   return 'Hello'
// }

// const person1 = 'Alex'
// const person2 = new String('Alex')

// console.log(person1 === person2)
// console.log(person2.sayHi())


// Дописать функцию parseCSV

// input

// const csvData = `
// Name, Age, City
// John Doe, 29, New York
// Jane Smith, 25, Los Angeles
// Alex Brown, 31, San Francisco
// `;

// //Output

// [
//   {
//     "Name": "John Doe",
//     "Age": "29",
//     "City": "New York"
//   },
//   {
//     "Name": "Jane Smith",
//     "Age": "25",
//     "City": "Los Angeles"
//   },
//   {
//     "Name": "Alex Brown",
//     "Age": "31",
//     "City": "San Francisco"
//   }
// ]

// const parseCSV = (string) => {

// }

// parseCSV()


// Дописать функцию summEven, которая принимает массив чисел и суммирует только четные числа, возвращает число
// const summEven = (arr) => {

// }

// summEven([1,2,2,4]) 8
// summEven([3,3,4,2]) 6

// -----------------------------

// Необходимо вызвать функцию sayName с полем name из объекта obj (привязать контекст)

// const obj = {
//     name: 'ivan'
// }

// const sayName = function() {
//     return `Имя пользователя ${this.name}`
// }

// sayName().bind(obj)

// Дописать функцию fruitsQty, которая принимает массив строк и необходимо вернуть объект, в котором ключ - слово, а значение - количество повторений этого слова в массиве

// const fruitsQty = (arr) => {
//   return arr.reduce((acc, val) => {

//   }, {})
// }
// const fruits = ['banan', 'apple', 'banan']  
// {banan: 2, apple: 1}

// Дана функция, которая получает в качестве параметра callback. Который в качестве аргумента получает сообщение ввида:{id: 1, text: "Test message"}
// Необходимо написать callback который будет выполнять функцию render в правильной последовательности. Т.е. нам могут прийти сообщения: 
// {id: 1, text: "Test message1"},{id: 3, text: "Test message3"},
// {id: 2, text: "Test message2"}
// а выполнится в таком порядке:{id: 1, text: "Test message1"},
// {id: 2, text: "Test message2"},{id: 3, text: "Test message3"}

// connect(url, (msg) => {
 // ...
// });

/*
Даны 3 асинхронные функции со случайным setTimeout
Нужно написать код, который выведет в консоль:
A
B
C
*/

// function foo(callback) {
//   setTimeout(function () {
//     callback("A");
//   }, Math.random() * 100);
// }

// function bar(callback) {
//   setTimeout(function () {
//     callback("B");
//   }, Math.random() * 100);
// }

// function baz(callback) {
//   setTimeout(function () {
//     callback("C");
//   }, Math.random() * 100);
// }

//  digitPermutation

// Получить такой массив сгруппировав схожие цифры
// Не учитывать нули

// [99,  123, 321, 3201, 900000000000009, 2130000, 9]
// ->
// ["[99, 900000000000009], [123, 321, 3201, 2130000], [9]"]

// function digitPermutation(arr) {
//   ...
// }

//Написать функцию, которая преобразует первую букву в строке к верхнему регистру
//"пример" => "Пример"

// function capitalizeFirstLetter(val) {
//    
// }

//Развернуть массив
// const upArray = (nums) => {

// }

// console.log(upArray([1,[1,2], [1,2,[3]]])) // [1,1,2,1,2,3]

// https://leetcode.com/problems/two-sum/description/
// https://leetcode.com/problems/event-emitter/description/