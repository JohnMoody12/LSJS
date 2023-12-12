const readline = require("readline-sync");

function prompt(message){
  console.log(`=> ${message}`);
}

function invalidNumber(number){
  return number.trimStart() === ''|| Number.isNaN(Number(number));
}


console.log("Welcome!");
prompt("First number?")
let n1 =readline.question();

while(invalidNumber(n1)){
  prompt("Not a valid number");
  n1 = readline.question();
}

prompt("Second number?");
let n2 =readline.question();

while(invalidNumber(n2)){
  prompt("Not a valid number");
  n2 = readline.question();
}

prompt("Operation?\n1)Add\n2)Sub\n3)Mul\n4)Div");
let op =readline.question();
while(!['1','2','3','4'].includes(op)){
  prompt("Not a valid operation - 1, 2, 3, or 4");
  op = readline.question();
}

let output;

//test comment

  switch(op){
    case "1":
      output = Number(n1)+Number(n2);
      break;
    case "2":
      output = Number(n1)-Number(n2);
      break;
    case "3":
      output = Number(n1)*Number(n2);
      break;
    case "4":
      output = Number(n1)/Number(n2);
      break;  
}

console.log(`The result is ${output}`);