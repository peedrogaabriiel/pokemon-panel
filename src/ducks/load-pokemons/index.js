import HttpService from "../../services";

const prefix = "load-pokemons/";

const Types = {
  SET_POKEMON: prefix + "SET_POKEMON",
};

const setPokemon = (listPokemons) => ({
  payload: { listPokemons },
  type: Types.SET_POKEMON,
});

const loadPokemons = () => async (dispatch, _) => {
  const data = await HttpService.get("/pokemon");

  dispatch(setPokemon(data.results));
  return data;
};

export const Creators = { loadPokemons, setPokemon };

const initialState = {
  listPokemons: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_POKEMON:
      return { ...state, listPokemons: action.payload.listPokemons };
    default:
      return state;
  }
}
