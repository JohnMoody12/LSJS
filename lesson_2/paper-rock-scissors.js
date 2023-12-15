const read = require("readline-sync");

let moves = ["rock", "paper", "scissors"];
let again = "";
while (true) {
  console.log(`Enter a move: ${moves.join(", ")}.`);
  let playerMove = read.question();

  while (!moves.includes(playerMove)) {
    console.log(`Invalid move, try: ${moves.join(", ")}.`);
    playerMove = read.question();
  }

  playerMove = moves.indexOf(playerMove).toString();
  let computerMove = Math.floor(Math.random() * 3).toString();

  if (
    (playerMove === "0" && computerMove === "1") ||
    (playerMove === "1" && computerMove === "2") ||
    (playerMove === "2" && computerMove === "0")
  ) {
    console.log(`Computer played ${moves[computerMove]} - you lose.`);
  } else if (
    (playerMove === "0" && computerMove === "2") ||
    (playerMove === "1" && computerMove === "0") ||
    (playerMove === "2" && computerMove === "1")
  ) {
    console.log(`Computer played ${moves[computerMove]} - you win!`);
  } else if (playerMove === computerMove) {
    console.log(`Computer played ${moves[computerMove]} - you tie!`);
  }

  console.log("Again? y/n");
  again = read.question();

  while (again !== "y" && again !== "n") {
    console.log("Invalid answer, try y or n.");
    again = read.question();
  }
  if (again === "n") break;
}
