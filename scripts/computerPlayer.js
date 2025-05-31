import { HANDS } from "./hands.js";
import { Player } from "./player.js";

export class ComputerPlayer extends Player {
  constructor() {
    super("コンピューター");
  }

  chooseHand() {
    const handValues = Object.values(HANDS);
    const randomIndex = Math.floor(Math.random() * handValues.length);
    this.currentHand = handValues[randomIndex];
  }
}

export class CheatComputerPlayer extends ComputerPlayer {
  constructor() {
    super();
    this.name = "チートコンピューター";
  }

  chooseHand(playerHand) {
    switch (playerHand) {
      case HANDS.ROCK:
        this.currentHand = HANDS.SCISSORS;
        break;
      case HANDS.SCISSORS:
        this.currentHand = HANDS.PAPER;
        break;
      case HANDS.PAPER:
        this.currentHand = HANDS.ROCK;
        break;
      default:
        super.chooseHand();
    }
  }
}
