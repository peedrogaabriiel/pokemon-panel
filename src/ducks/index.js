import thunk from 'redux-thunk'
import pokemonId from './pokemon-id'
import logger from 'redux-logger'

import { combineReducers, createStore, applyMiddleware } from 'redux'

const reducers = combineReducers({
	pokemonId,
})

const store = createStore(reducers, applyMiddleware(thunk, logger))

export default store
