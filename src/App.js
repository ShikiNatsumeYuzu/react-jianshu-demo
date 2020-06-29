import React, { Fragment } from "react";
import { GlobalStyle } from "./style.js";
import { IconFont } from "./statics/iconfont/iconfont";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store";
import Header from "./common/header";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <IconFont />
      <Provider store={store}>
        <HashRouter>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/write" exact component={Write} />
          <Route path="/detail/:id" exact component={Detail} />
        </HashRouter>
      </Provider>
    </Fragment>
  );
}

export default App;
