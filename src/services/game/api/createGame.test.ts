import createGame from "./createGame";

describe('createGame', () => {

  it('should create new game', () => {
    const game = createGame();
    expect(game.isEnded).toBe(false);
  });
});