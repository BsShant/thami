import {
 
  START_FETCHING_FOOTER_CONTENT,
  START_FETCHING_FOOTER_CONTENT_WITH_SPINNER,
  FETCHING_FOOTER_CONTENT_SUCCESS,
  FETCHING_FOOTER_CONTENT_FAILURE,
  FOOTER_SPINNER_STARTS,
  FOOTER_SPINNER_STOPS
 
} from "./footerActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  contactSection: null,
  aboutUsSection: null,
  getInvolvedSection: null,
  socialMediaSection: null,
  error: null,
  footerSpinner:false,

};

export const footerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_FOOTER_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_FOOTER_CONTENT_SUCCESS:
      return {
        ...state,
        contactSection: action.payload.contactSection.data,
        aboutUsSection: action.payload.aboutUsSection.data,
        getInvolvedSection: action.payload.getInvolvedSection.data,
        socialMediaSection: action.payload.socialMediaSection.data,


      };
    case FETCHING_FOOTER_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case FOOTER_SPINNER_STOPS:
        return {
          ...state,
          footerSpinner: false,
        };
        case FOOTER_SPINNER_STARTS:
        return {
          ...state,
          footerSpinner: true,
        };
    
    default:
      return state;
  }
};
