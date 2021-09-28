import {
  UPDATE_USER
} from "./userStore.Types";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};

