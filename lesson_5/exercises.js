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

function sub2(str) {
  let answer = [];
  let arr = str.split("");
  let sub = [[]];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      sub.push(arr[j]);
    }
    console.log(sub);
  }
}

console.log(sub2("abcde"));
