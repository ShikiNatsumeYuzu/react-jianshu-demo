import axios from "axios";
import { CHANGE_LOGIN, LOGOUT } from "./constants";

const changeLogin = value => ({
  type: CHANGE_LOGIN,
  value
});

export const login = (account, password) => async dispatch => {
  const { data: res } = await axios.get("/api/login.json", {
    params: { account, password }
  });
  if (res.data) {
    dispatch(changeLogin(res.data));
  } else {
    alert("登录失败");
  }
};

export const logout = () => ({
  type: LOGOUT,
  value: false
});
