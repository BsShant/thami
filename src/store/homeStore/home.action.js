import {
  START_FETCHING_HOME_CONTENT, FETCHING_HOME_CONTENT_FAILURE
  , FETCHING_HOME_CONTENT_SUCCESS
  
} from "./homeActionTypes";



export const fetchingHomeContentStarts = () => {
  return {
    type: START_FETCHING_HOME_CONTENT,
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


