import Piece from "./piece";

export default interface Game {
  pieces: Piece[];
  isEnded: boolean;
}
