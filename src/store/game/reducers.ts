import {
  GameActionTypes, GameState, START_GAME, MOVE
} from "./types";

const initialState: GameState = {
  isReady: false,
};

export function gameReducer(
  state = initialState,
  action: GameActionTypes
): GameState {
  switch (action.type) {
    case START_GAME: {
      return {
        isReady: true,
        game: action.payload.game,
        startTime: action.payload.startTime,
      }
    }
    case MOVE: {
      return {
        ...state,
        game: action.payload,
      }
    }
    default: {
      return state;
    }
  }
}
