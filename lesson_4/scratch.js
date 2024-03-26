// // let a = {
// //   foo: 1,
// //   bar: 2,
// //   bar2: 3,
// //   bar3: 4,
// // };

// // let b = Object.create(a);

// // console.log(a.hasOwnProperty("foo")); // => true
// // console.log(b.hasOwnProperty("foo"));

// // //console.log(b.foo);
// // b.foo = 5;
// // b.bar = 55;
// // // console.log(b.foo);
// // // console.log(a.foo);
// // // console.log(b.hasOwnProperty("foo"));
// // // console.log(b.hasOwnProperty("bar"));

// // // console.log(b.hasOwnProperty("bar"));
// // // console.log(Object.getPrototypeOf(b));
// // // console.log("----------------------");

// // Object.keys(b).forEach((key) => {
// //   console.log(`${key} is ${b[key]}`);
// // });
// // console.log("----------------------");
// // Object.entries(b).forEach((entry) => {
// //   console.log(entry);
// // });
// // console.log("----------------------");
// // for (p in b) {
// //   console.log(`${p} is ${b[p]}`);
// // }

// // let a = {
// //   foo: 1,
// // };

// // let b = {
// //   bar: 2,
// // };

// // let c = {
// //   baz: 3,
// // };

// // Object.setPrototypeOf(b, a);
// // Object.setPrototypeOf(c, b);
// // console.log(Object.prototype.isPrototypeOf(a));
// // let aa = [1, 2, 3];

// // console.log(Object.prototype.toString.call(5).split(" ")[1].slice(0, -1));

// // function logNum(a) {
// //   console.log(this.num);
// //   console.log(a);
// // }

// // let obj = {
// //   num: 42,
// // };
// // let obj2 = {
// //   num: 45,
// // };

// // logNum.call(obj2, "hi"); // logs 42

// // let obj1 = {
// //   logNum: function () {
// //     console.log(this.num);
// //   },
// // };

// // let obj2 = {
// //   num: 42,
// // };

// // obj1.logNum.call(obj2); // logs 42

// // function sumNum(num1) {
// //   return this.num + num1;
// // }

// // let obj = {
// //   num: 42,
// // };

// // let sumNum2 = sumNum.bind(obj);
// // console.log(sumNum2(5));

// // console.log(obj.num);

// // let object = {
// //   a: "hello",
// //   b: "world",
// //   foo: function () {
// //     return this.a + " " + this.b;
// //   },
// // };

// // console.log(object.foo());

// // let obj = {
// //   a: "hello",
// //   b: "world",
// //   foo: function () {
// //     (function bar() {
// //       console.log(this.a + " " + this.b);
// //     })
// //   },
// // };

// // console.log(obj.foo()); // => undefined undefined
// // let obj2 = {
// //   b: "hello",
// //   a: "world",
// // };

// // // let obj = {
// // //   a: "hello",
// // //   b: "world",
// // //   foo: function () {
// // //     const bar = (() => {
// // //       console.log(this.a + " " + this.b);
// // //     })();

// // //     //bar();
// // //   },
// // //   foo2: () => {
// // //     console.log(this.a);
// // //   },
// // // };

// // // obj.foo(); // => hello world
// // // obj.foo2(); // => hello world

// // let obj3 = Object.create(obj2);

// // console.log(obj2.isPrototypeOf(obj3));

// // let foo = { bar: 1, xyz: 3 };
// // let baz = Object.create(foo);
// // baz.qux = "Why not?";

// // Object.keys(baz).forEach((prop) => console.log(prop));

// // const OPERATIONS = {
// //   "+": (num1, num2) => num1 + num2,
// //   "-": (num1, num2) => num1 - num2,
// //   "*": (num1, num2) => num1 * num2,
// //   "/": (num1, num2) => num1 / num2,
// // };

// // let getOperation = (operation) => OPERATIONS[operation];

// // let compute = function (operation, num1, num2) {
// //   return operation(num1, num2);
// // };

// // // console.log(compute(getOperation("/", 18, 6)) === 3);
// // // console.log(compute("*", 2, 8) === 16);
// // console.log(compute(getOperation("+"), 5, 9) === 14);

// // let o = {
// //   a: 5,
// //   ah() {
// //     return this;
// //   },
// // };

// // function foo(x, y, z) {
// //   console.log(this.a);
// // }

// // foo.call("o", 1, 2, 3);

// // function bar() {
// //   console.log("good morning");
// // }

// // global.inner = {
// //   bar() {
// //     console.log("good afternoon");
// //   },
// // };

// // let obj = {
// //   inner: {
// //     bar() {
// //       console.log("good night");
// //     },

// //     foo() {
// //       bar();
// //     },
// //   },

// //   bar() {
// //     console.log("wake up");
// //   },

// //   foo() {
// //     this.inner.bar();
// //     inner.bar();
// //     bar();
// //   },
// // };

// // obj.foo();

// // function bar() {
// //   console.log("good morning");
// // }

// // global.inner = {
// //   bar() {
// //     console.log("good afternoon");
// //   },
// // };

// // let obj = {
// //   inner: {
// //     bar() {
// //       console.log("good night");
// //     },

// //     foo() {
// //       bar();
// //     },
// //   },

// //   bar() {
// //     console.log("wake up");
// //   },

// //   foo() {
// //     this.inner.bar();
// //     inner.bar();
// //     bar();
// //   },
// // };

// // let foo = function () {
// //   console.log("go to sleep");
// // };

// // function go(foo) {
// //   foo();
// // }

// // go(obj.foo);

// // let cat = {
// //   name: "Pudding",
// //   colors: "black and white",
// //   identify() {
// //     let report = function () {
// //       console.log(`${this.name} is a ${this.colors} cat.`);
// //     }.bind(cat);
// //     report();
// //   },
// // };

// // cat.identify();
// // // Expected output: Pudding is a black and white cat.

// // let logResult = function (func) {
// //   let result = func();
// //   console.log(result);
// //   return result;
// // };

// // let foo = function () {
// //   let sue = {
// //     name: "Sue Perkins",
// //     age: 37,
// //     myAge() {
// //       return `${this.name} is ${this.age} years old.`;
// //     },
// //   };
// //   console.log(sue.myAge.call(sue));
// //   logResult(sue.myAge);
// // };

// // foo();

// // let cats = {
// //   names: ["Butterscotch", "Pudding", "Fluffy"],
// //   foo() {
// //     [1, 2, 3].forEach(function (number) {
// //       console.log(`${number}: ${this.names[number - 1]}`);
// //     }, this);
// //   },
// // };

// // cats.foo();
// // // Expected output:
// // // 1: Butterscotch
// // // 2: Pudding
// // // 3: Fluffy

// // let cat = {
// //   name: "Pudding",
// //   colors: "black and white",
// //   identify() {
// //     let report = () => {
// //       console.log(`${this.name} is a ${this.colors} cat.`);
// //     };
// //     report();
// //   },
// // };

// // cat.identify();

// // function createInvoice(services = {}) {
// //   let obj = {};
// //   if (services["phone"]) {
// //     obj["phone"] = services["phone"];
// //   } else {
// //     obj["phone"] = 0;
// //   }
// //   if (services["internet"]) {
// //     obj["internet"] = services["internet"];
// //   } else {
// //     obj["internet"] = 0;
// //   }
// //   obj.total = function () {
// //     return this.phone + this.internet;
// //   };

// //   return obj;
// // }

// // function invoiceTotal(invoices) {
// //   let total = 0;

// //   for (let index = 0; index < invoices.length; index += 1) {
// //     total += invoices[index].total();
// //   }

// //   return total;
// // }

// // let invoices = [];
// // invoices.push(createInvoice());
// // invoices.push(createInvoice({ internet: 6500 }));
// // invoices.push(createInvoice({ phone: 2000 }));
// // invoices.push(
// //   createInvoice({
// //     phone: 1000,
// //     internet: 4500,
// //   })
// // );

// // console.log(invoiceTotal(invoices)); // 31000

// // maxi.bark(); // 'Woof!'

// // maxi.hasOwnProperty("bark"); // false
// // dexter.hasOwnProperty("bark"); // false
// // biggie.hasOwnProperty("bark"); // false
// // Object.getPrototypeOf(maxi).bark === Dog.myPrototype.bark; // true
// // Object.getPrototypeOf(dexter).bark === Dog.myPrototype.bark; // true
// // Object.getPrototypeOf(biggie).bark === Dog.myPrototype.bark; // true

// // function Circle(radius) {
// //   this.radius = radius;

// //   Circle.prototype.area = function () {
// //     return Math.PI * this.radius * this.radius;
// //   };
// // }

// // let a = new Circle(3);
// // console.log(a.area());
// // console.log(a.hasOwnProperty("area"));

// // console.log(Object.getPrototypeOf(Array));
// // console.log(Array.prototype);
// // console.log(Object.getPrototypeOf(Array.prototype));
// // console.log(Object.getPrototypeOf(Object.prototype));

// // const Animal = function (species) {
// //   this.species = species;
// //   return species;
// // };

// // Animal.prototype.sleep = function () {
// //   console.log(`The ${this.species} is sleeping`);
// // };

// // let lion = new Animal("Panthera leo");
// // lion.sleep(); // TypeError

// // function Dog() {}

// // function Pet(type) {
// //   if (type === "dog") {
// //     return new Dog();
// //   } else if (type === "lion") {
// //     return "not a pet!";
// //   }
// // }

// // let dog = new Pet("dog");
// // let lion = new Pet("lion");
// // let cat = new Pet("cat");

// // console.log(dog.constructor);
// // console.log(lion.constructor);
// // console.log(cat.constructor);

// // class Foo {
// //   constructor(parm) {
// //     this.parm = parm;
// //     this.bob = function () {
// //       console.log("yuppers");
// //     };
// //   }

// //   static bar() {
// //     console.log("Static");
// //   }

// //   qux() {
// //     console.log("proto");
// //   }
// // }

// // let foo = new Foo(10);

// // console.log(foo.hasOwnProperty("bob"));
// // console.log(foo.hasOwnProperty("qux"));
// // console.log(Foo.hasOwnProperty("bar"));

// // function createCar(make, model, year) {
// //   return {
// //     make,
// //     model,
// //     year,
// //     started: false,
// //   };
// // }

// // //let car1 = createCar('Toyota', 'Corolla', 2016);

// // let carPrototype = {
// //   start: function () {
// //     this.started = true;
// //   },

// //   stop: function () {
// //     this.started = false;
// //   },
// // };

// // let car1 = Object.create(carPrototype);
// // car1.make = "Toyota";
// // car1.model = "Corolla";
// // car1.year = 2016;

// function createPet(animal, name) {
//   this.animal = animal;
//   this.name = name;
// }

// Object.assign(createPet.prototype, {

//   sleep: function () {
//     console.log("sleepin!");
//   },
//   wake: function () {
//     console.log("wakin!");
//   },
// });

// // let PetPrototype = {
// //   sleep: function () {
// //     console.log("I am sleeping");
// //   },
// //   wake: function () {
// //     console.log("I am awake");
// //   },
// //   init: function (animal, name) {
// //     this.animal = animal;
// //     this.name = name;
// //     return this;
// //   },
// // };

// let meow = new createPet("Cat", "Meowzers");
// console.log(meow.name);
// console.log(meow.animal);
// meow.wake();

// class TestP {
//   constructor() {
//     this.c = new TestC();
//     this.testPProperty = 7;
//   }
  
// }

// class TestC {
//   constructor() {
//     this.testCProperty = 8;
//   }
// }

// let a = new TestP();
// console.log(a.hasOwnProperty("d"));


//