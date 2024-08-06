class GameGuard {

  argsAreInvalid: boolean;

  constructor(moves: string[]) {
    if (moves.length < 3) {
      console.log("Provide at least 3 arguments!");
      this.argsAreInvalid = true;
    }

    if (moves.length % 2 === 0) {
      console.log("Provide odd number of arguments!");
      this.argsAreInvalid = true;
    }

    if (moves.length !== new Set(moves).size) {
      console.log("Provide unique arguments!");
      this.argsAreInvalid = true;
    }

    if (this.argsAreInvalid) this.displayCorrectExamples();
  }

  displayCorrectExamples() {
    console.log();
    console.log("examples: ")
    console.log("1. Rock Paper Scissors");
    console.log("2. Rock Paper Scissors Lizard Spock");
    console.log("3. 1 2 3 4 5 6 7 8 9");
    console.log("4. arthur morgana merlin");
    console.log("5. dog cat bear bird wolf lion horse")
    console.log();
  }
}

export default GameGuard;