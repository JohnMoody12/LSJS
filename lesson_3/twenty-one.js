let deck = [];
let playerHand = [];
let dealerHand = [];

const readline = require("readline-sync");

function initializeDeck() {
  deck = [
    "2",
    "2",
    "2",
    "2",
    "3",
    "3",
    "3",
    "3",
    "4",
    "4",
    "4",
    "4",
    "5",
    "5",
    "5",
    "5",
    "6",
    "6",
    "6",
    "6",
    "7",
    "7",
    "7",
    "7",
    "8",
    "8",
    "8",
    "8",
    "9",
    "9",
    "9",
    "9",
    "10",
    "10",
    "10",
    "10",
    "J",
    "J",
    "J",
    "J",
    "Q",
    "Q",
    "Q",
    "Q",
    "K",
    "K",
    "K",
    "K",
    "A",
    "A",
    "A",
    "A",
  ];
  return true;
}

function dealInitial() {
  playerHand.push(cardSelection());
  playerHand.push(cardSelection());
  dealerHand.push(cardSelection());
  dealerHand.push(cardSelection());

  console.log(`Dealer has ${dealerHand[0]} and unknown card`);
  console.log(`You have ${playerHand[0]} and ${playerHand[1]}`);
}

function dealOnePlayer(deck) {
  let card = cardSelection(deck);
  playerHand.push(cardSelection(deck));
  console.log(`You're dealt a ${card}`);
}

function dealOneDealer(deck) {
  playerHand.push(cardSelection(deck));
}

function cardSelection() {
  let selection = Math.floor(Math.random() * 52);
  let card = deck[selection];
  deck.splice(selection, 1);
  return deck[selection];
}

function playerChoice() {
  let choice = readline.question("Hit or stay? (h or s)");
  return choice;
}

function dealerChoice() {
  //if
}

function game() {
  initializeDeck();
  console.log(deck);
  dealInitial(deck);
  while (true) {
    let pc = playerChoice();
    if (pc === "h") {
      dealOnePlayer();
    }
    dealerChoice();

    if (winCondition() || bustCondition()) {
      break;
    }
  }
}

game();
