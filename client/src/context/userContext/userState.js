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

const UserState = (props) => {
  const initialState = {
    userInfo: {},
    loading: false,
    error: false
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const userLogin = async (email, password) => {
    try {
      dispatch({ type: USER_LOGIN_REQ });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post('/api/users/login', {email, password}, config);
      console.log(data);
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

  const userLogout = async () => {
    dispatch({
      type: USER_LOGOUT,
    });
  };

  return (
    <UserContext.Provider
      value={{
        userInfo: state.userInfo,
        loading: state.loading,
        error: state.error,
        userLogin,
        userLogout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
