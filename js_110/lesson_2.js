// [2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
//   //   console.log("a " + a);
//   //   console.log("b " + b);
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }); // => [ 1, 2, 4, 9, 11, 21, 107 ]

// let words = ["go", "ahead", "and", "jump"];
// console.log(words.sort((a, b) => a.length - b.length));

// let obj = { a: { b: 'foo' }, c: ['bar'], e: "string" };
// let copyOfObj = Object.assign({}, obj);

// obj['a']['d'] = 'baz';
// copyOfObj; // => { a: { b: 'foo', d: 'baz' }, c: [ 'bar' ] }
// obj;

// for loop transformation
// let numbers = [1, 2, 3, 4, 5];
// let transformedNumbers = [];
// let currentNum;
// for (let index = 0; index < numbers.length; index += 1) {
//   currentNum = numbers[index];
//   let squaredNum = currentNum * currentNum;

//   transformedNumbers.push(squaredNum);
// }

// console.log(transformedNumbers); // => [ 1, 4, 9, 16, 25 ]

// let arr = ["10", "11", "9", "7", "8"];

// console.log(arr.sort((a, b) => b - a));

// let books = [
//   {
//     title: "One Hundred Years of Solitude",
//     author: "Gabriel Garcia Marquez",
//     published: "1967",
//   },
//   {
//     title: "The Great Gatsby",
//     author: "F. Scott Fitzgerald",
//     published: "1925",
//   },
//   { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
//   { title: "Ulysses", author: "James Joyce", published: "1922" },
//   { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
// ];

// console.log(books.sort((a, b) => a.published - b.published));

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };

// console.log(arr1[2][1][3]);
// console.log(arr2[1].third[0]);
// console.log(arr3[2].third[0][0]);
// console.log(obj1.b[1]);
// console.log(Object.keys(obj2.third)[0]);

// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// let males = Object.values(munsters)
//   .filter((person) => person.gender === "male")
//   .map((male) => male.age)
//   .reduce((ageTotal, age) => ageTotal + age, 0);
// console.log(males);

// let pairs = Object.entries(munsters);

// pairs.forEach

let arr = [
  ["b", "c", "a"],
  [2, 11, -3],
  ["blue", "black", "green"],
];
let newArray = arr.map((x) => {
  return x.slice().sort((a, b) => {
    if (typeof x[0] == "number") {
      return b - a;
    } else {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
});

console.log(newArray);
