let cards = [];

let sum = 0;

let hasBlackjack = false;
let isAlive = false;

let message = "";

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

let player = {
  name: "Emir",
  chips: 165,
};

let playerEl = document.querySelector("#player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackjack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }

  messageEl.innerText = message;
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;

    cards.push(card);

    renderGame();
  }
}

function getRandomCard() {
  let newCard = Math.floor(Math.random() * 13) + 1;
  if (newCard > 10) {
    return 10;
  } else if (newCard === 1) {
    return 11;
  } else {
    return newCard;
  }
}
