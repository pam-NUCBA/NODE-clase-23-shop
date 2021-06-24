import React, { useReducer } from "react";
import axios from "axios";
import CartContext from "./cartContext";
import cartReducer from "./cartReducer";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../types";

const CartState = (props) => {
  const initialState = {
    cartItems: [],
  };
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addCartItem = async (id, quantity) => {
    const { data } = await axios.get(`/api/products/${id}`);

    const { _id, name, image, price, countInStock } = data;
    // console.log(data);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        _id,
        name,
        image,
        price,
        countInStock,
        quantity,
      },
    });
  };

  const removeCartItem = async (id) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      payload: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addCartItem,
        removeCartItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartState;
