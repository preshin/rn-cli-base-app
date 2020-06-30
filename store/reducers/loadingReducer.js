import { LOGIN, SHOW_LOADING, HIDE_LOADING } from "../actions/types";

const INITIAL_STATE = {
  isLoading: false,
};

const loadingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return { ...state, isLoading: true };
    case HIDE_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default loadingReducer;

export const showLoading = () => {
  return (dispatch, state) => {
    dispatch({ type: SHOW_LOADING });
  };
};

export const hideLoading = () => {
  return (dispatch, state) => {
    dispatch({ type: SHOW_LOADING });
  };
};
