import {SHOW_LOADING, LOGIN, HIDE_LOADING} from './types';

export const login = () => {
  console.log('inlogin');
  return (dispatch, getState) => {
    dispatch({type: SHOW_LOADING});
    return fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      .then((response) => {
        console.log(response);

        dispatch({type: HIDE_LOADING});
        return dispatch({type: LOGIN, payload: response});
      })
      .catch((error) => {
        console.log('error', error);
        return dispatch({type: HIDE_LOADING});
      });
  };
};
