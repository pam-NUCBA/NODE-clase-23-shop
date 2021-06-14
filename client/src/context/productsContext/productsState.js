import React, { useReducer } from "react";
import axios from "axios";
import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from "../types";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    // reviews: [],
    // loading: false,
    // error: null,
    // success: null,
    // product: {},
  };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //*podemos anidar los types!
  const listProducts = async () => {
    try {
      dispatch({ type: PRODUCT_LIST_REQ });

      const { data } = await axios.get(`/api/products`);
      console.log("success data: ", data);
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("error data: ", error);
      //*vamos a chequear si hay un mensaje que venga del backend o tenemos que pasar un genérico
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        reviews: state.reviews,
        loading: state.loading,
        error: state.error,
        success: state.success,
        product: state.product,
        listProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
