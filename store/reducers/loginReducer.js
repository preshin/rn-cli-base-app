import { LOGIN, SHOW_LOADING, HIDE_LOADING } from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case SHOW_LOADING:
    //   return { ...state, isLoading: true };
    // case HIDE_LOADING:
    //   return { ...state, isLoading: false };
    case LOGIN:
      console.log("response", action.payload);
      return { ...state, ...action.payload, isAuthenticated: true };
    default:
      return state;
  }
};

export default loginReducer;
