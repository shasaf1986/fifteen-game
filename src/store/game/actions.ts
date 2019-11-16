import {
  START_GAME, MOVE,
  StartGameAction, MoveAction,
} from "./types";
import { Game } from "../../services/game";

export function startGame(game: Game, startTime: Date): StartGameAction {
  return {
    type: START_GAME,
    payload: {
      game,
      startTime,
    },
  };
}

export function move(game: Game): MoveAction {
  return {
    type: MOVE,
    payload: game,
  };
}

