import {
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../types";
//*continuar
export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQ:
      return {
        ...state,
        user: {},
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        user: {},
        error: payload,
        loading: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        user: {},
        loading: false,
      };
    default:
      return state;
  }
};
