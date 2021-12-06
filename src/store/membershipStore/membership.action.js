import {
  START_FETCHING_MEMBERSHIP_CONTENT, FETCHING_MEMBERSHIP_CONTENT_FAILURE
  , FETCHING_MEMBERSHIP_CONTENT_SUCCESS,
  MEMBERSHIP_SPINNER_STARTS,
  MEMBERSHIP_SPINNER_STOPS,
  START_FETCHING_MEMBERSHIP_CONTENT_WITH_SPINNER
  
} from "./membershipActionTypes";



export const fetchingMembershipContentStarts = () => {
  return {
    type: START_FETCHING_MEMBERSHIP_CONTENT,
  };
};
export const fetchingMembershipContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_MEMBERSHIP_CONTENT_WITH_SPINNER,
  };
};



export const fetchingMembershipContentSuccess = (data) => {
  return {
    type: FETCHING_MEMBERSHIP_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingMembershipContentFailure = (error) => {
  return {
    type: FETCHING_MEMBERSHIP_CONTENT_FAILURE,
    payload: error,
  };
};

export const membershipSpinnerStarts = () => {
  return {
    type: MEMBERSHIP_SPINNER_STARTS,
  };
};
export const membershipSpinnerStops = () => {
  return {
    type: MEMBERSHIP_SPINNER_STOPS,
  };
};



