import movies from "./movies_reducer";
import { combineReducers } from "redux";
import favorites from "./fav_reducer";

const rootReducer = combineReducers({
  movies,
  favorites,
});

export default rootReducer;
