import {
 PUBLIC_MENU_CLICK_TRIGGER
} from "./menuStore.Types";

const INITIAL_STATE = {

  publicMenuClick: ''

};

export const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
      case PUBLIC_MENU_CLICK_TRIGGER:
        return {
          ...state,
          publicMenuClick: action.payload
        };
        default:
      return state;
  }
};
