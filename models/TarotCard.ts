export interface TarotCard {
  // Properties of a Tarot card
  // TODO: implement the optional properties for minor arcana when we have that
  // class
    name: string;
    uprightMeaning: string;
    reversedMeaning: string;
    isReversed: boolean;
  }