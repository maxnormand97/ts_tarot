import { Input, Select } from "https://deno.land/x/cliffy@v0.25.7/prompt/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.7/ansi/colors.ts";
import { majorArcanaCards } from "./data/majorArcanaCards.ts";
import { ThreeCardSpread } from "./models/ThreeCardSpread.ts";
import { SingleCardSpread } from "./models/SingleCardSpread.ts"

// TODO: should really extract into the Utils dir
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runProgram() {
  console.log(colors.magenta("🌟 Welcome to the Tarot REPL! 🌟"));

  while (true) {
    const action = await Select.prompt({
      message: "What spread would you like to play?",
      options: [
        { name: "Single Spread", value: "single" },
        { name: "Past, Present, Future Spread", value: "past_present_future" },
        { name: "Exit", value: "exit" },
      ],
    });

    switch (action) {
      case "single":
        console.log(colors.green("🔮 You selected the Single Spread! Drawing one card..."));
        const singleCardSpread = new SingleCardSpread(majorArcanaCards);
        await sleep(1000);
        console.log("Deck shuffled!");
        singleCardSpread.shuffle();
        console.log("Drawing card...");
        await sleep(1000);
        singleCardSpread.draw();
        break;

      case "past_present_future":
        console.log(colors.green("🔮 You selected the Past, Present, Future Spread! Drawing three cards..."));
        const threeCardSpread = new ThreeCardSpread(majorArcanaCards);
        threeCardSpread.shuffle();
        console.log("Deck shuffled!");

        console.log("Drawing the Past card...");
        await sleep(1000);
        threeCardSpread.drawPast();

        console.log("Drawing the Present card...");
        await sleep(1000);
        threeCardSpread.drawPresent();

        console.log("Drawing the Future card...");
        await sleep(1000);
        threeCardSpread.drawFuture();
        break;

      case "exit":
        console.log(colors.yellow("Goodbye!"));
        return;

      default:
        console.log(colors.red("Unknown option. Please try again."));
    }
  }
}

runProgram();
