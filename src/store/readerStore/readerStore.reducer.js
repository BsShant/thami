import {
  PUSH_BLOGS_READER_PAGE,
  PUSH_NEWS_READER_PAGE,PUSH_ARTICLES_READER_PAGE,PUSH_PRESS_READER_PAGE,PUSH_RESOURCES_READER_PAGE, PUSH_TEAM_READER_PAGE
} from "./readerStore.Types";

const INITIAL_STATE = {
  newsData: null,
  articlesData: null,
  blogsData:null,
resourcesData:null,
pressData:null,
teamData:null

};

export const readerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PUSH_BLOGS_READER_PAGE:
      return {
        ...state,
        blogsData: action.payload,
      };
      case PUSH_NEWS_READER_PAGE:
      return {
        ...state,
        newsData: action.payload,
      };
      case PUSH_ARTICLES_READER_PAGE:
      return {
        ...state,
        articlesData: action.payload,
      };
      case PUSH_RESOURCES_READER_PAGE:
      return {
        ...state,
        resourcesData: action.payload,
      };
      case PUSH_PRESS_READER_PAGE:
      return {
        ...state,
        pressData: action.payload,
      };
      case PUSH_TEAM_READER_PAGE:
      return {
        ...state,
        teamData: action.payload,
      };
     
        default:
      return state;
  }
};
