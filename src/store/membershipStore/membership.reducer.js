import {
 
  START_FETCHING_MEMBERSHIP_CONTENT, FETCHING_MEMBERSHIP_CONTENT_FAILURE,
   FETCHING_MEMBERSHIP_CONTENT_SUCCESS,
   MEMBERSHIP_SPINNER_STOPS,
   MEMBERSHIP_SPINNER_STARTS
 
} from "./membershipActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  membershipData:null,
  
    error: null,
    membershipSpinner:false

};

export const membershipReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_MEMBERSHIP_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_MEMBERSHIP_CONTENT_SUCCESS:
      return {
        ...state,
       
        membershipData: action.payload.membershipData.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        
      };
    case FETCHING_MEMBERSHIP_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case MEMBERSHIP_SPINNER_STOPS:
        return {
          ...state,
          membershipSpinner: false,
        };
        case MEMBERSHIP_SPINNER_STARTS:
        return {
          ...state,
          membershipSpinner: true,
        };
    default:
      return state;
  }
};
