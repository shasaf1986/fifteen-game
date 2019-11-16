import { createStore as createReduxStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { gameReducer } from "./game/reducers";
import { createLogger } from 'redux-logger';

const rootReducer = combineReducers({
  game: gameReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function createStore() {
  const loggerMiddleware = createLogger();
  const middlewares = [thunkMiddleware, loggerMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  const store = createReduxStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  return store;
}
