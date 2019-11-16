import createMove from "./createMove";
import { Piece, Game } from "..";

describe('createMove', () => {

  it('should finish game', () => {
    const pieces: Piece[] = [];
    for (let i = 0; i < 16; i++) {
      pieces.push({
        value: i + 1,
        canMove: false,
      });
    }
    // swap
    const temp = pieces[15];
    pieces[15] = pieces[14];
    pieces[14] = temp;
    const game: Game = {
      isEnded: false,
      pieces,
    };
    const newGame = createMove(game, 15);
    expect(newGame.isEnded).toBe(true);
  });

  it('should not finish game', () => {
    const pieces: Piece[] = [];
    for (let i = 0; i < 16; i++) {
      pieces.push({
        value: i + 1,
        canMove: false,
      });
    }
    // swap
    const temp = pieces[15];
    pieces[15] = pieces[0];
    pieces[0] = temp;
    const game: Game = {
      isEnded: false,
      pieces,
    };
    const newGame = createMove(game, 1); 
    expect(newGame.isEnded).toBe(false);
  });
});