import {
  START_FETCHING_HOME_CONTENT, FETCHING_HOME_CONTENT_FAILURE
  , FETCHING_HOME_CONTENT_SUCCESS,
  HOME_SPINNER_STARTS,
  HOME_SPINNER_STOPS,
  START_FETCHING_HOME_CONTENT_WITH_SPINNER
  
} from "./homeActionTypes";



export const fetchingHomeContentStarts = () => {
  return {
    type: START_FETCHING_HOME_CONTENT,
  };
};

export const fetchingHomeContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_HOME_CONTENT_WITH_SPINNER,
  };
};



export const fetchingHomeContentSuccess = (data) => {
  return {
    type: FETCHING_HOME_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingHomeContentFailure = (error) => {
  return {
    type: FETCHING_HOME_CONTENT_FAILURE,
    payload: error,
  };
};


export const homeSpinnerStarts = () => {
  return {
    type: HOME_SPINNER_STARTS,
  };
};
export const homeSpinnerStops = () => {
  return {
    type: HOME_SPINNER_STOPS,
  };
};