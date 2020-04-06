const prefix = "navigation/";

const Types = {
  SET_PATHNAME: prefix + "SET_PATHNAME"
};

const setPathName = pathname => ({
  type: Types.SET_PATHNAME,
  payload: { pathname }
});

export const Creators = {
  setPathName
};

const initialState = { pathname: "" };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_PATHNAME:
      return { ...state, pathname: action.payload.pathname };
    default:
      return state;
  }
}
