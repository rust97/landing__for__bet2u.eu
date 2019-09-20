import { combineReducers } from "redux";
import { mainReducer } from "./matches";

export const rootReducer = combineReducers({
  matches: mainReducer
});
