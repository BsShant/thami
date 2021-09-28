import {
  START_USER_AUTHENTICATION,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  START_USER_LOGOUT,
  
} from "./authActionTypes";



export const authProcessStarts = (emailandpassword) => {
  return {
    type: START_USER_AUTHENTICATION,
    payload: emailandpassword,
  };
};



export const userAuthSuccess = () => {
  return {
    type: USER_AUTH_SUCCESS,
  };
};
export const userAuthFailure = (error) => {
  return {
    type: USER_AUTH_FAILURE,
    payload: error,
  };
};


export const logoutProcessStarts = (emailandpassword) => {
  return {
    type: START_USER_LOGOUT,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};
export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
  };
};

