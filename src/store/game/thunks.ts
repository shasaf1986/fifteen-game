import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../../store";
import { startGame, move } from "./actions";
import { createGame, createMove } from "../../services/game";

export const startGameRequest = (): ThunkAction<void, AppState, null, Action<string>> => dispatch => {
  const game = createGame();
  dispatch(startGame(game, new Date()));
};

export const moveRequest = (pieceIndex: number):
  ThunkAction<void, AppState, null, Action<string>> => (dispatch, getState) => {
    const state = getState();
    const game = createMove(state.game.game!, pieceIndex);
    dispatch(move(game));
  };
