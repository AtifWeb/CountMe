import countMe from "../../api/countMe";
import { authHeader } from "../../api/headerHelper";

import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from "./types";
import { toast } from "react-toastify";

export const getUserProfile = () => (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_REQUEST });

  countMe
    .get("/api/Users/Get", {
      headers: authHeader(),
    })
    .then((response) => {
      dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      if (!error.response) {
        dispatch({
          type: GET_USER_PROFILE_ERROR,
          payload: error.message,
        });
      } else {
        if (error.response.status === 401) localStorage.removeItem("user");
        dispatch({
          type: GET_USER_PROFILE_ERROR,
          payload: error.response.data.message,
        });
      }
    });
};
export const CountBMIUser = (formValues) => {
  countMe
    .post(
      "/api/Users/CountBMI/CountBMI",
      { ...formValues },
      {
        headers: authHeader(),
      }
    )
    .then((response) => {
      toast.success("Successfully Counted BMI");
      console.log(response);
    })
    .catch((error) => {
      toast.error("Error Occured");
    });
};
export const CountCalories = (formValues) => {
  countMe
    .post(
      "/api/Users/CountCalories/CountCalories",
      { ...formValues },
      {
        headers: authHeader(),
      }
    )
    .then((response) => {
      toast.success("Successfully Counted Calories");
      console.log(response);
    })
    .catch((error) => {
      toast.error("Error Occured");
    });
};
