import axios from "axios";
import {
  CHANGE_HOME_DATA,
  ADD_ARTICLE_LIST,
  TOGGLE_SCROLL_TOP
} from "./constants";

const changeHomeData = ({ articleList, recommendList, topicList }) => ({
  type: CHANGE_HOME_DATA,
  articleList,
  recommendList,
  topicList
});

const addHomeList = (list, nextPage) => ({
  type: ADD_ARTICLE_LIST,
  list,
  nextPage
});

export const getHomeInfo = () => async dispatch => {
  const { data: res } = await axios.get("/api/home.json");
  dispatch(changeHomeData(res.data));
};

export const getMoreList = page => async dispatch => {
  const { data: res } = await axios.get(`/api/homeList.json?page=${page}`);
  dispatch(addHomeList(res.data, page + 1));
};

export const toggleTopShow = show => ({
  type: TOGGLE_SCROLL_TOP,
  show
});
