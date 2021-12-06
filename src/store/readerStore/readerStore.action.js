import {
  PUSH_NEWS_READER_PAGE,
  PUSH_BLOGS_READER_PAGE,
  PUSH_ARTICLES_READER_PAGE,
  PUSH_RESOURCES_READER_PAGE,
  PUSH_PRESS_READER_PAGE,
  PUSH_TEAM_READER_PAGE,

} from "./readerStore.Types";

export const pushArticlesReaderPage = (data) => {
  return {
    type: PUSH_ARTICLES_READER_PAGE,
    payload: data
  };
};
export const pushResourcesReaderPage = (data) => {
  return {
    type: PUSH_RESOURCES_READER_PAGE,
    payload: data
  };
};
export const pushNewsReaderPage = (data) => {
  return {
    type: PUSH_NEWS_READER_PAGE,
    payload: data
  };
};
export const pushBlogsReaderPage = (data) => {
  return {
    type: PUSH_BLOGS_READER_PAGE,
    payload: data
  };
};
export const pushPressReaderPage = (data) => {
  return {
    type: PUSH_PRESS_READER_PAGE,
    payload: data
  };
};
export const pushTeamReaderPage = (data) => {
  return {
    type: PUSH_TEAM_READER_PAGE,
    payload: data
  };
};
