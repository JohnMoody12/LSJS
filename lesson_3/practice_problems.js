// let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
// console.log(ages.hasOwnProperty("Lily"));

// let munstersDescription = "the Munsters are CREEPY and Spooky.";
// let newString = munstersDescription.toLowerCase();
// newString = newString[0].toUpperCase() + newString.slice(1);

// console.log(newString);

// let additionalAges = { Marilyn: 22, Spot: 237 };

// ages = { ...ages, ...additionalAges };

// console.log(ages);

// let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// console.log(str2.includes("dino"));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
// flintstones = [...flintstones, "Dino"];
// console.log(flintstones);

// let advice =
//   "Few things in life are as important as house training your pet dinosaur.";

// advice = advice.slice(0, advice.indexOf("house"));
// console.log(advice);

// advice = advice.replace("important", "urgent");
// console.log(advice);

// let last = "seven";
// let x = "four ".concat(last);
// console.log(x);

// let n = [1, 2, 3, 4, 5];
// n.splice(2, 1);
// console.log(n);
// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);
// //console.log(flintstones);
// let x = flintstones;
//x = [].concat(...flintstones);

// x = flintstones.reduce((a, e) => a.concat(e), []);
// console.log(flintstones);
// console.log(x);

// let flintstones2 = {
//   Fred: 0,
//   Wilma: 1,
//   Barney: 2,
//   Betty: 3,
//   Bambam: 4,
//   Pebbles: 5,
// };

// console.log(
//   Object.entries(flintstones2)
//     .filter((x) => x[0] === "Barney")
//     .shift()
// );

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// if (Array.isArray(numbers)) {
//   console.log("array");
// }
// if (Array.isArray(table)) {
//   console.log("array");
// }

// let title = "Flintstone Family Members";
// let padding = (40 - title.length) / 2;
// for (let i = 0; i < padding; i++) {
//   title = " " + title;
//   title = title + " ";
// }

// console.log(title);
// console.log("----------------------------------------");

//title.padStart(padding + title.length);
// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// let count = statement1.split("").filter((a) => a === "t").length;
// let count2 = statement2.split("").filter((a) => a === "t").length;
// console.log(count);
// console.log(count2);

// let array = [1, 2, 3, 4, 5];
// array.splice(0, array.length);
// console.log(array);

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// arr2[2] = 5;
// console.log(arr1);
// console.log(arr2);

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }

// console.log(isColorValid("red"));

// let s = "The Flintstones Rock!";

// for (let i = 0; i < 4; i++) {
//   console.log(" ".repeat(i) + s);
// }

// let munstersDescription = "The Munsters are creepy and spooky.";
// munstersDescription =
//   munstersDescription[0].toLowerCase() +
//   munstersDescription.toUpperCase().slice(1);

// console.log(munstersDescription);

// let munstersDescription = "The Munsters are creepy and spooky.";
// console.log(
//   munstersDescription
//     .split("")
//     .map(function (c) {
//       if (c === c.toUpperCase()) {
//         return c.toLowerCase();
//       } else {
//         return c.toUpperCase();
//       }
//     })
//     .join("")
// );

// let x = [1, 2, 3, 4, 5];
// // let y = x.map((a) => {
// //   if (a % 2 === 0) {
// //     return 7;
// //   } else {
// //     return a;
// //   }
// // });
// // console.log(y);
// console.log(x);
// x.push(6);
// console.log(x);
// x.shift();
// console.log(x);

// function messWithVars(one, two, three) {
//   one = two;
//   two = three;
//   three = one;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function isDotSeparatedIpAddress(inputString) {
//   let dotSeparatedWords = inputString.split(".");
//   if (dotSeparatedWords.length !== 4) return false;
//   while (dotSeparatedWords.length > 0) {
//     let word = dotSeparatedWords.pop();
//     if (!isAnIpNumber(word)) {
//       return false;
//     }
//   }

//   return true;
// }

// function isAnIpNumber(str) {
//   if (/^\d+$/.test(str)) {
//     let number = Number(str);
//     return number >= 0 && number <= 255;
//   }

//   return false;
// }

// console.log(isDotSeparatedIpAddress("123.01.02.hi"));

// function replace(str, value) {
//   while (true) {
//     break;
//   }

//   greet.concat("h");
// }

// let greet = "Hey!";
// replace(greet, "Hello");
// console.log(greet);

// let object = { first: [1] };
// let numArray = object["first"];
// numArray.push(2);
// console.log(numArray.pop());

// console.log(numArray); //  => "[1, 2]"

// function messWithVars(a, b, c) {
//   a[0] = a[0].concat("heeh");
//   b = c;
//   c = a;
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// // function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// function messWithVars(one, two, three) {
//   one.splice(0, 1, "two");
//   two.splice(0, 1, "three");
//   three.splice(0, 1, "one");
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

// let a = [1, 2];
// let b = [3, 4];

// b = a;
// console.log(b);

// function u(s) {
//   s.toUpperCase();
// }

// let x = "hi";
// u(x);
// console.log(x);
// let munsters = {
//   Herman: { age: 32, gender: "male" },
//   Lily: { age: 30, gender: "female" },
//   Grandpa: { age: 402, gender: "male" },
//   Eddie: { age: 10, gender: "male" },
//   Marilyn: { age: 23, gender: "female" },
// };

// function messWithDemographics(demoObject) {
//   Object.keys(demoObject).forEach((familyMember) => {
//     console.log(familyMember);
//     demoObject[familyMember]["age"] += 42;
//     demoObject[familyMember]["gender"] = "other";
//   });
// }

// messWithDemographics(munsters);
// console.log(munsters);

// let object = { first: [1] };
// object["first"]["second"] = [2];

// console.log(object);

// console.log(5 > -Infinity);
// function coinChange(coins, amount) {
//   const memo = new Map();

//   function dfs(remaining) {
//     if (remaining === 0) return [0, []]; // No coins needed for amount 0
//     if (remaining < 0) return [-1, []]; // Impossible to form this amount

//     if (memo.has(remaining)) {
//       return memo.get(remaining);
//     }

//     let minCount = Infinity;
//     let bestCombo = [];

//     for (const coin of coins) {
//       const [resCount, resCombo] = dfs(remaining - coin);

//       if (resCount >= 0 && resCount < minCount) {
//         minCount = resCount + 1;
//         bestCombo = [coin, ...resCombo];
//       }
//     }

//     // Save the result
//     memo.set(
//       remaining,
//       minCount === Infinity ? [-1, []] : [minCount, bestCombo]
//     );
//     return memo.get(remaining);
//   }

//   const result = dfs(amount);
//   return result[1]; // Return only the coin combination
// }

// Testing the function with the provided examples
// console.log(coinChange([1, 2, 5], 11)); // Expected output: An array of coins that sum up to 11, e.g., [5, 5, 1]
// console.log(coinChange([2], 3)); // Expected output: []
// console.log(coinChange([1], 0)); // Expected output: []

// function coinChange(coins, amount) {
//   const result = [];
//   const currentCombo = [];

//   function findCombinations(remaining, startIndex) {
//     if (remaining === 0) {
//       // Add a copy of the current combination to the result
//       result.push([...currentCombo]);
//       return;
//     }

//     for (let i = startIndex; i < coins.length; i++) {
//       if (remaining - coins[i] >= 0) {
//         // Choose the coin
//         currentCombo.push(coins[i]);

//         // Explore further with the chosen coin
//         findCombinations(remaining - coins[i], i);

//         // Backtrack
//         currentCombo.pop();
//       }
//     }
//   }

//   findCombinations(amount, 0);
//   return result;
// }

// Testing the function
// console.log(coinChange([1, 2, 5], 11));

// function coinChange(coins, amount) {
//   const memo = new Map();

//   function dfs(remaining) {
//     // Base cases
//     if (remaining === 0) return 0;
//     if (remaining < 0) return -1;

//     // Return the saved result if it's already computed
//     if (memo.has(remaining)) {
//       return memo.get(remaining);
//     }

//     let minimum = Infinity;

//     // Iterate through each coin and make recursive calls
//     for (const coin of coins) {
//       console.log("Coin: " + coin);
//       console.log("Remaining: " + remaining);
//       console.log("Min: " + minimum);
//       const res = dfs(remaining - coin);
//       console.log("Res: " + res);
//       // Update the minimum if a new minimum is found
//       if (res >= 0 && res < minimum) {
//         minimum = 1 + res;
//       }
//     }

//     // Save the result in the memoization object
//     memo.set(remaining, minimum === Infinity ? -1 : minimum);
//     return memo.get(remaining);
//   }

//   // Initial call to dfs function
//   return dfs(amount);
// }

// Testing the function with the provided examples
//console.log(coinChange([1, 2, 5], 2)); // Expected output: 3
//console.log(coinChange([2], 3)); // Expected output: -1
//console.log(coinChange([1], 0)); // Expected output: 0

// const a = (b) => {
//   return b * 2;
// };

// console.log(a(5));

// function sDiv(string) {
//   let a = string.split("");
//   let divCounter = 0;

//   for (let i in a) {
//     if (
//       a[i] === "<" &&
//       (a[+i + 1] == "d" || (a[+i + 1] === "/" && a[+i + 2] === "d"))
//     ) {
//       divCounter++;

//       if (divCounter % 2 === 0 && a[+i + 1] !== "/") {
//         a.splice(+i + 1, 0, "/");
//       }
//     }
//   }
//   return a.join("");
// }

// console.log(sDiv("<div><p>Here is a <div> tag <p>"));
// console.log(sDiv("<div><div><p>Hello</p><div><div>"));
// console.log(sDiv("<div></div><p>Hello</p><div></div><div><div>"));

// const a = { aa: "aa", bb: "bb" };
// a["aa"] = "c";

// console.log(a);
// function appendTo(str, otherStr) {
//   for (let index = 0; index < otherStr.length; ++index) {
//     str += otherStr[index];
//   }

//   return str;
// }

// console.log(appendTo("hi", "hi"));

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// let object = {};
// let i = 0;
// for (let o of flintstones) {
//   object[o] = i;
//   i++;
// }
// console.log(object);

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// let flintstonesObject = flintstones.reduce((obj, name, index) => {
//   obj[name] = index;
//   return obj;
// }, {});

// console.log(flintstonesObject);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237,
// };

// let age = Object.values(ages).reduce((acc, value) => acc + value, 0);
// console.log(age);

// console.log(Math.min(...Object.values(ages)));

// let statement = "The Flintstones Rock".split("").filter((c) => c !== " ");
// let object = {};
// statement.forEach((value) => {
//   if (object[value]) {
//     object[value]++;
//   } else {
//     object[value] = 1;
//   }
// });

// console.log(object);

// function pen(str) {
//   let p = str.split(" ");
//   return p[p.length - 2];
// }

// console.log(pen("l s i great") === "i");

// function xor(a, b) {
//   return (a && !b) || (b && !a);
// }

// console.log(xor("", true));

// let result = ["a", "b", "c"].forEach(function (item) {
//   console.log(item);
// });

// console.log(result); // []

// function bob(title, author) {
//   return {
//     title: title,
//     author: author,
//     behavior: function () {
//       return "ahhh" + title;
//     },
//   };
// }

// let a = bob("titles", "auth");
// let b = bob("title2", "auth2");

// console.log(a.behavior());
// console.log(a.author);
let a = {
  foo: 1,
  bar: 2,
};

let b = Object.create(a);

console.log(Object.getPrototypeOf(b));
console.log("bar" in b);
console.log(b.hasOwnProperty("bar"));
console.log(Object.keys(b));
