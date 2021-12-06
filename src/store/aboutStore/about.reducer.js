import {
 
  START_FETCHING_ABOUT_CONTENT, FETCHING_ABOUT_CONTENT_FAILURE,
   FETCHING_ABOUT_CONTENT_SUCCESS,
   ABOUT_SPINNER_STARTS,
   ABOUT_SPINNER_STOPS
 
} from "./aboutActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  visionSection: null,
  missionSection: null,
  visionMissionPageHeading : null,
  ourTeamSection: null,
  ourTeamPageHeading:null,
  ourTeamHeadingSection: null,
  ourPartnersSection: null,
  ourPartnersPageHeading:null,
  ourPartnersHeadingSection: null,
  ourStorySection: null,
  ourStoryPageHeading: null,
  ourHistorySection: null,
  galleryPageHeading: null,
  galleryHeadingSection:null,
  photosSection: null,
  videosSection: null,
  associateSection: null,
  aboutSpinner:false,
  error: null

};

export const aboutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_ABOUT_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_ABOUT_CONTENT_SUCCESS:
      return {
        ...state,
        
        ourHistorySection: action.payload.ourHistorySection.data,
        ourStorySection: {
          ...action.payload.ourStorySection.data,
          image: server + '/' + action.payload.ourStorySection.data.image
        },
        ourStoryPageHeading: {
          ...action.payload.ourStoryPageHeading.data,
          image: server + '/' + action.payload.ourStoryPageHeading.data.image,
        },
        visionSection: {
          ...action.payload.visionSection.data,
          image: server + '/' + action.payload.visionSection.data.image
        },
        missionSection: {
          ...action.payload.missionSection.data,
          image: server + '/' + action.payload.missionSection.data.image
        },
        visionMissionPageHeading: {
          ...action.payload.visionMissionPageHeading.data,
          image: server + '/' + action.payload.visionMissionPageHeading.data.image,
        },

        ourPartnersPageHeading: {
          ...action.payload.ourPartnersPageHeading.data,
          image: server + '/' + action.payload.ourPartnersPageHeading.data.image,
        },
        ourPartnersHeadingSection: action.payload.ourPartnersHeadingSection.data,
        ourPartnersSection: action.payload.ourPartnersSection.data.sort((a,b) => a.rank- b.rank),

        ourTeamPageHeading: {
          ...action.payload.ourTeamPageHeading.data,
          image: server + '/' + action.payload.ourTeamPageHeading.data.image,
        },
        ourTeamHeadingSection: action.payload.ourTeamHeadingSection.data,
        ourTeamSection: action.payload.ourTeamSection.data.sort((a,b) => a.memberRank-b.memberRank),

        galleryPageHeading: {
          ...action.payload.galleryPageHeading.data,
          image: server + '/' + action.payload.galleryPageHeading.data.image,
        },
        galleryHeadingSection: action.payload.galleryHeadingSection.data,
        photosSection: action.payload.photosSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        videosSection:action.payload.videosSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),

        associateSection: {
          ...action.payload.associateSection.data,
          image: server + '/' + action.payload.associateSection.data.image,
        },

       

      };
    case FETCHING_ABOUT_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case ABOUT_SPINNER_STARTS:
        return{
          ...state,
          aboutSpinner:true
        };
        case ABOUT_SPINNER_STOPS:
        return{
          ...state,
          aboutSpinner:false
        }
    
    default:
      return state;
  }
};
