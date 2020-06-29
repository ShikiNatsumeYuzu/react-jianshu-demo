import axios from "axios";
import { CHANGE_DETAIL } from "./constants";

const changeDetail = ({ title, content }) => ({
  type: CHANGE_DETAIL,
  title,
  content
});

export const getDetail = id => async dispatch => {
  const { data: res } = await axios.get(`/api/detail.json?id=${id}`);
  dispatch(changeDetail(res.data));
};
