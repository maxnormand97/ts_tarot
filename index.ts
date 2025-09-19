import { majorArcanaCards } from "./data/majorArcanaCards.ts";
// import { MajorArcanaCard } from "./models/MajorArcanaCard.ts";
// import { SingleCardSpread } from "./models/SingleCardSpread.ts";
import { ThreeCardSpread } from "./models/ThreeCardSpread.ts";


// TODO: eventually this will be Encapsulated in a Game class
// const singleCardSpread = new SingleCardSpread(majorArcanaCards);
// singleCardSpread.shuffle(); // Reuses the shuffle function
// const drawnCard = singleCardSpread.draw(); // Reuses the draw function
// console.log("Drawn Card:", drawnCard);

const threeCardSpread = new ThreeCardSpread(majorArcanaCards)
threeCardSpread.shuffle();
threeCardSpread.drawPast();
threeCardSpread.drawPresent();
threeCardSpread.drawFuture();