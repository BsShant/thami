import {
 
  START_USER_AUTHENTICATION,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
  START_USER_LOGOUT,
  USER_AUTH_FAILURE,
  USER_AUTH_SUCCESS,
  UPDATE_TOKEN,
 
} from "./authActionTypes";
const newToken = localStorage.getItem("thamiToken")
const INITIAL_STATE = {
  userToken: newToken? JSON.parse(newToken):null,
  authUser: "user",
  error: null

};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_USER_AUTHENTICATION:
      return {
        ...state,
      };
     
   
    case USER_AUTH_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case USER_AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        userToken:null
      };
    case START_USER_LOGOUT:
      return {
        ...state,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case UPDATE_TOKEN:
        return{
          ...state,
          userToken: action.payload
        }
    
    default:
      return state;
  }
};
