import { SHOW_LOADING, LOGIN, HIDE_LOADING } from "./types";
import { get } from "../../services/apiServices";

export const showLoading = () => {
  return { type: SHOW_LOADING };
};

export const hideLoading = () => {
  return { type: HIDE_LOADING };
};
