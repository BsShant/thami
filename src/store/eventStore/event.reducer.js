import {
 
  START_FETCHING_EVENT_CONTENT, FETCHING_EVENT_CONTENT_FAILURE,
   FETCHING_EVENT_CONTENT_SUCCESS,
   EVENT_SPINNER_STOPS,
   EVENT_SPINNER_STARTS
 
} from "./eventActionTypes";
import {server} from '../../utils/fetch';
const INITIAL_STATE = {
  newsPageHeading: null,
  newsSection: null,
  blogsPageHeading: null,
  blogsSection: null,
  ourArticlesPageHeading: null,
  ourArticlesSection: null,
    error: null,
    eventSpinner:false

};

export const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_FETCHING_EVENT_CONTENT:
      return {
        ...state,
      };
     
   
    case FETCHING_EVENT_CONTENT_SUCCESS:
      return {
        ...state,
        newsPageHeading: {
          ...action.payload.newsPageHeading.data,
          image: server + '/' + action.payload.newsPageHeading.data.image,
        },
        newsSection: action.payload.newsSection.data.sort((a,b) => new Date(b.date)-new Date(a.date))
        ,
        blogsPageHeading: {
          ...action.payload.blogsPageHeading.data,
          image: server + '/' + action.payload.blogsPageHeading.data.image,
        },
        blogsSection: action.payload.blogsSection.data.sort((a,b) => new Date(b.date)-new Date(a.date)),
        ourArticlesPageHeading: {
          ...action.payload.ourArticlesPageHeading.data,
          image: server + '/' + action.payload.ourArticlesPageHeading.data.image,
        },
        ourArticlesSection: action.payload.ourArticlesSection.data.sort((a,b) => new Date(b.date)-new Date(a.date))

      };
    case FETCHING_EVENT_CONTENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
      case EVENT_SPINNER_STOPS:
        return {
          ...state,
          eventSpinner: false,
        };
        case EVENT_SPINNER_STARTS:
        return {
          ...state,
          eventSpinner: true,
        };
    
    default:
      return state;
  }
};
