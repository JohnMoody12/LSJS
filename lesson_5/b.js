// setTimeout(function () {
//   console.log("!");
// }, 3000);

// setTimeout(function () {
//   console.log("World");
// }, 1000);

// console.log("Hello");

// function delayLog() {
//   for (var i = 1; i <= 10; i++) {
//     //setTimeout(() => console.log(i), i * 1000);
//   }
// }

// delayLog();
// function start() {
//   let i = 0;
//   let b = setInterval(function () {
//     i++;
//     console.log(i);
//   }, 1000);
//   return b;
// }

// let id = start();
// //clearInterval(id);
// // Call save() every 10 seconds

// // Later, perhaps after the user submits the form

// function resolveInner() {
//   console.log("ahh");
// }

// let aa = 5;

// let a = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     aa = 10;
//     if (aa === 10) {
//       resolve();
//     } else if (aa === 5) {
//       reject();
//     }
//   }, 1000);
// }).then(
//   () => console.log(a),
//   () => console.log("nope")
// );

// console.log(a);

// function makeCounterLogger(a) {
//   return function (b) {
//     for (let i = a; i <= b; i++) {
//       console.log(i);
//     }
//   };
// }

// let l = makeCounterLogger(5);

// l(11);
// let items2 = ["a", "b"];
// function makeList() {
//   let items2 = [];
//   return {
//     items: [],

//     add: function (item) {
//       let index = items2.indexOf(item);
//       if (index === -1) {
//         items2.push(item);
//         console.log(item + " added!");
//       }
//     },

//     list: function () {
//       if (items2.length === 0) {
//         console.log("The list is empty.");
//       } else {
//         items2.forEach(function (item) {
//           console.log(item);
//         });
//       }
//     },

//     remove: function (item) {
//       let index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//         console.log(item + " removed!");
//       }
//     },
//   };
// }

// let list = makeList();
// list.add("test");
// list.list();

// thousands of lines of messy JavaScript code!
// let array = [5, 10, 12, 7, 50, 6, 24, -10, -200, 37];

// let l = (function (array) {
//   let largest = -Infinity;
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] % 2 === 0 && array[index] > largest) {
//       largest = array[index];
//     }
//   }

//   return largest;
// })(array);

// console.log(l);

// let bar = (function (prod) {
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result);

// (function a(number) {
//   if (number >= 0) {
//     console.log(number);
//     a(number - 1);
//   } else {
//     return;
//   }
// })(7);

// console.log(
//   (function (array) {
//     let ideal = array.length;
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       ideal += i;
//       sum += array[i];
//     }
//     return ideal - sum;
//   })([3, 0, 1])
// );

// console.log(
//   (function (array) {
//     let ideal = array.length;
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       ideal += i;
//       sum += array[i];
//     }
//     return ideal - sum;
//   })([0, 1])
// );

// let Account = (function () {
//   let UserFirstName;
//   return {
//     init(firstname) {
//       UserFirstName = firstname;
//       return this;
//     },
//     firstName() {
//       console.log(this.firstName);
//     },
//   };
// })();

// let Account = () => {
//   let userName;
//   let userPassword;
//   let userEmail;
//   let userLastName;

//   function anonymize() {
//     let displayName = "";
//     let chars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
//     for (let i = 0; i < 16; i += 1) {
//       displayName += chars[randomNum(chars.length)];
//     }

//     return displayName;
//   }

//   function randomNum(length) {
//     return Math.floor(Math.random() * length);
//   }

//   function validatePassword(password) {
//     return userPassword === password;
//   }

//   return (function () {
//     return {
//       init: function (email, password, firstName, lastName) {
//         userName = firstName;
//         userPassword = password;
//         userEmail = email;
//         userLastName = lastName;
//         this.displayName = anonymize();
//         return this;
//       },

//       reanonymize: function (password) {
//         if (validatePassword(password)) {
//           this.displayName = anonymize();
//           return true;
//         } else {
//           return "Invalid password!";
//         }
//       },

//       resetPassword: function (password, newPassword) {
//         if (validatePassword(password)) {
//           userPassword = newPassword;
//           return true;
//         } else {
//           return "Invalid password!";
//         }
//       },

//       firstName: function (password) {
//         return validatePassword(password) ? userName : "Invalid Password!";
//       },

//       lastName: function (password) {
//         return validatePassword(password) ? userLastName : "Invalid Password!";
//       },

//       email: function (password) {
//         return validatePassword(password) ? userEmail : "Invalid Password!";
//       },

//       displayName: function () {
//         return this.displayName;
//       },
//     };
//   })();
// };

// let creator1 = Account();
// console.log(creator1);
// let creator2 = Account();
// let fooBar = creator1.init("foo@bar.com", "123456", "foo", "bar");
// let bazQux = creator2.init("baz@qux.com", "654321", "baz", "qux");
// console.log(bazQux.firstName("654321")); // logs 'baz'
// console.log(fooBar.firstName("123456")); // logs 'foo'

// function outerFunction() {
//   qux = 5;
// }
// outerFunction();
// console.log(outerFunction);

// function Pet(name, image) {
//   this.name = name;
//   this.image =  image;
// }
// let Image;
// var catImage;
// var pudding;
// Pet.prototype.walk;

// Pet.prototype.walk = function() {
//   console.log(`${this.name} is walking.`);
// };

// Image = class {
//   constructor(file) {
//     this.file = file;
//   }
// }
// catImage = new Image("cat.png");
// pudding = new Pet("Pudding", catImage);

// let namez = "ah";
// function bob() {
//   console.log(namez);
// }
// namez = "afafsdf";
// bob();

// let foo = function () {
//   return function () {
//     return 10;
//   };
// };

// console.log(foo()()); // => 15

// thousands of lines of messy JavaScript code!

// console.log(
//   (() => {
//     let array = [5, 10, 12, 7, 9, 6, 24, -10, -200, 37];
//     let largest = -Infinity;
//     for (let index = 0; index < array.length; index += 1) {
//       if (array[index] % 2 === 0 && array[index] > largest) {
//         largest = array[index];
//       }
//     }

//     return largest;
//   })()
// ); // 24

// // more messy JavaScript code

// bob = (function () {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// console.log(bob);

// function foo(start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// console.log(result);
// result += bar(4);
// console.log(result);
// result += bar(5);
// console.log(result);

let obj = {
  a: 5,
  go() {
    this.a = 42;
  },
};

let doIt = obj.go;
doIt.call(obj);
console.log(obj.a); // 5
