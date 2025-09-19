import { MajorArcanaCard } from "../models/MajorArcanaCard.ts";

export function shuffle(cards: MajorArcanaCard[]): MajorArcanaCard[] {
  const shuffledCards = [...cards]; // Create a copy of the array
  for (let index = shuffledCards.length - 1; index > 0; index--) { // Use .length to get the array size
    const randomIndex = Math.floor(Math.random() * (index + 1)); // Pick a random index
    [shuffledCards[index], shuffledCards[randomIndex]] = [shuffledCards[randomIndex], shuffledCards[index]]; // Swap elements
  }
  return shuffledCards;
}

// This function can be called multiple times based on the spread
export function draw(cards: MajorArcanaCard[]): MajorArcanaCard {
  // Generate a random index based on the length of the array and pick a card
  const randomIndex = Math.floor(Math.random() * cards.length);
  const drawnCard = cards[randomIndex];

  // Randomly decide if the card is reversed (50% chance)
  const isReversed = Math.random() < 0.5;
  drawnCard.isReversed = isReversed;

  return drawnCard;
}

// TODO: new function here to present a drawn card