// function rotate(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];
//   let newArray = arr.slice();
//   let start = newArray.shift(1);
//   newArray.push(start);
//   return newArray;
// }

// // console.log(rotate([1, 2, 3, 4]));
// // console.log(rotate([]));
// // console.log(rotate("a"));
// // console.log(rotate([{ a: 2 }, [1, 2], 3]));

// // function rotate2(arr, idx) {
// //   if (!Array.isArray(arr)) return undefined;
// //   if (arr.length === 0) return [];

// //   let newArray = arr.slice();
// //   let move = newArray[newArray.length - idx];
// //   newArray.splice(newArray.length - idx, 1);
// //   newArray.push(move);
// //   return newArray;
// // }

// //console.log(rotate2([7, 3, 5, 2, 9, 1], 4));

// //  735291
// //  0
// //0 352917
// //   1
// //1 329175
// //    2
// //2 321759
// //     3
// //3 321597
// //      4
// //4 321579
// //       5

// function maxRotation(int) {
//   let arr = int
//     .toString()
//     .split("")
//     .map((ele) => Number(ele));
//   let rotator;
//   for (let i = 0; i < arr.length; i++) {
//     rotator = arr[i];
//     arr.splice(i, 1);
//     arr.push(rotator);
//   }
//   if (arr[0] === 0) {
//     arr.shift(1);
//   }
//   return Number(arr.join(""));
// }

// console.log(maxRotation(735291));
// console.log(maxRotation(3));
// console.log(maxRotation(8703529146));
// console.log(maxRotation(105));
// console.log(maxRotation(35));

// //['cat', 'bat', 'dog', 'batman']
// //hashmap obj[str] = 1;
// // ele. check rest of array. if distinct we'll add to the distinct counter.
// //check against "k", and return if counter=k

// function distinct(arr, k) {
//   let distinctCount = 0;
//   let distinct = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (!(i in arr)) {
//       continue;
//     }
//     for (let j = 0; j < arr.length; j++) {
//       if (!(j in arr)) {
//         continue;
//       }
//       if (j != i) {
//         if (arr[i] === arr[j]) {
//           distinct = false;
//         }
//       }
//     }

//     if (distinct === true) {
//       distinctCount++;
//       if (distinctCount === k) {
//         return arr[i];
//       }
//     }
//     distinct = true;
//   }
//   return "";
// }

// console.log(distinct(["cat", "dog", "box"], 1));
// console.log(distinct(["d", "b", "c", "b", , "c", "a"], 2));

// function minilang(str) {
//   let stack = [];
//   let register = 0;
//   let input = str.split(" ");

//   for (let i = 0; i < input.length; i++) {
//     if (input[i].match(/[0-9]+/)) {
//       register = Number(input[i]);
//     } else {
//       switch (input[i]) {
//         case "PUSH":
//           stack.push(register);
//           break;
//         case "ADD":
//           if (stack.length === 0) break;
//           register = stack.pop(1) + register;
//           break;
//         case "SUB":
//           register = stack.pop(1) - register;
//           break;
//         case "PRINT":
//           console.log(register);
//       }

//       //console.log(stack);
//     }
//   }
//   //   console.log("===========Complete============");
//   //   console.log(stack);
//   //   console.log(register);
// }

// //minilang("5 PUSH PUSH ADD");
// minilang("5 PRINT PUSH 3 PRINT ADD PRINT");

// let nums = {
//   one: 1,
//   two: 2,
//   three: 3,
// };

// function wordToDigit(str) {
//   let arr = str.split(" ");
//   arr.forEach((element, idx) => {
//     if (nums[element]) {
//       console.log(element);
//       arr[idx] = nums[element];
//       console.log(element);
//     }
//   });
//   console.log(arr);

//   return arr.join(" ");
// }

// console.log(wordToDigit("a b c three one two"));

// function fib(big) {
//   let temp;
//   let fib1 = 0n;
//   let fib2 = 1n;
//   let count = 1;
//   while (fib2.toString().length < big) {
//     temp = fib2;
//     fib2 = fib1 + fib2;
//     fib1 = temp;
//     count++;
//   }

//   return count;
// }

// console.log(fib(2n));
// console.log(fib(10000n));
// let memo = {};
// function fib(n) {
//   if (n === 0) {
//     return 0;
//   }
//   if (n === 1) {
//     return 1;
//   }
//   if (n === 2) {
//     return 1;
//   }
//   if (memo[n]) {
//     return memo[n];
//   }
//   memo[n] = fib(n - 1) + fib(n - 2);
//   return memo[n];
// }

// //console.log(fib(20));

// function fibo(n) {
//   let prev2 = [1, 1];
//   let tmp = 0;
//   for (let i = 3; i <= n; i++) {
//     tmp = prev2[0];
//     prev2 = [prev2[1], tmp + prev2[1]];
//   }

//   return prev2[1];
// }
// console.log(fib(75));

// function lp(str) {
//   let total = str.length;
//   let lower = (((str.match(/[a-z]/g) || []).length / total) * 100).toFixed(2);
//   let upper = (((str.match(/[A-Z]/g) || []).length / total) * 100).toFixed(2);
//   let neither = (((str.match(/[a-z]/gi) || []).length / total) * 100).toFixed(
//     2
//   );

//   let answer = { lower, upper, neither };
//   return answer;
// }

// console.log(lp("abcABC123"));

// function triangle(side1, side2, side3) {
//   let arr = [side1, side2, side3].sort((a, b) => a - b);
//   if (arr[0] === arr[1] && arr[1] === arr[2]) return "equilateral";
//   if (arr[0] + arr[1] < arr[2]) return "invalid";
//   if (arr.some((ele) => ele === 0)) return "invalid";
//   if (arr[0] === arr[1] || arr[1] === arr[2]) return "isosceles";

//   return "scalene";
// }

// //console.log(triangle(3, 4, 4));
// console.log(triangle(3, 3, 1.5));
// console.log(triangle(3, 4, 5));
// console.log(triangle(3, 0, 3));
// console.log(triangle(3, 1, 1));

// function tri(angle1, angle2, angle3) {
//   let arr = [angle1, angle2, angle3].sort((a, b) => a - b);
//   if (
//     arr.some((angle) => angle === 0) ||
//     arr.reduce((sum, angle) => sum + angle, 0) !== 180
//   )
//     return "invalid";
//   if (arr.some((angle) => angle === 90)) return "right";
//   if (arr.every((angle) => angle < 90)) return "acute";
//   if (arr.some((angle) => angle > 90)) return "obtuse";
//   return "invalid";
// }

// console.log(tri(60, 70, 50));
// console.log(tri(30, 60, 90));
// console.log(tri(120, 50, 10));
// console.log(tri(0, 90, 90));
// console.log(tri(50, 50, 50));

// function fridays(year) {
//   let dates = [];
//   for (let m = 0; m < 12; m++) {
//     dates.push(new Date(year, m, 13).getDay());
//   }
//   return dates.filter((date) => date === 5).length;
// }

// console.log(fridays(2017)); 9876543201

// function featured(num) {
//   let i = 1;
//   let f = 0;

//   while (!false) {
//     f = 7 * i;
//     if (f > num && f % 2 === 1 && uniqueN(f)) {
//       return f;
//     } else if (f > 9876543201) {
//       return "There is no featured #";
//     }
//     i += 2;
//   }
// }

// function uniqueN(num) {
//   let unique = new Set(num.toString());
//   if (unique.size === num.toString().length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(featured(999999));

// function bubble(arr) {
//   let tmp;
//   let swap = true;
//   while (swap) {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swap = true;
//       }
//     }
//   }
// }

// let arr2 = [6, 2, 7, 1, 4];
// bubble(arr2);
// console.log(arr2);

// let longTextS =
//   "Four score and seven years ago our fathers brought forth on this " +
//   "continent a new nation, conceived in liberty, and dedicated to the " +
//   "proposition that all men are created equal. Now we are engaged in a " +
//   "great civil war, testing whether that nation, or any nation so " +
//   "conceived and so dedicated, can long endure. We are met on a great " +
//   "battlefield of that war. We have come to dedicate a portion of that " +
//   "field, as a final resting place for those who here gave their lives " +
//   "that that nation might live. It is altogether fitting and proper that " +
//   "we should do this.";
// function longText(str) {
//   let sentences = str.match(/\w.*?[.!?]/g);

// }

// // longText("This is a sentence. This too! Is this one -- ?");
// // longText("1234. 123! 123456?");
// longText(longTextS);

// function prime(num) {
//   if (num === 1) return false;
//   let top = Math.sqrt(num);
//   console.log(top);
//   for (let i = 2; i <= top; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(prime(173));

// function flatten(arr) {
//   let s = new Set();
//   let answer = [];
//   arr.forEach((row) => {
//     for (let i = 0; i < row.length; i++) {
//       if (!s.has(row[i].toString())) {
//         s.add(row[i].toString());
//         answer.push(row[i]);
//       } else {
//       }
//     }
//   });
//   return answer;
// }

// function flatten(arr) {
//   let s = {};
//   let answer = [];
//   arr.forEach((row) => {
//     for (let i = 0; i < row.length; i++) {
//       if (!s[row[i].toString()]) {
//         s[row[i].toString()] = 1;
//         answer.push(row[i]);
//       } else {
//       }
//     }
//   });
//   return answer;
// }

// console.log(
//   flatten([
//     [1, 2, 3],
//     ["3", 4, 5, "a"],
//   ])
// );

// console.log(flatten([]));

// function s(int) {
//   return int
//     .toString()
//     .split("")
//     .map((ele) => +ele)
//     .reduce((acc, ele) => ele + acc, 0);
// }

// console.log(s(234));

// let dict = {
//   0: "zero",
//   1: "one",
//   2: "two",
// };
// function sort(arr) {
//   return arr.sort((a, b) => {
//     if (dict[a] < dict[b]) {
//       return -1;
//     } else if (dict[a] > dict[b]) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });
// }

// console.log(sort([0, 1, 2, 1, 0, 2, 2]));

// function multi(arr1, arr2) {
//   let ans = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       ans.push(arr1[i] * arr2[j]);
//     }
//   }
//   return ans.sort((a, b) => a - b);
// }

// console.log(multi([2, 4], [4, 3, 1, 2]));

// function sub(str) {
//   let ans = [];
//   str.split("").forEach((element, idx) => {
//     ans.push(str.substring(0, idx + 1));
//   });
//   return ans;
// }

// console.log(sub("abc"));

//  a b c d e
//  ^
//  ^ ^
//    ^
//    ^ ^

// function sub2(str) {
//   let answer = [];
//   let arr = str.split("");
//   let sub = [[]];
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i; j < arr.length; j++) {
//       sub.push(arr[j]);
//     }
//     console.log(sub);
//   }
// }

// console.log(sub2("abcde"));

// function upper(str) {
//   if (str.match(/[a-z]/g)?.length > 0) {
//     return false;
//   }
//   return true;
// }

// console.log(upper("FOUR4 bA! "));

// function noVowel(arr) {
//   let answer = arr.slice();
//   let tmp = [];
//   answer.forEach((word, idx) => {
//     for (let i = 0; i < word.length; i++) {
//       if (/[aeiou]/i.test(word[i])) {
//         tmp = word.split("");
//         tmp.splice(i, 1);
//         answer[idx] = tmp.join("");
//       }
//     }
//   });

//   return answer;
// }

// console.log(noVowel(["high", "buy"]));

// function letter(str) {
//   let answer = {};
//   answer.lowercase = str.match(/[a-z]/g)?.length || 0;
//   answer.uppercase = str.match(/[A-Z]/g)?.length || 0;
//   answer.n = str.match(/[^a-z]/gi)?.length || 0;
//   answer.neither = str.length - (answer.lowercase + answer.uppercase);

//   return answer;
// }

// console.log(letter(" "));
// console.log(letter("abCdef 123"));

// function cap(str) {
//   let arr = str.trim().split(" ");
//   let capped = arr.map(
//     (word) => word[0].toUpperCase() + word.slice(1).toLowerCase()
//   );
//   return capped.join(" ");
// }

// console.log(cap(' this "is" a STRING '));

// function swap(str) {
//   return str
//     .split("")
//     .map((char, idx) => {
//       if (/[A-Z]/.test(char)) {
//         return char.toLowerCase();
//       } else if (/[a-z]/.test(char)) {
//         return char.toUpperCase();
//       } else {
//         return char;
//       }
//     })
//     .join("");
// }

// console.log(swap("CamelCase"));
// console.log(swap("Tonight on XYZ-TV"));

// function stagger(str) {
//   let arr = str.split("");
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(/[a-z]/) && count % 2 === 0) {
//       arr[i] = arr[i].toUpperCase();
//     } else if (/[A-Z]/.test(arr[i]) && count % 2 === 1) {
//       arr[i] = arr[i].toLowerCase();
//     }
//     if (arr[i].match(/[a-z]/i)) count++;
//   }
//   return arr.join("");
// }

// console.log(stagger("ignore 77 the 4444 numbers"));
// console.log(stagger("ALL_CAPS"));

// function lengths(str) {
//   if (str.length === 0) return [];
//   let words = str.trim().split(" ");
//   let answer = [];

//   for (let i = 0; i < words.length; i++) {
//     answer[i] = words[i] + " " + words[i].length;
//   }
//   return answer;
// }

// console.log(lengths(""));

// function search(lookup, str) {
//   let words = str
//     .trim()
//     .split(" ")
//     .map((word) =>
//       word
//         .split("")
//         .filter((char) => /[a-zA-z]/.test(char))
//         .join("")
//     )
//     .filter((entry) => entry === lookup);

//   return words.length;
// }

// console.log(search("one", "one. two three, four? five one one one"));

// function search2(lookup, str) {
//   let ids = [];
//   let words = str
//     .trim()
//     .split(" ")
//     .map((word) =>
//       word
//         .split("")
//         .filter((char) => /[a-zA-z]/.test(char))
//         .join("")
//     );
//   words.forEach((entry, idx) => {
//     if (entry === lookup) {
//       ids.push(idx);
//     }
//   });
//   console.log(ids);
//   ids.forEach((id) => {
//     words[id] = `**${words[id].toUpperCase()}**`;
//   });

//   let answer = words.join(" ");
//   return answer;
// }

// console.log(search2("one", "one. two three, four? five one one one"));

// let word = "bob";
// console.log(
//   "bob bob. bob, bobby 123 - . ? , * ! _".match(new RegExp(`\\S`, "g"))
// );

// function search2(match, str) {
//   let searcher = new RegExp(`\\b${match}\\b`, "g");
//   return str.replace(searcher, `**${match.toUpperCase()}**`);
// }

// console.log(search2("one", "one .one. one, onesies two"));

// function rotate(arr) {
//   if (!Array.isArray(arr)) return undefined;
//   if (arr.length === 0) return [];
//   let first = arr.shift(1);
//   arr.push(first);
//   return arr;
// }

// console.log(rotate([7, 3, 5, 2, 9, 1]));

// console.log([7, 3, 5, 2, 9, 1].splice(0, 1));

// function rotate2(num, idx) {
//   let str = num.toString().split("");
//   let rotated = str.splice(str.length - idx, 1);
//   str.push(rotated[0]);

//   return +str.join("");
// }

// console.log(rotate2(735291, 7));

// 735291
// ^
// 352917
//  ^

// function rotate3(num) {
//   let strArr = num.toString().split("");
//   let item = "";
//   for (let i = 0; i < strArr.length; i++) {
//     item = strArr.splice(i, 1)[0];
//     strArr.push(item);
//   }
//   console.log(strArr);
//   return +strArr.join("");
// }

// console.log(rotate3([735291]));
// console.log(rotate3([3]));
// console.log(rotate3([35]));
// console.log(rotate3([8703529146]));
// let commandList = {
//   PUSH: 1,
//   MULT: 1,
//   PRINT: 1,
//   ADD: 1,
//   POP: 1,
// };
// let reg = 0;
// let stack = [];

// function minilang(str) {
//   let commands = str.trim().split(" ");
//   if (!check(commands)) return "invalid command";
//   controller(commands);
// }

// function controller(commands) {
//   commands.forEach((command) => {
//     if (/\d+/.test(command)) {
//       reg = +command;
//     } else {
//       switch (command) {
//         case "PUSH":
//           stack.push(reg);
//           break;
//         case "PRINT":
//           console.log(reg);
//           break;
//         case "ADD":
//           reg = +reg + +stack.pop();
//           break;
//         case "MULT":
//           reg = +reg * stack.pop();
//           break;
//         case "POP":
//           reg = +stack.pop();
//       }
//     }
//   });
// }

// function check(commands) {
//   for (let i = 0; i < commands.length; i++) {
//     if (!(commandList[commands[i]] || commands[i].match(/\d+/))) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(minilang("5 PUSH 3 MULT PRINT"));
// console.log(minilang("5 PRINT PUSH 3 PRINT ADD PRINT"));
// minilang("3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT");
// minilang("6 PUSH");

// function conv(str) {
//   let dict = { zero: 0, one: 1, two: 2 };
//   return str
//     .split(" ")
//     .map((word, idx) => {
//       if (dict.hasOwnProperty(word)) {
//         return dict[word];
//       } else {
//         return word;
//       }
//     })
//     .join(" ");
// }

// console.log(conv("one zero one two bob"));

// function fibLength(num) {
//   let prev = 1n;
//   let cur = 1n;
//   let i = 2;
//   while (cur.toString().length < num) {
//     [prev, cur] = [cur, prev + cur];
//     i += 1;
//   }
//   return i;
// }

// console.log(fibLength(1000n));
// let dict = {};
// function fib(num) {
//   if (num === 1 || num === 2) return 1;
//   if (dict[num]) {
//     return dict[num];
//   }
//   dict[num] = fib(num - 1) + fib(num - 2);
//   return dict[num];
// }

// console.log(fib(75));

// function fib2(num) {
//   if (num <= 2) return 1;

//   let prev = 1;
//   let cur = 1;

//   for (let i = 2; i < num; i++) {
//     [prev, cur] = [cur, prev + cur];
//   }

//   return cur;
// }

// console.log(fib2(75));

// function letterz(str) {
//   let lower = ((str.match(/[a-z]+/g)?.length || 0 / str.length) * 100).toFixed(
//     2
//   );
//   let upper = ((str.match(/[A-Z]+/g)?.length || 0 / str.length) * 100).toFixed(
//     2
//   );
//   let neither = (100 - lower - upper).toFixed(2);

//   return { lowercase: lower, uppercase: upper, neither: neither };
// }

// console.log(letterz("ass"));

// console.log("this splits a hypened-word into two words".match(/\b\w+\b/g));
// console.log("this keeps a hypened-word as one word".match(/\b[\w-]+\b/g));
// console.log(
//   "this keeps a hypened-word as one word plus last word using (s|$)".match(
//     /[\w-]+(\s|$)/g
//   )
// );

// let dict = {
//   cat: "feline",
//   bat: "batline",
//   dog: "knine",
// };

// function searchWord(text) {
//   let newText = text;
//   for (let word in dict) {
//     let regex = new RegExp(`\\b${word}\\b`, "gi");
//     newText = newText.replace(regex, `${dict[word]}`);
//     console.log(newText);
//   }
//   return newText;
// }

// console.log(searchWord("the cat jumped over the bat, but the dog was mad"));

// function lights(num) {
//   let arr = new Array(num).fill(0);

//   for (let count = 1; count <= num; count++) {
//     for (let idx = 0; idx < num; idx++) {
//       if ((idx + 1) % count === 0) {
//         if (arr[idx] === 0) {
//           arr[idx] = 1;
//         } else {
//           arr[idx] = 0;
//         }
//       }
//     }
//   }
//   let indexes = arr
//     .map((ele, idx) => {
//       if (ele === 1) {
//         return idx + 1;
//       } else if (ele === 0) {
//         return -1;
//       }
//     })
//     .filter((ele) => ele > 0);

//   return indexes;
// }

// function toggler(idx) {}

// console.log(lights(100));

// function lights(num) {
//   let arr = new Array(num).fill(0);

//   for (let count = 1; count <= num; count++) {
//     arr = toggler(arr, count);
//   }
//   let indexes = arr
//     .map((ele, idx) => {
//       if (ele === 1) {
//         return idx + 1;
//       } else if (ele === 0) {
//         return -1;
//       }
//     })
//     .filter((ele) => ele > 0);

//   return indexes;
// }

// function toggler(arr, count) {
//   return arr.map((ele, idx) => {
//     if ((idx + 1) % count === 0) {
//       if (ele === 0) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//     return ele;
//   });
// }

// console.log(lights(100));

// function trans(arr) {
//   let transposed = [];
//   let tmp;
//   for (let rowIdx = 0; rowIdx < arr[0].length; rowIdx += 1) {
//     transposed.push([]);
//   }
//   console.log(transposed);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//       console.log(i + "  " + j + "   " + arr[i][j]);
//       transposed[j].push(arr[i][j]);
//     }
//     console.log(transposed);
//   }
//   return transposed;
// }
// const matrix = [
//   [1, 5, 8, 5],
//   [4, 7, 2, 0],
//   [3, 9, 6, 1],
// ];
// console.log(trans(matrix));

// function dist(arr, count) {
//   let distinctCount = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let letterCount = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== i) {
//         if (arr[i] === arr[j]) letterCount++;
//       }
//     }
//     if (letterCount === 0) {
//       distinctCount++;
//     }
//     if (distinctCount >= count && letterCount === 0) return arr[i];
//   }
//   return "";
// }

// console.log(dist(["d", "b", "c", "z", , "c", , "a"], 4));

// function third(arr) {
//   let max = -Infinity;
//   let secondmax = -Infinity;
//   let thirdmax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       thirdmax = secondmax;
//       secondmax = max;
//       max = arr[i];
//     }
//     if (arr[i] < max && arr[i] >= secondmax) {
//       thirdmax = secondmax;
//       secondmax = arr[i];
//     }
//     if (arr[i] < max && arr[i] < secondmax && arr[i] > thirdmax) {
//       thirdmax = arr[i];
//     }
//     console.log(max + "  " + secondmax + "  " + thirdmax);
//   }
//   return thirdmax;
// }

// console.log(third([3, 2, 3, 1, 10]));
// function primes(str) {
//   let nums = str.match(/\d+/g);
//   let allNums = [];
//   nums.forEach((number) => {
//     sub(number).forEach((sub) => {
//       allNums.push(sub);
//     });
//   });
//   console.log(allNums);

//   return allNums.filter((ele) => primeMatch(Number(ele)));
// }

// function primeMatch(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(primes("a4bc2k133d"));

// function sub(str) {

//   let ans = [];
//   str.split("").forEach((element, idx) => {
//     ans.push(str.substring(0, idx + 1));
//   });
//   return ans;
// }

// function primes(str) {
//   let nums = [];
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       let substr = str.slice(i, j + 1);
//       if (/^\d+$/.test(substr)) {
//         nums.push(Number(substr));
//       }
//     }
//   }
//   console.log(nums);

//   return nums.filter((ele) => primeMatch(Number(ele)));
// }

// function primeMatch(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// console.log(primes("a4bc2k133d"));

//console.log("abc-".match(/[a-z-]/g));

let ans = [];
str.split("").forEach((ele, idx) => {
  ans.push(str.substring(0, idx + 1));
});
return ans;
