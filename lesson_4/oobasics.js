// //console.log([1, 2, 3].constructor.name);

// // class Cat {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   greet = function () {
// //     console.log(`I'm a cat! ${this.name}`);
// //   };

// //   rename(name) {
// //     this.name = name;
// //   }
// //   static genericGreeting() {
// //     console.log("greet");
// //   }
// // }

// // let kitty = new Cat("Sophie");
// // kitty.greet();

// // kitty.rename("Purfect");
// // kitty.greet();
// // Cat.genericGreeting();

// // class Person {
// //   constructor(name = "John Doe") {
// //     this.name = name;
// //   }
// // }

// // let p1 = new Person();
// // let p2 = new Person("Pepe");
// // console.log(p1.name);
// // console.log(p2.name);

// // class Vehicle {
// //   startEngine() {
// //     return "ready to go";
// //   }
// // }

// // class Truck extends Vehicle {
// //   constructor(bedType) {
// //     super();
// //     this.startEngine();
// //     this.bedType = bedType;
// //   }

// //   startEngine(speed) {
// //     return super.startEngine() + ` ${speed}`;
// //   }
// // }
// // class Car extends Vehicle {}

// // let truck = new Truck("Short");
// // console.log(truck.bedType);
// // console.log(truck.startEngine("fast"));

// // class Cat {
// //   constructor(name) {
// //     this.name = name;
// //   }

// //   greet() {
// //     return `Hi this is ${this.name}`;
// //   }
// // }

// // let walkMixin = {
// //   walk() {
// //     return "Let's go for a walk";
// //   },
// // };

// // let kitty = new Cat("Mao");

// // Object.assign(Cat.prototype, walkMixin);

// // console.log(kitty.greet());
// // console.log(kitty.walk());

// // const swimMixin = {
// //   swim() {
// //     return `${this.name} is swimming.`;
// //   },
// // };

// // class Fish {
// //   constructor(name) {
// //     this.name = name;
// //     Object.assign(this, swimMixin);
// //   }
// // }

// // class Dog {
// //   constructor(name) {
// //     this.name = name;
// //   }
// // }

// // class Maltese extends Dog {
// //   constructor(name) {
// //     super(name);
// //     Object.assign(this, swimMixin);
// //   }
// // }

// // let dog1 = new Maltese("Buddy");
// // let fish1 = new Fish("Nemo");

// // console.log(dog1.swim());
// // console.log(fish1.swim());

// // let towMixin = {
// //   tow() {
// //     return "I can tow";
// //   },
// // };

// // class Vehicle {
// //   constructor(year) {
// //     this.year = year;
// //   }
// // }

// // class Truck extends Vehicle {
// //   constructor(year, name) {
// //     super(year);
// //     this.name = name;
// //   }
// // }
// // Object.assign(Truck.prototype, towMixin);

// // class Car {}

// // let truck = new Truck(2003);
// // console.log(truck.tow());
// // console.log(truck.year);
// // class Rectangle {
// //   constructor(width, length) {
// //     this.width = width;
// //     this.length = length;
// //   }

// //   getWidth() {
// //     return this.width;
// //   }

// //   getLength() {
// //     return this.length;
// //   }

// //   getArea() {
// //     return this.width * this.length;
// //   }
// // }

// // class Square extends Rectangle {
// //   constructor(side) {
// //     super(side, side);
// //   }
// // }

// // let square = new Square(5);
// // console.log(`area of square = ${square.getArea()}`); // area of square = 25
// // class Cat {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   speaks() {
// //     return `${this.name} says meowwww.`;
// //   }
// // }

// // let fakeCat = Object.create(Cat.prototype);

// // console.log(fakeCat instanceof Cat); // logs true
// // console.log(fakeCat.name); // logs undefined
// // console.log(fakeCat.speaks()); // logs undefined says meowwww.

// // class Pet {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }

// // class Cat extends Pet {
// //   constructor(name, age, color) {
// //     super(name, age);
// //     this.color = color;
// //   }
// //   info() {
// //     return `My cat ${this.name} is ${this.age} and has ${this.color} fur`;
// //   }
// // }

// // let pudding = new Cat("Pudding", 7, "black and white");
// // let butterscotch = new Cat("Butterscotch", 10, "tan and white");

// // console.log(pudding.info());
// // console.log(butterscotch.info());

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, 2, "cat", status);
//     this.test2 = function () {
//       console.log("hoi");
//     };
//   }
//   introduce() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
//   }
// }

// Cat.prototype.test = function () {
//   console.log("hi");
// };

// let cat = new Cat("Pepe", 2, "happy");
// // console.log(
// //   cat.introduce() ===
// //     "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!"
// // );
// for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(cat))) {
//   let method = cat[name];
//   // Supposedly you'd like to skip constructor
//   if (method === Object.getPrototypeOf(cat).constructor) continue;
//   console.log(method, name);
// }
// cat.test2();
// console.log(Object.getPrototypeOf(cat));
// logs Animal { test: 'test' }

// function Person() {
//   this.name = "vut";
// }
// Person.prototype.greeting = function (text) {
//   console.log(text);
// };

// function Shouter() {
//   Person.call(this);
// }
// //Shouter.prototype = Object.create(Person.prototype);
// Shouter.prototype.greeting = function (text) {
//   Person.prototype.greeting.call(this, text.toUpperCase());
// };

// let person = new Person("person");
// let shouter = new Shouter("shouter");

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
// console.log(shouter.name);

// class Person {
//   greeting(text) {
//     console.log(text);
//   }
// }

// class Shouter extends Person {
//   greeting(text) {
//     super.greeting(text.toUpperCase());
//   }
// }
// let person = new Person("person");
// let shouter = new Shouter("shouter");

// person.greeting("Hello. It's very nice to meet you."); // Hello. It's very nice to meet you
// shouter.greeting("Hello my friend."); // HELLO MY FRIEND.
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   }
// }
// let walkMixin = {
//   walk() {
//     return `${this.name} ${this.gait()} forward`;
//   },
// };
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   gait() {
//     return "strolls";
//   }
// }

// Object.assign(Person.prototype, walkMixin);

// class Cat extends Parent {
//   constructor(name) {
//     super(name);
//   }

//   gait() {
//     return "saunters";
//   }
// }

// class Cheetah extends Parent {
//   constructor(name) {
//     super(name);
//   }

//   gait() {
//     return "runs";
//   }
// }

// let mike = new Person("Mike");
// console.log(mike.walk());
// // "Mike strolls forward"

// let kitty = new Cat("Kitty");
// console.log(kitty.walk());
// // "Kitty saunters forward"

// let flash = new Cheetah("Flash");
// console.log(flash.walk());
// // "Flash runs forward"

// class Pet {
//   constructor(species, name) {
//     this.species = species;
//     this.name = name;
//   }
// }

// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.qty = [];
//   }

//   addPet(pet) {
//     this.qty.push(pet);
//   }

//   numberOfPets() {
//     return this.qty.length;
//   }
// }

// class Shelter {
//   constructor() {
//     this.adopters = [];
//   }
//   adopt(owner, pet) {
//     owner.addPet(pet);
//     if (!this.adopters.includes(owner)) {
//       this.adopters.push(owner);
//     }
//   }
//   printAdoptions() {
//     for (let people of this.adopters) {
//       console.log(people.name);
//       for (let pets of people.qty) {
//         console.log(`a ${pets.species} named ${pets.name}`);
//       }
//     }
//   }
// }

// let butterscotch = new Pet("cat", "Butterscotch");
// let pudding = new Pet("cat", "Pudding");
// let darwin = new Pet("bearded dragon", "Darwin");
// let kennedy = new Pet("dog", "Kennedy");
// let sweetie = new Pet("parakeet", "Sweetie Pie");
// let molly = new Pet("dog", "Molly");
// let chester = new Pet("fish", "Chester");

// let phanson = new Owner("P Hanson");
// let bholmes = new Owner("B Holmes");

// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// class Banner {
//   constructor(message) {
//     this.message = message;
//     this.length = this.message.length;
//     this.spaces = [];
//     this.lines = [];
//   }

//   displayBanner() {
//     console.log(
//       [
//         this.horizontalRule(),
//         this.emptyLine(),
//         this.messageLine(),
//         this.emptyLine(),
//         this.horizontalRule(),
//       ].join("\n")
//     );
//   }

//   horizontalRule() {
//     this.lines = "-".repeat(this.length + 4);
//     return `${this.lines}`;
//   }

//   emptyLine() {
//     this.spaces = " ".repeat(this.length);
//     return `| ${this.spaces} |`;
//   }

//   messageLine() {
//     return `| ${this.message} |`;
//   }
// }

// let banner1 = new Banner("To boldly go where no one has gone before.");
// banner1.displayBanner();

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: "Good Morning",
//     afternoon: "Good Afternoon",
//     evening: "Good Evening",
//     greet: function (timeOfDay) {
//       let msg = "";
//       switch (timeOfDay) {
//         case "morning":
//           msg += `${this.morning} ${name}`;
//           break;
//         case "afternoon":
//           msg += `${afternoon} ${name}`;
//           break;
//         case "evening":
//           msg += `${evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }

// let helloVictor = createGreeter("Victor");
// helloVictor.greet("morning");

// function objectsEqual(a, b) {
//   for (let as of Object.entries(a)) {
//     console.log(b[as[0]]);
//     console.log(as[0]);
//     if (!(b[as[0]] === as[0])) return false;
//   }
// }

// console.log(objectsEqual({ a: "foo" }, { a: "foo" })); // true
// console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" })); // false
// console.log(objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" })); // true
// console.log(objectsEqual({}, {})); // true
// console.log(objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 })); // false

// function createStudent(name, year) {
//   return {
//     courses: [],
//     info: function () {
//       console.log(`${name} is a ${year} year student`);
//     },
//     addCourse: function (obj) {
//       this.courses.push(obj);
//     },
//     listCourses: function () {
//       console.log(this.courses);
//     },
//   };
// }

// let foo = createStudent("Foo", "1st");
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: "Math", code: 101 });
// foo.addCourse({ name: "Advanced Math", code: 102 });
// foo.listCourses();

// let person = {
//   firstName: "Rick ",
//   lastName: "Sanchez",
//   fullName: function () {
//     return this.firstName + this.lastName;
//   },
// };

// console.log(person.fullName());

// let franchise = {
//   name: "How to Train Your Dragon",
//   allMovies: function () {
//     let self = this;
//     console.log(this);
//     return [1, 2, 3].map(function (number) {
//       return self.name + " " + number;
//     });
//   },
// };

// franchise.allMovies();

// function sumNum(num1, num2, num3) {
//   console.log(this);
//   return this.num + num1 + num2 + num3;
// }

// let a = [1, 5, 10];
// let obj = {
//   num: 42,
// };

// console.log(sumNum(...a));
// let foo = {
//   a: 1,
//   b: 2,
// };

// let bar = {
//   a: "abc",
//   b: "def",
//   add: function () {
//     return this.a + this.b;
//   },
// };
// console.log(bar.add.call(foo));

// function sumNum(num1) {
//   return this.num + num1;
// }

// let obj = {
//   num: 42,
// };
// let obj2 = {
//   num: 43,
// };

// console.log(sumNum.bind(obj));
// console.log(sumNum(5)); // => 47

// let a = {
//   foo: 1,
//   bar: 2,
// };

// let b = Object.create(a);
// console.log(a.hasOwnProperty("foo")); // => true
// console.log(b.hasOwnProperty("foo")); // => false

// class Test {
//   constructor() {
//     this.a = "a";
//     this.num = 5;
//     this.anotherTestMethod = function () {
//       console.log("ahhh");
//     };
//   }
//   testMethod() {
//     console.log("hi");
//   }
// }

// Test.prototype.newTestMethod = function () {
//   console.log("hello");
// };

// let tester = new Test();

// console.log(tester.constructor.name);

// console.log(tester.propertyIsEnumerable("testMethod"));
// console.log(tester.propertyIsEnumerable("newTestMethod"));
// console.log(tester.propertyIsEnumerable("anotherTestMethod"));
// console.log("---------");
// console.log("testMethod" in tester);
// console.log("---------");
// console.log(tester.hasOwnProperty("testMethod"));
// console.log(tester.hasOwnProperty("newTestMethod"));
// console.log(tester.hasOwnProperty("anotherTestMethod"));
// console.log(Object.getOwnPropertyNames(Test.prototype));
// for (let i in tester) {
//   console.log(i);
// }

// function Lizard() {
//   this.scamper = function () {
//     console.log("I'm scampering!");
//   };
// }

// let lizzy = Lizard();
// lizzy.scamper; // ?

// let RECTANGLE = {
//   area: function (self) {
//     return self.width * self.height;
//   },
//   perimeter: function (self) {
//     return 2 * (self.width + self.height);
//   },
// };

// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area(this);
//   this.area2 = function () {
//     return this.width * this.height;
//   };
//   this.perimeter = RECTANGLE.perimeter(this);
// }

// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area); // => 6
// console.log(rect1.perimeter); // => 10
// console.log(rect1.area2()); // => 10

// function Ninja() {
//   this.swung = false;
//   Ninja.test.push("tester");
// }

// Ninja.test = [];
// // Add a swing method to the Ninja prototype which
// // modifies `swung` and returns the calling object

// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };

// let ninjaA = new Ninja();
// let ninjaB = new Ninja();

// console.log(ninjaA.swing.swung); // logs `true`
// console.log(ninjaA.swung); // logs `true`
// console.log(Ninja.test);

// function bob() {
//   this.a = 5;
// }

// let b = new bob();
// console.log(b);

// let catPrototype = {
//   play() {
//     console.log(`${this.name} is playing with ${this.favoriteToy}!`);
//   },
//   init(name, favoriteToy) {
//     this.name = name;
//     this.favoriteToy = favoriteToy;
//     return this;
//   },
// };

// let siamese = Object.create(catPrototype).init("MeowMan", "bells");
// siamese.play(); // MeowMan is playing with bells!

// class Cat {
//   constructor(name, favoriteToy) {
//     this.name = name;
//     this.favoriteToy = favoriteToy;
//     Cat.allNames.push(this.name);
//   }

//   play() {
//     console.log(`${this.name} is playing with ${this.favoriteToy}!`);
//   }

//   static allNames = [];
//   static allCats() {
//     return Cat.allNames;
//   }
// }
// console.log(Cat.allCats());
// let tabby = new Cat("t", "ball");
// let tabby2 = new Cat("tt", "ball2");
// let tabby3 = new Cat("ttt", "ball3");

// console.log(Cat.allCats());

// let checkSubstr = {
//   substr: "cat",
//   hasLetters(words) {
//     return words.filter(function (word) {
//       return word.includes(this.substr);
//     }, this);
//   },
// };

// let words = ["category", "BBQ", "capstone", "Cat"];
// console.log(checkSubstr.hasLetters(words));
// let num1 = "2";
// let num2 = 2;

// console.log(new Number(num1) === num2);
// console.log(typNumber(num1));
// let EletricType = {
//   electric: true,
// };
// let SteelType = {
//   steel: true,
// };

// class Magnemite {}

// Object.assign(Magnemite.prototype, EletricType);
// Object.assign(Magnemite.prototype, SteelType);
// let mag = new Magnemite();
// console.log(mag.electric);
// console.log(mag.steel);

// function Machine() {}

// Machine.prototype.actuate = function () {
//   return `The machine actuates`;
// };

// function ArborPress() {}

// ArborPress.prototype = Object.create(Machine.prototype);
// ArborPress.prototype.constructor = ArborPress;
// ArborPress.prototype.flatten = function () {
//   return `The press flattens`;
// };

// let press = new ArborPress();
// console.log(press.actuate());
// console.log(press.flatten());
// console.log(ArborPress.prototype.actuate);
// console.log(ArborPress.prototype.hasOwnProperty("flatten"));

// function Machine() {}

// Machine.prototype.actuate = function () {
//   return `The machine actuates`;
// };

// function ArborPress() {}

// ArborPress.prototype = Object.assign(ArborPress.prototype, Machine.prototype);
// ArborPress.prototype.constructor = ArborPress;
// ArborPress.prototype.flatten = function () {
//   return `The press flattens`;
// };

// let press = new ArborPress();
// console.log(press.actuate());
// console.log(press.flatten());
// console.log(ArborPress.prototype.actuate);
// console.log(ArborPress.prototype.hasOwnProperty("actuate"));

// function CoffeeMaker() {}

// function DripMachine() {}

// DripMachine.prototype = Object.create(CoffeeMaker.prototype);
// DripMachine.prototype.constructor = DripMachine;
// let dripCoffee = new DripMachine();
// console.log(dripCoffee.constructor);

// class Dancer {
//   dance() {
//     return "Dances.";
//   }
// }

// class BalletDancer extends Dancer {
//   dance() {
//     return "Performs a graceful pirouette.";
//   }
// }

// class ShuffleDancer extends Dancer {
//   dance() {
//     return "Shuffles.";
//   }
// }
// let balletDancer = new BalletDancer();
// let shuffleDancer = new ShuffleDancer();
// console.log(balletDancer.dance());
// console.log(shuffleDancer.dance());

// let parity = {
//   div: 2,
//   areEven(nums) {
//     return nums.every((n) => n % this.div === 0);
//   },
// };

// console.log(parity.areEven([6, 18, 54, 30, 12]));

// function Paint(type, color) {
//   this.type = type;
//   this.color = color;
// }

// Paint.prototype.dry = function () {
//   return `The ${this.color} ${this.type} paint is drying.`;
// };

// let acrylicPaint = new Paint("acrylic", "blue");
// console.log(acrylicPaint.dry());

// let carpenter = {
//   name: "Bob",
//   makes: [],
// };

// let cabinet = {
//   materials: ["wood", "nails", "hinges", "handle"],
//   build() {
//     console.log("Building a cabinet...");
//   },
// };

// let shelf = {
//   materials: ["wood", "screws", "glue"],
//   build() {
//     console.log("Building a shelf...");
//   },
// };

// carpenter.makes.push(cabinet);
// carpenter.makes.push(shelf);

// let carpenter = {
//   name: "Bob",
//   makes: [],
//   makeThings: function () {
//     this.makes.forEach((furniture) => {
//       furniture.build();
//     });
//   },
// };

// let cabinet = {
//   materials: ["wood", "nails", "hinges", "handle"],
//   build: function () {
//     console.log("Building a cabinet...");
//   },
// };

// let shelf = {
//   materials: ["wood", "screws", "glue"],
//   build: function () {
//     console.log("Building a shelf...");
//   },
// };

// carpenter.makes.push(cabinet);
// carpenter.makes.push(shelf);
// carpenter.makeThings();

// class Creature {
//   constructor(name, habitat) {
//     this.name = name;
//     this.habitat = habitat;
//   }
// }

// class LandCreature extends Creature {
//   chase() {
//     return `${this.name} is chasing.`;
//   }
// }

// class SkyCreature extends Creature {
//   fly() {
//     return `${this.name} is flying.`;
//   }
// }
// let CanBreatheFire = (Base) =>
//   class extends Base {
//     breatheFire() {
//       return `${this.name} breathes fire.`;
//     }
//   };
// class Wolf extends LandCreature {
//   constructor(name, habitat, color) {
//     super(name, habitat);
//     this.color = color;
//   }

//   howl() {
//     return `${this.name} howls.`;
//   }
// }

// class Wyvern extends CanBreatheFire(SkyCreature) {
//   // Inherits SkyCreature properties and methods, and mixes in breathe fire capability
// }

// class Drake extends CanBreatheFire(LandCreature) {
//   // Inherits LandCreature properties and methods, and mixes in breathe fire capability
// }

// let wolf = new Wolf("Wolf", "Forest", "Gray");
// console.log(wolf.chase()); // Wolf is chasing.
// console.log(wolf.howl()); // Wolf howls.

// let wyvern = new Wyvern("Wyvern", "Mountains");
// console.log(wyvern.fly()); // Wyvern is flying.
// console.log(wyvern.breatheFire()); // Wyvern breathes fire.

// let drake = new Drake("Drake", "Caves");
// console.log(drake.chase()); // Drake is chasing.
// console.log(drake.breatheFire()); // Drake breathes fire.

// class Creature {
//   constructor(name, habitat) {
//     this.name = name;
//     this.habitat = habitat;
//   }
// }

// class LandCreature extends Creature {
//   chase() {
//     return `${this.name} is chasing.`;
//   }
// }

// class SkyCreature extends Creature {
//   fly() {
//     return `${this.name} is flying.`;
//   }
// }
// const CanBreatheFire = (Base) =>
//   class extends Base {
//     breatheFire() {
//       return `${this.name} breathes fire.`;
//     }
//   };
// class Wolf extends LandCreature {
//   constructor(name, habitat, color) {
//     super(name, habitat);
//     this.color = color;
//   }

//   howl() {
//     return `${this.name} howls.`;
//   }
// }

// class Wyvern extends CanBreatheFire(SkyCreature) {
//   // Inherits SkyCreature properties and methods, and mixes in breathe fire capability
// }

// class Drake extends CanBreatheFire(LandCreature) {
//   // Inherits LandCreature properties and methods, and mixes in breathe fire capability
// }

// let wolf = new Wolf("Wolf", "Forest", "Gray");
// console.log(wolf.chase()); // Wolf is chasing.
// console.log(wolf.howl()); // Wolf howls.

// let wyvern = new Wyvern("Wyvern", "Mountains");
// console.log(wyvern.fly()); // Wyvern is flying.
// console.log(wyvern.breatheFire()); // Wyvern breathes fire.

// let drake = new Drake("Drake", "Caves");
// console.log(drake.chase()); // Drake is chasing.
// console.log(drake.breatheFire()); // Drake breathes fire.

// let fooA = { bar: 1 };
// let fooB = Object.create(fooA);
// let fooC = Object.create(fooB);

// function assignProperty(f, p, v) {
//   if (f === null) return;
//   if (f.hasOwnProperty(p)) {
//     f[p] = v;
//   } else {
//     assignProperty(Object.getPrototypeOf(f), p, v);
//   }
// }
// assignProperty(fooC, "bar", 2);
// console.log(fooA.bar); // 2
// console.log(fooC.bar); // 2

// function newP(a, b) {
//   return {
//     name: a,
//     b: b,
//     m: function () {
//       console.log(this.b);
//     },
//   };
// }
// let testNew = newP("joe", "ahhh");

// testNew.m();

// function createPet(animal, name) {
//   return {
//     animal: animal,
//     name: name,
//     sleep() {
//       console.log("sleeping");
//     },
//     wake() {},
//   };
// }
// let pudding = createPet("Cat", "Pudding");
// console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
// pudding.sleep(); // I am sleeping

let PetPrototype = {
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
  sleep() {
    console.log("sleeping");
  },
  wake() {},
};

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
