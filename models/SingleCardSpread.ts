import { MajorArcanaCard } from "./MajorArcanaCard.ts";
import { Spread } from "./Spread.ts";
import { shuffle, draw } from "../utils/CardUtils.ts";

export class SingleCardSpread implements Spread {
  majorArcanaCards: MajorArcanaCard[];
  anotherValue: string;

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

    console.log("========================================");
    console.log("🔮Card Drawn!");
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
}