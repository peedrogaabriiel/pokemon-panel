import thunk from "redux-thunk";
import userAuth from "./user-auth";
import loadIdPokemon from "./pokemon-id";
import loadPokemons from "./load-pokemons";
import logger from "redux-logger";

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  userAuth,
  loadPokemons,
  loadIdPokemon,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
