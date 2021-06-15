import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
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
        products: [],
        error: payload,
        loading: false,
      };
    case PRODUCT_DETAIL_REQ:
      return {
        ...state,
        product: { reviews: [] },
        loading: true,
      };
    case PRODUCT_DETAIL_SUCCESS:
      return {
        ...state,
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAIL_FAIL:
      return {
        ...state,
        product: { reviews: [] },
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
