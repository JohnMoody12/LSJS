class Card {
  constructor() {
    //STUB
    // What sort of state does a card need?
    // Rank? Suit? Points?
  }
}

class Deck {
  constructor() {
    //STUB
    // What sort of state does a deck need?
    // 52 Cards?
    // obviously, we need some data structure to keep track of cards
    // array, object, something else?
    this.deck = [
      "2H",
      "2C",
      "2D",
      "2S",
      "3H",
      "3C",
      "3D",
      "3S",
      "4H",
      "4C",
      "4D",
      "4S",
    ];
  }

  deal() {
    let dealtNum = Math.floor(Math.random() * 12);
    return this.deck.splice(dealtNum)[0];
  }
}

class Participant {
  constructor() {
    //STUB
    // What sort of state does a participant need?
    // Score? Hand? Amount of money available?
    // What else goes here? all the redundant behaviors from Player and Dealer?
    this.hand = [];
  }
}

class Player extends Participant {
  constructor() {
    //STUB
    // What sort of state does a player need?
    // Score? Hand? Amount of money available?
  }

  hit() {
    this.hand.push(deck.deal());
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }
}

class Dealer extends Participant {
  // Very similar to a Player; do we need this?

  constructor() {
    //STUB
    // What sort of state does a dealer need?
    // Score? Hand? Deck of cards? Bow tie?
  }

  hit() {
    //STUB
  }

  stay() {
    //STUB
  }

  isBusted() {
    //STUB
  }

  score() {
    //STUB
  }

  hide() {
    //STUB
  }

  reveal() {
    //STUB
  }

  deal() {
    //STUB
    // does the dealer or the deck deal?
  }
}

class TwentyOneGame {
  constructor() {
    //STUB
    // What sort of state does the game need?
    // A deck? Two participants?
    let deck = new Deck();
    let player = new Player();
  }

  start() {
    //SPIKE
    this.displayWelcomeMessage();
    this.dealCards();
    this.showCards();
    this.playerTurn();
    this.dealerTurn();
    this.displayResult();
    this.displayGoodbyeMessage();
  }

  dealCards() {
    //STUB
  }

  showCards() {
    //STUB
  }

  playerTurn() {
    //STUB
  }

  dealerTurn() {
    //STUB
  }

  displayWelcomeMessage() {
    //STUB
  }

  displayGoodbyeMessage() {
    //STUB
  }

  displayResult() {
    //STUB
  }
}

let game = new TwentyOneGame();
// game.start();

let d = new Deck();
console.log(d.deal());
