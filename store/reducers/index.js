import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import loadingReducer from "./loadingReducer";
import themeReducer from "./themeReducer";

export default combineReducers({
  login: loginReducer,
  loading: loadingReducer,
  theme: themeReducer,
});
