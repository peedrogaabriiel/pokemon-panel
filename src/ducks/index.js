import thunk from "redux-thunk";
import loadIdPokemon from "./pokemon-id";
import loadPokemons from "./load-pokemons";
import logger from "redux-logger";

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  loadPokemons,
  loadIdPokemon,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
