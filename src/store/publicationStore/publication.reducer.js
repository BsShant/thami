import {
 
  START_FETCHING_PUBLICATION_CONTENT, FETCHING_PUBLICATION_CONTENT_FAILURE,
   FETCHING_PUBLICATION_CONTENT_SUCCESS,
   PUBLICATION_SPINNER_STOPS,
   PUBLICATION_SPINNER_STARTS
 
} from "./publicationActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  booksPageHeading: null,
  booksSection:null,
  booksHeadingSection: null,
  resourcesPageHeading: null,
  resourcesSection: null,
  resourcesHeadingSection: null,
  pressReleaseHeadingSection:null,
  pressReleasePageHeading: null,
  pressReleaseSection: null,
  publicationSpinner:false,
  
    error: null

};

export const publicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_PUBLICATION_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_PUBLICATION_CONTENT_SUCCESS:
      return {
        ...state,
        booksPageHeading: {
          ...action.payload.booksPageHeading.data,
          image: server + '/' + action.payload.booksPageHeading.data.image,
        },
        booksSection: action.payload.booksSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        booksHeadingSection: action.payload.booksHeadingSection.data
        ,
        resourcesPageHeading: {
          ...action.payload.resourcesPageHeading.data,
          image: server + '/' + action.payload.resourcesPageHeading.data.image,
        },
        resourcesSection: action.payload.resourcesSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        resourcesHeadingSection: action.payload.resourcesHeadingSection.data,

        pressReleasePageHeading: {
          ...action.payload.pressReleasePageHeading.data,
          image: server + '/' + action.payload.pressReleasePageHeading.data.image,
        },
        pressReleaseSection: action.payload.pressReleaseSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        pressReleaseHeadingSection: action.payload.pressReleaseHeadingSection.data,


      };
    case FETCHING_PUBLICATION_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case PUBLICATION_SPINNER_STOPS:
      return {
        ...state,
        publicationSpinner: false,
      };
      case PUBLICATION_SPINNER_STARTS:
      return {
        ...state,
        publicationSpinner: true,
      };
    
    default:
      return state;
  }
};
