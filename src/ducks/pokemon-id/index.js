import HttpService from "../../services";

const prefix = "pokemon-id/";

const Types = {
  SET_POKEMON_ID: prefix + "SET_POKEMON_ID",
};

const setPokemonId = (pokemon) => ({
  payload: { pokemon },
  type: Types.SET_POKEMON_ID,
});

const loadIdPokemon = (url) => async (dispatch, _) => {
  const data = await HttpService.get(url);

  dispatch(setPokemonId(data));

  return data;
};

export const Creators = { loadIdPokemon };

const initialState = {
  pokemon: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_POKEMON_ID:
      return { ...state, pokemon: action.payload.pokemon };
    case Types.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
