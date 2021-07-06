import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import {
  USER_LOGIN_REQ,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../types";
//*continuar

const UserState = (props) => {
  const initialState = {
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const userLogin = async () => {
    try {
      dispatch({ type: USER_LOGIN_REQ });

      const { data } = await axios.get(`/api/login`);
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log("error data: ", error);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const userLogout = (async = () => {
    dispatch({
      type: USER_LOGOUT,
    });
  });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        userLogin,
        userLogout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
