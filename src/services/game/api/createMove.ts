import Game from "../types/game";
import Piece from "../types/piece";
import { updateCanMovePieces, checkIsEnded } from "./common";

export default function createMove(game: Game, pieceIndex: number) {
  const { pieces } = game;
  const holeIndex = pieces.findIndex((piece) => piece.value === 16);
  const newPieces: Piece[] = [];

  pieces.forEach((piece, index) => {
    let sourceIndex = index;
    // swap
    if (index === pieceIndex) {
      sourceIndex = holeIndex;
    } else if (index === holeIndex) {
      sourceIndex = pieceIndex;
    }
    newPieces[index] = {
      ...pieces[sourceIndex],
    };
  });

  const isEnded = checkIsEnded(newPieces);
  if (isEnded) {
    // dont let them move
    newPieces.forEach((piece) => {
      piece.canMove = false;
    });
  } else {
    updateCanMovePieces(newPieces);
  }

  const newGame: Game = {
    isEnded,
    pieces: newPieces,
  };
  return newGame;
}