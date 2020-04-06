const prefix = "user-auth/";

const Types = {
  SET_AUTHENTICATED: prefix + "SET_AUTHENTICATED"
};

const setAuthenticated = authenticated => ({
  payload: { authenticated },
  type: Types.SET_AUTHENTICATED
});

export const Creators = { setAuthenticated };

const initialState = {
  authenticated: localStorage.getItem("authenticated")
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_AUTHENTICATED:
      return { ...state, authenticated: action.payload.authenticated };
    default:
      return state;
  }
}
