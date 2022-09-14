import countMe from "../../api/countMe";
import {
  LOG_OUT,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_IN_ERROR,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "./types";
import { toast } from "react-toastify";

export const logIn = (credentials) => (dispatch) => {
  dispatch({ type: LOG_IN_REQUEST });
  countMe
    .post("/api/User/Authenticate/authenticate", credentials)
    .then((response) => {
      dispatch({
        type: LOG_IN_SUCCESS,
        payload: response.data.token,
      });
      toast.success("Successfully signed in!");
      localStorage.setItem("user", response.data.token);
      window.location.href = "/home";
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      toast.error(`${errorMessage}`);

      dispatch({ type: LOG_IN_ERROR, payload: errorMessage });
    });
};

export const logOut = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  toast.info("Signed out");
  localStorage.removeItem("user");
  countMe.post("/api/User/Logout");
  window.location.href = "/login";
};
export const register = (credentials) => (dispatch) => {
  countMe
    .post("/api/User/Register/register", credentials)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data.token });
      toast.success("Successfully signed up!");
      localStorage.setItem("user", response.data.token);
      window.location.href = "/home";
    })
    .catch((error) => {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      toast.error(`${errorMessage}`);

      dispatch({ type: REGISTER_ERROR, payload: errorMessage });
    });
};
