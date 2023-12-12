const readline = require("readline-sync");

console.log("Welcome!");
console.log("First number?");
let n1 =readline.question();

console.log("Second number?");
let n2 =readline.question();

console.log("Operation?\n1)Add\n2)Sub\n3)Mul\n4)Div");
let op =readline.question();

let output;


function calc(n1,n2,op){
  if(op=="1"){
    return Number(n1)+Number(n2);
  }else if (op === "2"){
    return Number(n1)-Number(n2);
  }else if (op === "3"){
    return Number(n1)*Number(n2);
  }else if (op === "4"){
    return Number(n1)/Number(n2);
  }
}
console.log(`The result is ${calc(n1,n2,op)}`);