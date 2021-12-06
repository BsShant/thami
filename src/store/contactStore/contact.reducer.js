import {
 
  START_FETCHING_CONTACT_CONTENT, FETCHING_CONTACT_CONTENT_FAILURE,
   FETCHING_CONTACT_CONTENT_SUCCESS,
   CONTACT_SPINNER_STOPS,
   CONTACT_SPINNER_STARTS
 
} from "./contactActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  contactPageHeading: null,
  messages:null,
  contactHeadingSection: null,
  
    error: null,
    contactSpinner: false,

};

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_CONTACT_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_CONTACT_CONTENT_SUCCESS:
      return {
        ...state,
        contactPageHeading: {
          ...action.payload.contactPageHeading.data,
          image: server + '/' + action.payload.contactPageHeading.data.image,
        },
        messages: action.payload.messages.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        contactHeadingSection: action.payload.contactHeadingSection.data
        
        
      };
    case FETCHING_CONTACT_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case CONTACT_SPINNER_STOPS:
        return {
          ...state,
          contactSpinner: false,
        };
        case CONTACT_SPINNER_STARTS:
        return {
          ...state,
          contactSpinner: true,
        };
    
    default:
      return state;
  }
};
