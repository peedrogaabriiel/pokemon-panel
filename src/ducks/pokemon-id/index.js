import HttpService from "../../services";

const prefix = "dragon-id/";

const Types = {
  SET_DRAGON_ID: prefix + "SET_DRAGON_ID",
  SET_LOADING: prefix + "SET_LOADING"
};

const setDragonId = dragon => ({
  payload: { dragon },
  type: Types.SET_DRAGON_ID
});

const setLoading = loading => ({
  payload: { loading },
  type: Types.SET_LOADING
});

const loadIdDragon = id => async (dispatch, _) => {
  dispatch(setLoading(true));
  const data = await HttpService.get(`/dragon/${id}`);
  dispatch(setDragonId(data));
  dispatch(setLoading(false));
  return data;
};

export const Creators = { loadIdDragon };

const initialState = {
  dragon: {},
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DRAGON_ID:
      return { ...state, dragon: action.payload.dragon };
    case Types.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
}
