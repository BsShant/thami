import {
  START_FETCHING_CONTACT_CONTENT, FETCHING_CONTACT_CONTENT_FAILURE
  , FETCHING_CONTACT_CONTENT_SUCCESS,
  CONTACT_SPINNER_STARTS,
  CONTACT_SPINNER_STOPS,
  START_FETCHING_CONTACT_CONTENT_WITH_SPINNER
  
} from "./contactActionTypes";



export const fetchingContactContentStarts = () => {
  return {
    type: START_FETCHING_CONTACT_CONTENT,
  };
};
export const fetchingContactContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_CONTACT_CONTENT_WITH_SPINNER,
  };
};



export const fetchingContactContentSuccess = (data) => {
  return {
    type: FETCHING_CONTACT_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingContactContentFailure = (error) => {
  return {
    type: FETCHING_CONTACT_CONTENT_FAILURE,
    payload: error,
  };
};

export const contactSpinnerStarts = () => {
  return {
    type: CONTACT_SPINNER_STARTS,
  };
};
export const contactSpinnerStops = () => {
  return {
    type: CONTACT_SPINNER_STOPS,
  };
};

