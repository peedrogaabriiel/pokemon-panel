import HttpService from '../../services'

const prefix = 'pokemon-id/'

const Types = {
	SET_LOADING: prefix + 'SET_LOADING',
	SET_CURRENT_ID: prefix + 'SET_CURRENT_ID',
	SET_POKEMON_ID: prefix + 'SET_POKEMON_ID',
}

const setPokemonId = (pokemon) => ({
	payload: { pokemon },
	type: Types.SET_POKEMON_ID,
})

const setLoading = (loading) => ({
	payload: { loading },
	type: Types.SET_LOADING,
})

const loadIdPokemon = (pokemonId) => async (dispatch, _) => {
	dispatch(setLoading(true))

	const data = await HttpService.get(
		`https://pokeapi.co/api/v2/pokemon/${pokemonId}`
	)

	dispatch(setPokemonId(data))
	dispatch(setLoading(false))

	return data
}

const setCurrentId = (currentId) => ({
	type: Types.SET_CURRENT_ID,
	payload: { currentId },
})

const decreaseId = (decrement = 1) => (dispatch, getState) => {
	const { currentId } = getState().pokemonId
	dispatch(setCurrentId(Math.max(currentId - decrement, 1)))
}

const increaseId = (increment = 1) => (dispatch, getState) => {
	const { currentId } = getState().pokemonId
	dispatch(setCurrentId(currentId + increment))
}

export const Creators = { decreaseId, increaseId, loadIdPokemon }

const initialState = {
	pokemon: {},
	currentId: 1,
	loading: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case Types.SET_CURRENT_ID:
			return { ...state, currentId: action.payload.currentId }
		case Types.SET_POKEMON_ID:
			return { ...state, pokemon: action.payload.pokemon }
		case Types.SET_LOADING:
			return { ...state, loading: action.payload.loading }
		default:
			return state
	}
}
