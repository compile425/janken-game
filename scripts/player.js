import { HANDS } from './hands.js';

export class Player {
  constructor(name) {
    this.name = name;
    this.currentHand = null;
  }

  chooseHand(hand) {
    this.currentHand = hand;
  }
};