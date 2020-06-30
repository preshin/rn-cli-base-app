import { SHOW_LOADING, LOGIN, HIDE_LOADING } from "./types";
import { get } from "../../services/apiServices";
import { showLoading } from "../reducers/loadingReducer";
import allActions from "./";

// export const login = () => {
//   console.log("inside Login");

//   return (dispatch, state) => {
//     console.log("dispatch", dispatch);
//     console.log("state", state);
//     // showLoading();
//     // dispatch({ type: SHOW_LOADING });
//     // return dispatch({ type: LOGIN });
//     // axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes').then(function (response) {
//     //     console.log(response)
//     //     dispatch({ type: 'LOAD_QUOTE_SUCCESS', payload: response.data[0].quote })

//     // }).catch(function (error) {
//     //     dispatch({ type: 'LOAD_QUOTE_FAILURE', payload: error })
//     // })
//     return fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
//       .then((response) => {
//         return dispatch({ type: LOGIN });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const login = () => {
  console.log("inlogin");
  return (dispatch, getState) => {
    // dispatch(() => allActions.loadingAction.showLoading());
    dispatch({ type: SHOW_LOADING });
    return fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes")
      .then((response) => {
        console.log(response);

        dispatch({ type: HIDE_LOADING });
        return dispatch({ type: LOGIN, payload: response });
      })
      .catch((error) => {
        console.log("error", error);
        return dispatch({ type: HIDE_LOADING });
      });
  };
  //   return { type: LOGIN };
};

// export default { login };
