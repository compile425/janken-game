import { HANDS } from "./hands.js";
import { Player } from "./player.js";
import { ComputerPlayer, CheatComputerPlayer } from "./computerPlayer.js";

export class JankenGame {
  constructor(playerName) {
    this.player = new Player(playerName);
    this.computer = new ComputerPlayer();
  }

  setComputerType(type) {
    if (type === "normal") {
      this.computer = new ComputerPlayer();
    } else {
      this.computer = new CheatComputerPlayer();
    }
  }

  playRound(playerChoice) {
    this.player.chooseHand(playerChoice);
    if (this.computer instanceof CheatComputerPlayer) {
      this.computer.chooseHand(this.player.currentHand);
    } else {
      this.computer.chooseHand();
    }
    const playerHand = this.player.currentHand;
    const computerHand = this.computer.currentHand;
    let result = "";
    if (playerHand === computerHand) {
      result = "draw";
    } else if (
      (playerHand === HANDS.ROCK && computerHand === HANDS.SCISSORS) ||
      (playerHand === HANDS.SCISSORS && computerHand === HANDS.PAPER) ||
      (playerHand === HANDS.PAPER && computerHand === HANDS.ROCK)
    ) {
      result = "win";
    } else {
      result = "lose";
    }
    return {
      playerHand: playerHand,
      computerHand: computerHand,
      result: result,
    };
  }
}
