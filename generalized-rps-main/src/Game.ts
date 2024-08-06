import HMACCalculator from "./HMACCalculator";
import UIPrinter from "./UIPrinter";
import checkHmac from "./checkHMAC";
const prompt = require("prompt-sync")();

class Game {

  moves: string[];
  gameOver = false;
  hmacCalculator: HMACCalculator;
  winLogicMap: Map<string, string[]>;
  numbersToMovesMap: Map<string, string>;
  private computerMove: string;
  printer: UIPrinter;

  constructor(moves: string[], hmacCalculator: HMACCalculator) {
    this.printer = new UIPrinter(moves, hmacCalculator);
    this.moves = moves;
    this.hmacCalculator = hmacCalculator;
    this.generateWinLogicMap();
    this.generateNumbersToMovesMap();
  }

  startRound() {
    this.makeComputerMove();
    this.hmacCalculator.generateKey();
    this.hmacCalculator.calculateHMAC(this.computerMove);
    this.printer.printHMAC();
    this.printer.printAllMoves();
    this.makeUserMove();
  }

  startGame() {
    while (!this.gameOver) {
      this.startRound();
    }
  }

  private makeComputerMove() {
    this.computerMove = this.moves[Math.round(Math.random() * (this.moves.length - 1))];
  }

  private makeUserMove() {
    const moveCode: string = prompt("Enter your move: ");
    const move = this.numbersToMovesMap.get(moveCode);
    if (move) this.handleUserMove(move);
    if (moveCode === "0") this.gameOver = true;
    if (moveCode === "?") this.printer.printTable(this.winLogicMap, this.moves);
  }

  private handleUserMove(move: string) {
    this.printer.printMove(move);
    this.printer.printComputerMove(this.computerMove);

    if (this.winLogicMap.get(move).includes(this.computerMove)) this.printer.printRoundResult(false, true);
    else if (move === this.computerMove) this.printer.printRoundResult(true, true);
    else this.printer.printRoundResult(true, false);

    checkHmac(this.hmacCalculator, this.computerMove);
  }

  private generateWinLogicMap() {
    const map = new Map();
    this.moves.forEach((move, i) => {
      const start = i - (this.moves.length - 1) / 2;
      const arr = [];

      if (start < 0) arr.push(...this.moves.slice(0, i), ...this.moves.slice(this.moves.length + start));
      else arr.push(...this.moves.slice(start, i));
      map.set(move, arr);
    });
    this.winLogicMap = map;
  }

  private generateNumbersToMovesMap() {
    const map = new Map();
    this.moves.forEach((move, i) => map.set((i + 1).toString(), move));
    this.numbersToMovesMap = map;
  }
}

export default Game;