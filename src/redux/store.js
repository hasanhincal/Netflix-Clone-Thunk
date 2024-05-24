import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import genreReducer from "./reducers/genreReducer";
import movieReducer from "./reducers/movieReducer";

const rootReducer = combineReducers({
  genres: genreReducer,
  movies: movieReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
