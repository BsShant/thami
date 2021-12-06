import {
 
  START_FETCHING_GETINVOLVED_CONTENT, FETCHING_GETINVOLVED_CONTENT_FAILURE, FETCHING_GETINVOLVED_CONTENT_SUCCESS, GETINVOLVED_SPINNER_STOPS, GETINVOLVED_SPINNER_STARTS
 
} from "./getInvolvedActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  supportSection: null,
  supportPageHeading: null,
  donateSection : null,
  donatePageHeading: null,
  beMemberSection:null,
  beMemberPageHeading: null,
  supportCommunitySection: null,
  supportCommunityPageHeading:null,
  supportCommunityHeadingSection: null,
  donateInfoPageHeading: null,
  donateInfoHeadingSection: null,
  donateInfoSection: null,
  
  error: null,
  getInvolvedSpinner:false

};

export const getInvolvedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_GETINVOLVED_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_GETINVOLVED_CONTENT_SUCCESS:
      return {
        ...state,
       
        supportSection: {
          ...action.payload.supportSection.data,
          image: server + '/' + action.payload.supportSection.data.image
        },
        supportPageHeading: {
          ...action.payload.supportPageHeading.data,
          image: server + '/' + action.payload.supportPageHeading.data.image
        },
        donateSection: {
          ...action.payload.donateSection.data,
          image: server + '/' + action.payload.donateSection.data.image
        },
        donatePageHeading: {
          ...action.payload.donatePageHeading.data,
          image: server + '/' + action.payload.donatePageHeading.data.image,
        },
        beMemberSection: {
          ...action.payload.beMemberSection.data,
          image: server + '/' + action.payload.beMemberSection.data.image
        },
        beMemberPageHeading: {
          ...action.payload.beMemberPageHeading.data,
          image: server + '/' + action.payload.beMemberPageHeading.data.image
        },
        donateInfoPageHeading: {
          ...action.payload.donateInfoPageHeading.data,
          image: server + '/' + action.payload.donateInfoPageHeading.data.image
        },
        donateInfoSection: action.payload.donateInfoSection.data,
        donateInfoHeadingSection: action.payload.donateInfoHeadingSection.data,
        supportCommunityPageHeading: {
          ...action.payload.supportCommunityPageHeading.data,
          image: server + '/' + action.payload.supportCommunityPageHeading.data.image,
        },
        supportCommunityHeadingSection: action.payload.supportCommunityHeadingSection.data,
        supportCommunitySection: action.payload.supportCommunitySection.data.sort((a,b)=> b.sn-a.sn),

        
       

      };
    case FETCHING_GETINVOLVED_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case GETINVOLVED_SPINNER_STOPS:
        return {
          ...state,
          getInvolvedSpinner: false,
        };
        case GETINVOLVED_SPINNER_STARTS:
        return {
          ...state,
          getInvolvedSpinner: true,
        };
    default:
      return state;
  }
};
