import _ from "lodash";
import {
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
  LOG_OUT,
} from "../actions/types";

const INITIAL_STATE = {
  userDetails: { balance: 0 },
  familyMembers: {},
  fetchingData: false,
  errors: null,
  editingFamilyMember: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return { ...state, fetchingData: true };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        userDetails: action.payload,
        fetchingData: false,
      };
    case GET_USER_PROFILE_ERROR:
      return {
        ...state,
        fetchingData: false,
        errors: action.payload,
      };

    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
