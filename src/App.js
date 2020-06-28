import React, { Fragment } from "react";
import { GlobalStyle } from "./style.js";
import { IconFont } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";
import Header from "./common/header";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/detail" exact component={Detail} />
        </BrowserRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
