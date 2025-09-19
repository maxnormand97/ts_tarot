import { MajorArcanaCard } from "./MajorArcanaCard.ts";
import { Spread } from "./Spread.ts";
import { shuffle, draw } from "../utils/CardUtils.ts";

export class ThreeCardSpread implements Spread {
  majorArcanaCards: MajorArcanaCard[];

  constructor(cards: MajorArcanaCard[]) {
    this.majorArcanaCards = [...cards];
  }

  shuffle(): void {
    this.majorArcanaCards = shuffle(this.majorArcanaCards);
  }

  // Make it private
  private drawCard(context: string): MajorArcanaCard {
    if (this.majorArcanaCards.length === 0) {
      throw new Error("No cards left to draw!");
    }
    const drawnCard = draw(this.majorArcanaCards); // Get a random card
    // Remove the drawn card from the deck
    this.majorArcanaCards = this.majorArcanaCards.filter(card => card !== drawnCard);
    console.log("DECK COUNT", this.majorArcanaCards.length);
    console.log(`${context} Card...`);
    console.log(drawnCard, "YOU DREW")
    return drawnCard;
  }

  drawPast(): MajorArcanaCard {
    return this.drawCard("PAST");
  }

  drawPresent(): MajorArcanaCard {
    return this.drawCard("PRESENT");
  }

  drawFuture(): MajorArcanaCard {
    return this.drawCard("FUTURE");
  }
}