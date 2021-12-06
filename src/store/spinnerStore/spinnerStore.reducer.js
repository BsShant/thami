import {
  START_AUTH_SPINNER,
 START_FETCHING_SPINNER, START_POSTING_SPINNER, STOP_AUTH_SPINNER, STOP_FETCHING_SPINNER, STOP_POSTING_SPINNER
} from "./spinnerStore.Types";

const INITIAL_STATE = {
  fetchSpinner: false,
  postSpinner: false,
  authSpinner:false

};

export const spinnerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_SPINNER:
      return {
        ...state,
        fetchSpinner: true,
      };
      case STOP_FETCHING_SPINNER:
      return {
        ...state,
        fetchSpinner: false,
      };
      case START_AUTH_SPINNER:
      return {
        ...state,
        authSpinner: true,
      };
      case STOP_AUTH_SPINNER:
      return {
        ...state,
        authSpinner: false,
      };
      case START_POSTING_SPINNER:
      return {
        ...state,
        postSpinner: true,
      };
      case STOP_POSTING_SPINNER:
      return {
        ...state,
        postSpinner: false,
      };
        default:
      return state;
  }
};
