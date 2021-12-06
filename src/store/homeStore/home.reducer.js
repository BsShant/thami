import {
 
  START_FETCHING_HOME_CONTENT, FETCHING_HOME_CONTENT_FAILURE,
   FETCHING_HOME_CONTENT_SUCCESS,
   HOME_SPINNER_STOPS,
   HOME_SPINNER_STARTS
 
} from "./homeActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  heroSection: null,
  aboutUsSection: null,
  ourEventSection: null,
  publicationSection: null,
  getInvolvedSection: null,
  error: null,
  homeSpinner:false,

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
        heroSection: action.payload.heroSection.data,
        aboutUsSection: {
          ...action.payload.aboutUsSection.data,
          imageAfter: server + '/' + action.payload.aboutUsSection.data.imageAfter,
          imageBefore: server + '/' + action.payload.aboutUsSection.data.imageBefore
        },
        ourEventSection: action.payload.ourEventSection.data,
        publicationSection: {
          ...action.payload.publicationSection.data,
          image: server + '/' + action.payload.publicationSection.data.image
        },
        getInvolvedSection: {
          ...action.payload.getInvolvedSection.data,
          supportCardImage: server + '/' + action.payload.getInvolvedSection.data.supportCardImage,
          sponserCardImage: server + '/' + action.payload.getInvolvedSection.data.sponserCardImage,
          joinCardImage: server + '/' + action.payload.getInvolvedSection.data.joinCardImage

        },

      };
    case FETCHING_HOME_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case HOME_SPINNER_STOPS:
        return {
          ...state,
          homeSpinner: false,
        };
        case HOME_SPINNER_STARTS:
        return {
          ...state,
          homeSpinner: true,
        };
    
    default:
      return state;
  }
};
