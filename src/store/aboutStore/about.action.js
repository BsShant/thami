import {
  START_FETCHING_ABOUT_CONTENT, FETCHING_ABOUT_CONTENT_FAILURE
  , FETCHING_ABOUT_CONTENT_SUCCESS,
  ABOUT_SPINNER_STOPS,
  ABOUT_SPINNER_STARTS,
  START_FETCHING_ABOUT_CONTENT_WITH_SPINNER
  
} from "./aboutActionTypes";



export const fetchingAboutContentStarts = () => {
  return {
    type: START_FETCHING_ABOUT_CONTENT,
  };
};

export const fetchingAboutContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_ABOUT_CONTENT_WITH_SPINNER,
  };
};



export const fetchingAboutContentSuccess = (data) => {
  return {
    type: FETCHING_ABOUT_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingAboutContentFailure = (error) => {
  return {
    type: FETCHING_ABOUT_CONTENT_FAILURE,
    payload: error,
  };
};

export const aboutSpinnerStarts = () => {
  return {
    type: ABOUT_SPINNER_STARTS
  };
};

export const aboutSpinnerStops = () => {
  return {
    type: ABOUT_SPINNER_STOPS
  };
};


