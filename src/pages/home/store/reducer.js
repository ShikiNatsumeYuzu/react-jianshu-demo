import { fromJS } from "immutable";
import {
  CHANGE_HOME_DATA,
  ADD_ARTICLE_LIST,
  TOGGLE_SCROLL_TOP
} from "./constants";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

const changeHomeData = (state, action) => {
  const { topicList, articleList, recommendList } = action;
  return state.merge({
    topicList: fromJS(topicList),
    articleList: fromJS(articleList),
    recommendList: fromJS(recommendList)
  });
};

const addAritcleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(fromJS(action.list)),
    articlePage: fromJS(action.nextPage)
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case ADD_ARTICLE_LIST:
      return addAritcleList(state, action);
    case TOGGLE_SCROLL_TOP:
      return state.set("showScroll", fromJS(action.show));
    default:
      return state;
  }
};
