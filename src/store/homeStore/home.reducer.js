import {
 
  START_FETCHING_HOME_CONTENT, FETCHING_HOME_CONTENT_FAILURE,
   FETCHING_HOME_CONTENT_SUCCESS
 
} from "./homeActionTypes";
const INITIAL_STATE = {
  heroSection: null,
  aboutUsSection: null,
  ourEventSection: null,
  ourPublicationSection: null,
  getInvolvedSection: null,
  error: null

};

export const homeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_HOME_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_HOME_CONTENT_SUCCESS:
      return {
        ...state,
        heroSection: action.payload.heroSection,
        aboutUsSection: action.payload.aboutUsSection,
        ourEventSection: action.payload.ourEventSection,
        ourPublicationSection: action.payload.ourPublicationSection,
        getInvolvedSection: action.payload.getInvolvedSection,

      };
    case FETCHING_HOME_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    
    default:
      return state;
  }
};
