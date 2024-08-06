import GameGuard from "./GameGuard";
import Game from "./Game";
import HMACCalculator from "./HMACCalculator";

const moves = process.argv.slice(2);
const guard = new GameGuard(moves);

if (!guard.argsAreInvalid) {
  const hmacCalculator = new HMACCalculator();
  const game = new Game(moves, hmacCalculator);
  game.startGame();
}