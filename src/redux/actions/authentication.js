import jwt_decode from "jwt-decode";

import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";

import { setErrors } from "./errors";

/**
 * I think this should be called something else.
 * In all the demos and tasks we called it `setAuthHeader`
 */
export const checkForExpiredToken = token => {
  instance.defaults.headers.Authorization = `jwt ${token}`;
};

export const login = userData => async dispatch => {
  try {
    const response = await instance.post("login/", userData);
    const { token } = response.data;
    const user = jwt_decode(token);
    checkForExpiredToken(token);
    dispatch(setCurrentUser(user));
  } catch (error) {
    setErrors(error);
  }
};

export const signup = userData => async dispatch => {
  try {
    const response = await instance.post("signup/", userData);
    const { token } = response.data;
    const user = jwt_decode(token);
    checkForExpiredToken(token);
    dispatch(setCurrentUser(user));
  } catch (error) {
    setErrors(error);
  }
};

export const logout = () => {};

const setCurrentUser = token => ({
  type: SET_CURRENT_USER,
  payload: token
});
