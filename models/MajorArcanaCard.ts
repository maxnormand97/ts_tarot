import { TarotCard } from "./TarotCard.ts";

export class MajorArcanaCard implements TarotCard {
  name: string;
  uprightMeaning: string;
  reversedMeaning: string;
  isReversed: boolean;

  constructor(name: string, uprightMeaning: string, reversedMeaning: string) {
    this.name = name;
    this.uprightMeaning = uprightMeaning;
    this.reversedMeaning = reversedMeaning;
    this.isReversed = false; // Default to not reversed because positive vibes
  }
}