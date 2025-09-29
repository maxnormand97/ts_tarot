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

  // TODO: make the output of the sexy
  private drawCard(context: string): MajorArcanaCard {
    if (this.majorArcanaCards.length === 0) {
      throw new Error("No cards left to draw!");
    }
    const drawnCard = draw(this.majorArcanaCards); // Get a random card
    // Remove the drawn card from the deck
    this.majorArcanaCards = this.majorArcanaCards.filter(card => card !== drawnCard);
    // TODO: going to have to make this a shared presentation function.
    console.log("========================================");
    console.log(`🔮 ${context} Card Drawn!`);
    console.log("========================================");
    console.log(`✨ Name: ${drawnCard.name}`);
    console.log(`🔀 Orientation: ${drawnCard.isReversed ? "Reversed" : "Upright"}`);
    console.log(
      `📖 Meaning: ${
        drawnCard.isReversed ? drawnCard.reversedMeaning : drawnCard.uprightMeaning
      }`
    );
    console.log("========================================");
    console.log(`Remaining cards in the deck: ${this.majorArcanaCards.length}`);
    console.log("========================================");
    console.log("\n");

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