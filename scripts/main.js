import { HANDS } from "./hands.js";
import { JankenGame } from "./jankenGame.js";

const playerHandDisplayEl = document.getElementById("player-hand-display");
const computerHandDisplayEl = document.getElementById("computer-hand-display");
const resultMessageEl = document.getElementById("result");
const handButtons = document.querySelectorAll(".hand-btn");
const cheatModeToggleBtn = document.getElementById("cheatMode");

const game = new JankenGame("あなた");

const updateUI = (gameResult) => {
  playerHandDisplayEl.textContent = gameResult.playerHand;
  computerHandDisplayEl.textContent = gameResult.computerHand;
  resultMessageEl.classList.remove("win", "lose", "draw");
  let message = "";
  switch (gameResult.result) {
    case "win":
      message = "あなたの勝ち！";
      resultMessageEl.classList.add("win");
      break;
    case "lose":
      message = "あなたの負け！";
      resultMessageEl.classList.add("lose");
      break;
    case "draw":
      message = "あいこ！";
      resultMessageEl.classList.add("draw");
      break;
  }
  resultMessageEl.textContent = message;
};

handButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = HANDS[event.currentTarget.id.toUpperCase()];
    const gameResult = game.playRound(playerChoice);
    updateUI(gameResult);
  });
});

let isCheatModeActive = false;
cheatModeToggleBtn.addEventListener("click", () => {
  isCheatModeActive = !isCheatModeActive;
  if (isCheatModeActive) {
    game.setComputerType("cheat");
    cheatModeToggleBtn.textContent = "チートモード: オン";
    cheatModeToggleBtn.classList.add("active");
    document.body.classList.add("cheat-active");
  } else {
    game.setComputerType("normal");
    cheatModeToggleBtn.textContent = "チートモード: オフ";
    document.body.classList.remove("cheat-active");
  }
});
