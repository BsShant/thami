import {
  UPDATE_USER
} from "./userStore.Types";
const data = localStorage.getItem("thamiUser")
const INITIAL_STATE = {
  user: data? JSON.parse(data): null

};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.payload
      };
    
    default:
      return state;
  }
};
