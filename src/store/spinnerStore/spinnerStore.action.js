import {
  START_FETCHING_SPINNER,
  STOP_FETCHING_SPINNER,
  STOP_POSTING_SPINNER,
  START_POSTING_SPINNER,
  START_AUTH_SPINNER,
  STOP_AUTH_SPINNER,
} from "./spinnerStore.Types";

export const startFetchingSpinner = () => {
  return {
    type: START_FETCHING_SPINNER,
  };
};
export const stopFetchingSpinner = () => {
  return {
    type: STOP_FETCHING_SPINNER,
  };
};
export const startAuthSpinner = () => {
  return {
    type: START_AUTH_SPINNER,
  };
};
export const stopAuthSpinner = () => {
  return {
    type: STOP_AUTH_SPINNER,
  };
};
export const startPostingSpinner = () => {
  return {
    type: START_POSTING_SPINNER,
  };
};
export const stopPostingSpinner = () => {
  return {
    type: STOP_POSTING_SPINNER,
  };
};
