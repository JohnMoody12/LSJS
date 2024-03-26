const readline = require("readline-sync");

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9], // rows
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9], // columns
  [1, 5, 9],
  [3, 5, 7], // diagonals
];

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = " ";
  }

  return board;
}
function displayBoard(board) {
  {
    //console.clear();
    console.log("");
    console.log("     |     |");
    console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
    console.log("     |     |");
    console.log("");
  }
}

let board = initializeBoard();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function playerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");
  console.log(`Choose a square (${joinOr(emptySquares)})`);
  let square = readline.question().trim();
  while (!emptySquares.includes(square)) {
    console.log("Invalid Input");
    square = readline.question().trim();
  }
  board[square] = "X";
  displayBoard(board);
}

function findAtRiskSquare(line, board) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === "X").length === 2) {
    let unusedSquare = line.find((square) => board[square] === " ");
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }

  return null;
}

function computerChoosesSquare(board) {
  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board);
    if (square) break;
  }

  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares.length);
    square = emptySquares[randomIndex];
  }

  board[square] = "O";
  displayBoard(board);
}

function boardFull(board) {
  if (Object.keys(board).filter((key) => board[key] === " ").length === 0) {
    return true;
  }
  return false;
}

function joinOr(arr, delimiter = ", ", word = "or") {
  switch (arr.length) {
    case 0:
      return "";
    case 1:
      return arr[0];
    case 2:
      return arr[0] + word + arr[1];
    default:
      return (
        arr.slice(0, arr.length - 1).join(delimiter) +
        `${delimiter}${word} ${arr[arr.length - 1]}`
      );
  }
}

function winCondition(board) {
  for (let i = 0; i < WINNING_LINES.length; i++) {
    let [sq1, sq2, sq3] = WINNING_LINES[i];
    if (board[sq1] === "X" && board[sq2] === "X" && board[sq3] === "X") {
      return "Player";
    } else if (board[sq1] === "O" && board[sq2] === "O" && board[sq3] === "O") {
      return "Computer";
    }
  }
  return null;
}

async function ticTacToe() {
  while (true) {
    playerChoosesSquare(board);
    await delay(500);
    if (!!winCondition(board) || boardFull(board)) {
      if (winCondition(board)) {
        console.log(`${winCondition(board)} won!`);
        break;
      } else {
        console.log("It's a tie");
        break;
      }
    }
    computerChoosesSquare(board);
    await delay(500);
    if (!!winCondition(board) || boardFull(board)) {
      if (winCondition(board)) {
        console.log(`${winCondition(board)} won!`);
        break;
      } else {
        console.log("It's a tie");
        break;
      }
    }
  }
}

ticTacToe();
