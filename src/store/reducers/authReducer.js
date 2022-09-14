import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  LOG_OUT,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from "../actions/types";

let token = localStorage.getItem("user");

const INITIAL_STATE = token
  ? {
      isLoggedIn: true,
      token: token,
      loggingIn: false,
    }
  : { isLoggedIn: false, token: null, loggingIn: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return { ...state, loggingIn: true };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
        loggingIn: false,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        isLoggedIn: false,
        token: null,
        loggingIn: false,
        errors: action.payload,
      };
    case LOG_OUT:
      return { ...state, isLoggedIn: false, token: null };
    case REGISTER_REQUEST:
      return { ...state, registering: true, token: action.payload };
    case REGISTER_SUCCESS:
      return { ...state, isLoggedIn: true, token: action.payload };
    case REGISTER_ERROR:
      return { ...state, isLoggedIn: false, token: action.payload };
    default:
      return state;
  }
};
