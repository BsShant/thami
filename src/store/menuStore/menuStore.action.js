import {
  PUBLIC_MENU_CLICK_TRIGGER,
} from "./menuStore.Types";



export const publicMenuClickTrigger = (key) => {
  return {
    type: PUBLIC_MENU_CLICK_TRIGGER,
    payload: key
  };
};
