const read = require("readline-sync");

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

console.log("Enter loan amount: ");
let loanAmount = read.question();
while (invalidNumber(loanAmount) && loanAmount >= 0) {
  console.log("Invalid loan amount. Enter $0 - $Inifity");
  loanAmount = read.question();
}

console.log("Enter loan APR in %: ");
let interestRateYearly = read.question();
while (invalidNumber(interestRateYearly) && interestRateYearly >= 0) {
  console.log("Invalid percentage amount. Enter 0 - 100");
  interestRateYearly = read.question();
}
let interestRateMonthly = (interestRateYearly * 0.01) / 12;

console.log("Enter the loan duration in years");
let loanDurationYears = read.question();
while (invalidNumber(loanDurationYears) && loanDurationYears >= 0) {
  console.log("Invalid years");
  loanDurationYears = read.question();
}
let loanDurationMonths = loanDurationYears * 12;

let total =
  loanAmount *
  (interestRateMonthly /
    (1 - Math.pow(1 + interestRateMonthly, -loanDurationMonths)));

console.log(`$${total.toFixed(2)}`);
