// function makeMultipleLister(num) {
//   return function () {
//     for (let i = 1; i <= 100; i++) {
//       if (i % num == 0) {
//         console.log(i);
//       }
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// let total = 0;
// function add(num) {
//   total += num;
//   console.log(total);
// }
// function subtract(num) {
//   total -= num;
//   console.log(total);
// }

// add(1);
// add(42);
// subtract(5);

// function later(callback, message) {
//   return function () {
//     callback(message);
//   };
// }

// const logger = (message) => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// function later2(fn, arg) {
//   return function (arg2) {
//     fn(arg, arg2);
//   };
// }

// const notify = function (message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!
// "use strict";

// function bind(context, fn){
//     return fn.call(context);
// }

// let obj = {};
// let boundFunc = bind(obj, function () {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

// function makeCounterLogger(start) {
//   return function (stop) {
//     if (start < stop) {
//       for (let i = start; i <= stop; i++) {
//         console.log(i);
//       }
//     } else if (start > stop) {
//       for (let i = start; i >= stop; i--) {
//         console.log(i);
//       }
//     }
//   };
// }

// let countlog = makeCounterLogger(5);
// countlog(8);

// countlog(2);

// function makeList() {
//   let startlist = [];
//   return function (item) {
//     if (item) {
//       startlist.push(item);
//     } else {
//       startlist.forEach((i) => console.log(i));
//     }
//   };
// }

// let list = makeList();
// list("ahh");
// list("joe");
// list();

// thousands of lines of messy JavaScript code!

// {
//   let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 2 === 0 && array[index] > largest) {
//       largest = array[index];
//     }
//   }
//   console.log(largest); // 24
// }

// more messy JavaScript code

// let obj = {
//   foo: "foo",
//   qux: "qux",
//   bar: "bar",
// };

// let obj2 = { ...obj };
// let { ...obj3 } = obj;

// obj2.foo = "ahhh";
// console.log(obj3);
// console.log(obj2);
// console.log(obj);

//let foo = require("./foo");

// import foo from "./foo.js";

// foo();

// let a = new Map();
// a.set("b", "bb");

// console.log(a.get("b"));

// function myBind(callback, context, ...partialArgs) {
//   return function (...args) {
//     const fullArgs = partialArgs.concat(args);
//     let answer = callback.apply(context, fullArgs);
//     return answer;
//   };
// }

// function addNumbers(a, b, c = 1) {
//   return (a + b) * c;
// }

// const addFive = myBind(addNumbers, null, 5);
// console.log(addFive(10));
// // 15

// function newStack(){
//     let a = [];
//     return {
//         push(arg){
//             a.push(arg);
//         },
//         pop(){

//         },
//         printStack(){

//         }
//     }
// }

// function delegate(context, method, ...args) {
//   return function () {
//     context[method].call(context, ...args);
//   };
// }

// let foo = {
//   name: "test",
//   bar: function (greeting) {
//     console.log(greeting + " " + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, "bar", "hello"),
// };

// baz.qux(); // logs 'hello test';

// foo.bar = function () {
//   console.log("changed");
// };

// baz.qux(); // logs 'changed'

// let Account = {
//     reanonymize: function(password){
//         if(password===this.password){
//             this.password = "randomcharacters";
//             return true;
//         }
//     },
//   init: function (email, password, firstName, lastName) {
//     this.email = email;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//     return this;
//   },
// };

// function foo(initialValue) {
//   let total = initialValue;
//   return function (adjustmentValue) {
//     total += adjustmentValue;
//     return total;
//   };
// }

// let bar = foo(10);
// let result = bar(-2);
// console.log(result);
// result += bar(5);
// console.log(result);
// result += bar(3);
// console.log(result);
// result += bar(-4);
// console.log(result);

// let left = 0;
// let right = 1;
// console.log((() => left + right)(3, 5));

// let array = [1, 2, 3];

// let newArray = { ...array };

// newArray.push(4);
// console.log(array);
// console.log(newArray);

// let scores = { player: 0, computer: 0 };

// function updateScores(winner, { ...scores }) {
//   scores.hasOwnProperty(winner) ? scores[winner]++ : null;
//   return scores;
// }

// let scores2 = updateScores("player", scores);
// console.log(scores, scores2);

//throw "This is an error!";

// function foo() {
//   var bar = 42;
//   console.log(global.bar); // undefined
// }
// foo.prototype.boo = 5;
// console.log(foo.prototype.boo);
let a = {
  aa: "ha",
};

let b = {
  aa: "ha",
};

console.log(a == b);
