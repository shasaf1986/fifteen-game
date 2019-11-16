import { Game } from "../../services/game";

export const MOVE = 'MOVE';
export const START_GAME = "START_GAME";

export interface Move {
  pieceIndex: number;
}

export interface StartGamePayload {
  game: Game;
  startTime: Date;
}

export interface StartGameAction {
  type: typeof START_GAME;
  payload: StartGamePayload;
}

export interface MoveAction {
  type: typeof MOVE;
  payload: Game;
}

export interface GameState {
  isReady: boolean;
  game?: Game;
  startTime?: Date;
}

export type GameActionTypes = StartGameAction | MoveAction;
