import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case PRODUCT_LIST_REQ:
      return {
        ...state,
        products: [],
        loading: true,
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        loading: false,
        products: [],
        error: payload,
      };
    default:
      return state;
  }
};
