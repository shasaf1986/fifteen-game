import Piece from "../types/piece";

export function updateCanMovePieces(pieces: Piece[]) {
  const holeIndex = pieces.findIndex((piece) => piece.value === 16);

  pieces.forEach((piece, index) => {
    piece.canMove =
      // left
      index - 1 === holeIndex ||
      // right
      index + 1 === holeIndex ||
      // top
      index - 4 === holeIndex ||
      // bottom
      index + 4 === holeIndex;
  });
  return pieces;
}

export function checkIsEnded(pieces: Piece[]) {
  return pieces.every((piece, index) =>
    piece.value === index + 1
  );
}
