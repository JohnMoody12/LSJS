// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(obj, method, value) {
//   if (obj.hasOwnProperty(method)) {
//     obj[method] = value;
//   } else if (Object.getPrototypeOf(obj)) {
//     assignProperty(Object.getPrototypeOf(obj), method, value);
//   }
// }

// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// assignProperty(fooC, "qux", 3);
// console.log(fooA.qux); // undefined
// console.log(fooC.qux); // undefined
// console.log(fooA.hasOwnProperty("qux")); // false
// console.log(fooC.hasOwnProperty("qux")); // false

// class Animal {
//   move() {
//     console.log("not moving");
//   }
// }

// class Fish extends Animal {
//   move() {
//     console.log("swimming");
//   }
// }

// class Cat extends Animal {
//   move() {
//     console.log("walking");
//   }
// }

// // Sponges and Corals don't have a separate move method - they don't move
// class Sponge extends Animal {}
// class Coral extends Animal {}

// let animals = [new Fish(), new Cat(), new Sponge(), new Coral()];
// animals.forEach((animal) => animal.move());
// class Animal {}
// class Cat extends Animal {}
// let fluffy = new Cat();
// console.log(fluffy instanceof Animal);

// function Person(name) {
//   this.name = name;
//   this.school = undefined;
// }

// Person.prototype.speak = 5;

// let person = new Person("John");
// console.log(person.speak);

// let b = { a: "hi" };
// let c = Object.create(b);
// c["a"] = "hii";
// console.log(Object.getPrototypeOf(b));
// console.log(Object.getPrototypeOf(c));
// console.log(c.hasOwnProperty("aa"));
// console.log(b["a"]);

// function Dog(name, breed, weight) {
//   // deleted Object.setPrototypeOf(this, Dog.myPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function () {
//   console.log(this.weight > 20 ? "Woof!" : "Yip!");
// };

// function Circle(radius) {
//   //this.radius = radius;
// }

// Circle.prototype.area = function (radius) {
//   return radius * radius;
// };

// let a = new Circle(3);

// console.log(a.area(4));

function Person(name, school) {
  this.name = name;
  this.school = school;
}

Person.prototype.speak = function () {
  return `Hello, my name is ${this.name}.`;
};

function Child(name, school) {
  Person.call(this, name, school);
}

Child.prototype.learn = function () {
  return "I'm going to school!";
};

let child = new Child("Suzy", "PS 33");
console.log(child instanceof Child); // true
console.log(child instanceof Person === false); // true
console.log(Object.getPrototypeOf(child) === Child.prototype); // true
console.log(Object.getPrototypeOf(child).constructor === Child); // true
console.log(child.school === "PS 33"); // true
console.log(child.learn() === "I'm going to school!"); // true
console.log();

let person = new Person("Pete");
console.log(person instanceof Child === false); // true
console.log(person instanceof Person); // true
console.log(Object.getPrototypeOf(person) === Person.prototype); // true
console.log(Object.getPrototypeOf(person).constructor === Person); // true
console.log(person.school === undefined); // true
console.log(person.speak() === "Hello, my name is Pete."); // true
