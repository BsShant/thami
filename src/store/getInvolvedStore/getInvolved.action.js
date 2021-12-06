import {
  START_FETCHING_ABOUT_CONTENT, FETCHING_ABOUT_CONTENT_FAILURE
  , FETCHING_ABOUT_CONTENT_SUCCESS,
  START_FETCHING_GETINVOLVED_CONTENT,
  FETCHING_GETINVOLVED_CONTENT_SUCCESS,
  FETCHING_GETINVOLVED_CONTENT_FAILURE,
  GETINVOLVED_SPINNER_STARTS,
  GETINVOLVED_SPINNER_STOPS,
  START_FETCHING_GETINVOLVED_CONTENT_WITH_SPINNER
  
} from "./getInvolvedActionTypes";



export const fetchingGetInvolvedContentStarts = () => {
  return {
    type: START_FETCHING_GETINVOLVED_CONTENT,
  };
};

export const fetchingGetInvolvedContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_GETINVOLVED_CONTENT_WITH_SPINNER,
  };
};



export const fetchingGetInvolvedContentSuccess = (data) => {
  return {
    type: FETCHING_GETINVOLVED_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingGetInvolvedContentFailure = (error) => {
  return {
    type: FETCHING_GETINVOLVED_CONTENT_FAILURE,
    payload: error,
  };
};

export const getInvolvedSpinnerStarts = () => {
  return {
    type: GETINVOLVED_SPINNER_STARTS,
  };
};
export const getInvolvedSpinnerStops = () => {
  return {
    type: GETINVOLVED_SPINNER_STOPS,
  };
};


