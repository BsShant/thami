import {
  
  START_FETCHING_FOOTER_CONTENT,
  START_FETCHING_FOOTER_CONTENT_WITH_SPINNER,
  FETCHING_FOOTER_CONTENT_SUCCESS,
  FETCHING_FOOTER_CONTENT_FAILURE,
  FOOTER_SPINNER_STARTS,
  FOOTER_SPINNER_STOPS
  
} from "./footerActionTypes";



export const fetchingFooterContentStarts = () => {
  return {
    type: START_FETCHING_FOOTER_CONTENT,
  };
};

export const fetchingFooterContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FOOTER_CONTENT_WITH_SPINNER,
  };
};



export const fetchingFooterContentSuccess = (data) => {
  return {
    type: FETCHING_FOOTER_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingFooterContentFailure = (error) => {
  return {
    type: FETCHING_FOOTER_CONTENT_FAILURE,
    payload: error,
  };
};


export const footerSpinnerStarts = () => {
  return {
    type: FOOTER_SPINNER_STARTS,
  };
};
export const footerSpinnerStops = () => {
  return {
    type: FOOTER_SPINNER_STOPS,
  };
};