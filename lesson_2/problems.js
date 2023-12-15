const read = require("readline-sync");
/*function greetings(array, obj) {
  return `Hello ${array[0]} ${array[1]} ${array[2]}! Nice to have a ${obj["title"]} ${obj.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
*/

console.log("Name?");
let name = read.question();

if (name[name.length - 1] === "!") {
  console.log(`${name.slice(0, -1).toLocaleUpperCase()}`);
} else {
  console.log("Hi");
}
