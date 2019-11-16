import Piece from "../types/piece";
import Game from "../types/game";
import { updateCanMovePieces, checkIsEnded } from "./common";
import { shuffleArray } from "../../../utils";

export default function createGame() {
  let pieces!: Piece[];
  let isEnded!: boolean;
  // make sure it is not ended
  do {
    pieces = [];
    for (let i = 0; i < 16; i++) {
      pieces.push({
        canMove: false,
        value: i + 1,
      });
    }
    shuffleArray(pieces);
    updateCanMovePieces(pieces);
    isEnded = checkIsEnded(pieces);
  } while (isEnded);

  const game: Game = {
    isEnded,
    pieces,
  };
  return game;
}
