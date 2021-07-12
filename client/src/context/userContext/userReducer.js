import {
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQ:
      return {
        ...state,
        userInfo: {},
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      localStorage.setItem("userInfo", JSON.stringify(payload));
      console.log(state.userInfo);
      return {
        ...state,
        userInfo: payload,
        loading: false,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        userInfo: {},
        error: payload,
        loading: false,
      };
    case USER_LOGOUT:
      localStorage.removeItem("userInfo");
      localStorage.removeItem("cartItems");
      // localStorage.removeItem('shippingAddress')
      // localStorage.removeItem('paymentMethod')
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    default:
      return state;
  }
};
