import { MajorArcanaCard } from "./MajorArcanaCard.ts";
import { Spread } from "./Spread.ts";
import { shuffle, draw } from "../index.ts";

// TODO: all of these will need to re-use the
// shuffle and draw function each instance of this class
// is essentially a game
export class SingleCardSpread implements Spread {
  majorArcanaCards: MajorArcanaCard[];

  constructor(cards: MajorArcanaCard[]) {
    // Initialize the deck of cards
    this.majorArcanaCards = [...cards];
  }

  // Use the imported shuffle function
  shuffle(): void {
    this.majorArcanaCards = shuffle(this.majorArcanaCards);
  }

  // Use the imported draw function
  draw(): MajorArcanaCard {
    if (this.majorArcanaCards.length === 0) {
      throw new Error("No cards left to draw!");
    }
    const drawnCard = draw(this.majorArcanaCards); // Get a random card
    // Remove the drawn card from the deck
    this.majorArcanaCards = this.majorArcanaCards.filter(card => card !== drawnCard);
    console.log("DECK COUNT", this.majorArcanaCards.length)
    return drawnCard;
  }
}