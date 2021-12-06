import {
  START_FETCHING_EVENT_CONTENT, FETCHING_EVENT_CONTENT_FAILURE
  , FETCHING_EVENT_CONTENT_SUCCESS,
  EVENT_SPINNER_STARTS,
  EVENT_SPINNER_STOPS,
  START_FETCHING_EVENT_CONTENT_WITH_SPINNER
  
} from "./eventActionTypes";



export const fetchingEventContentStarts = () => {
  return {
    type: START_FETCHING_EVENT_CONTENT,
  };
};

export const fetchingEventContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_EVENT_CONTENT_WITH_SPINNER,
  };
};



export const fetchingEventContentSuccess = (data) => {
  return {
    type: FETCHING_EVENT_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingEventContentFailure = (error) => {
  return {
    type: FETCHING_EVENT_CONTENT_FAILURE,
    payload: error,
  };
};

export const eventSpinnerStarts = () => {
  return {
    type: EVENT_SPINNER_STARTS,
  };
};
export const eventSpinnerStops = () => {
  return {
    type: EVENT_SPINNER_STOPS,
  };
};

