import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

export default (state, { type, payload }) => {
  switch (type) {
    case CART_ADD_ITEM:
      const item = payload;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      const existItem = state.cartItems.find((x) => x._id === item._id);

      //*si existe lo chequeamos, y si no existe, solo ahí se agrega
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== payload),
      };
    default:
      return state;
  }
};
