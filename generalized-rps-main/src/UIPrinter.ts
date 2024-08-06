import HMACCalculator from "./HMACCalculator";

class UIPrinter {

  moves: string[];
  hmacCalculator: HMACCalculator;

  constructor(moves: string[], hmacCalculator: HMACCalculator) {
    this.moves = moves;
    this.hmacCalculator = hmacCalculator;
  }

  printAllMoves() {
    console.log("Available moves: ");
    this.moves.forEach((move, i) => console.log(i + 1, " - ", move));
    console.log("0 - exit");
    console.log("? - help");
    console.log();
  }

  printHMAC() {
    console.log("HMAC: ", this.hmacCalculator.hmac);
    console.log();
  }

  printKey() {
    console.log("HMAC key: ", this.hmacCalculator.key);
    console.log();
  }

  printMove(move: string) {
    console.log("Your move: ", move);
  }

  printComputerMove(move: string) {
    console.log("Computer move: ", move);
  }

  printRoundResult(computerWon: boolean, userWon: boolean) {
    if (computerWon && userWon) console.log("It's a draw!");
    else if (computerWon) console.log("Computer won!");
    else console.log("You won!");

    console.log();
  }

  printTable(winLogicMap: Map<string, string[]>, moves: string[]) {
    console.log();
    const longestStringLength = Math.max(...moves.map(str => str.length), 4);
    const tableWidth = (longestStringLength + 3) * (moves.length + 1) - 1;
    const hr = "|" + "-".repeat(tableWidth) + "|";

    const printCell = (cell: string) => {
      const differenceInlength = longestStringLength - cell.length + 2;
      const spaceBeforeCell = " ".repeat(Math.floor(differenceInlength / 2))
      const spaceAfterCell = " ".repeat(Math.ceil(differenceInlength / 2));
      const finalString = "|" + spaceBeforeCell + cell + spaceAfterCell;

      process.stdout.write(finalString);
    };

    console.log(hr);
    printCell("Move");

    for (let key of winLogicMap.keys()) printCell(key);

    console.log("|");
    console.log(hr);

    for (let key1 of winLogicMap.keys()) {
      printCell(key1);

      for (let key2 of winLogicMap.keys()) {

        const arr = winLogicMap.get(key1);

        if (key1 === key2) printCell("draw");
        else if (arr.includes(key2)) printCell("win");
        else printCell("loss");
      }
      console.log("|");
    }
    console.log(hr);
    console.log();

  }

}

export default UIPrinter;