import {
  START_FETCHING_PUBLICATION_CONTENT, FETCHING_PUBLICATION_CONTENT_FAILURE
  , FETCHING_PUBLICATION_CONTENT_SUCCESS,
  PUBLICATION_SPINNER_STARTS,
  PUBLICATION_SPINNER_STOPS,
  START_FETCHING_PUBLICATION_CONTENT_WITH_SPINNER
  
} from "./publicationActionTypes";



export const fetchingPublicationContentStarts = () => {
  return {
    type: START_FETCHING_PUBLICATION_CONTENT,
  };
};
export const fetchingPublicationContentWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_PUBLICATION_CONTENT_WITH_SPINNER,
  };
};



export const fetchingPublicationContentSuccess = (data) => {
  return {
    type: FETCHING_PUBLICATION_CONTENT_SUCCESS,
  payload: data
  };
};
export const fetchingPublicationContentFailure = (error) => {
  return {
    type: FETCHING_PUBLICATION_CONTENT_FAILURE,
    payload: error,
  };
};

export const publicationSpinnerStarts = () => {
  return {
    type: PUBLICATION_SPINNER_STARTS,
  };
};
export const publicationSpinnerStops = () => {
  return {
    type: PUBLICATION_SPINNER_STOPS,
  };
};


