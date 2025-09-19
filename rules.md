 # TS-Tarot
 TS-Tarot, an CLI REPL app where you can select from 3 of the most common spreads.

 ### 1. Tarot Deck Structure
 A standard tarot deck consists of 78 cards, divided into two main groups:

 Major Arcana: 22 cards (e.g., The Fool, The Magician, The High Priestess).
 Minor Arcana: 56 cards, divided into 4 suits:
 Suits: Wands, Cups, Swords, Pentacles.
 Each suit has 14 cards:
 Numbered Cards: Ace (1) to 10.
 Court Cards: Page, Knight, Queen, King.

 ### 2. Card Properties
 Each tarot card typically has the following properties:

 Name: The name of the card (e.g., "The Fool", "Two of Cups").
 Type: Major Arcana or Minor Arcana.
 Suit: For Minor Arcana cards (e.g., Wands, Cups).
 Number: For numbered cards (e.g., 1–10).
 Meaning: A description of the card's meaning (upright and reversed).
 Reversed: Indicates whether the card is upright or reversed (optional).

 ### 3. Rules for Drawing Cards
 Shuffling: Cards are shuffled randomly before drawing.
 Drawing: Cards are drawn one at a time, either for a single card reading or a spread.
 Reversed Cards: Some cards may appear reversed, which changes their meaning.

 ### 4. Common Tarot Spreads
 Tarot readings often use specific layouts (spreads). Each position in a spread has a meaning:

 Single Card: A single card is drawn for a quick answer.
 Three-Card Spread: Past, Present, Future.
 Celtic Cross Spread: A 10-card spread with specific positional meanings.

 ### Possible Features
 Deck Customization:

    Allow users to use custom decks or subsets of cards (e.g., only Major Arcana).
    Reversed Card Probability:

    Define the probability of a card appearing reversed (e.g., 50/50 or user-configurable).
    Spread Validation:

    Ensure the correct number of cards is drawn for each spread.

    Card Replacement:

    Decide if cards are replaced back into the deck after drawing (e.g., for multiple readings).

    User Input Validation:

    Handle invalid inputs gracefully in the CLI (e.g., incorrect spread selection).

    Card Interpretation:

    Provide detailed interpretations for each card position in a spread.

    Shuffling Options:

    Allow different shuffling methods (e.g., simple randomization, riffle shuffle simulation).

    User Guidance:

    Provide instructions or tips for interpreting spreads and meanings.