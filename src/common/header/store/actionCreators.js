import {
  SEARCH_FOCUS,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE
} from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = data => ({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({ type: SEARCH_FOCUS });

export const searchBlur = () => ({ type: SEARCH_BLUR });

export const mouseEnter = () => ({ type: MOUSE_ENTER });

export const mouseLeave = () => ({ type: MOUSE_LEAVE });

export const changePage = page => ({ type: CHANGE_PAGE, page });

export const getList = () => async dispatch => {
  const { data: res } = await axios.get("/api/headerList.json");
  dispatch(changeList(res.data));
};
