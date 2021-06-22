import React, { useReducer } from "react";
import axios from "axios";
import ProductsContext from "./productsContext";
import productsReducer from "./productsReducer";
import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAIL_REQ,
  PRODUCT_DETAIL_SUCCESS,
  PRODUCT_DETAIL_FAIL,
} from "../types";

const ProductsState = (props) => {
  const initialState = {
    products: [],
    product: {},
    reviews: [],
    loading: false
  };
  const [state, dispatch] = useReducer(productsReducer, initialState);

  //*podemos anidar los types!
  //traer todos los productos
  const listProducts = async () => {
    try {
      dispatch({ type: PRODUCT_LIST_REQ });

      const { data } = await axios.get(`/api/products`);
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

//traer un producto
const productDetail = async (id) => {
  try {
    dispatch({ type: PRODUCT_DETAIL_REQ });

    const { data } = await axios.get(`/api/products/${id}`);
    // console.log("success data: ", data);
    dispatch({
      type: PRODUCT_DETAIL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log("error data: ", error);
    
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
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
        product: state.product,
        listProducts,
        productDetail
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsState;
