import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import { getHomeInfo, toggleTopShow } from "./store";

class Home extends PureComponent {
  render() {
    const { showScroll } = this.props;
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className="banner-img"
            src="https://upload.jianshu.io/admin_banners/web_images/4980/b3ecc0ffbfbe8e6e73295a9207bd7a95aa4dc938.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt=""
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {showScroll ? (
          <BackTop onClick={this.handleScrollTop}>顶部</BackTop>
        ) : null}
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.changeScrollTopShow);
  }

  handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  bindEvents = () => {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  };
}

const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});

const mapDispatch = dispatch => ({
  async changeHomeData() {
    dispatch(getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(toggleTopShow(true));
    } else {
      dispatch(toggleTopShow(false));
    }
  }
});

export default connect(mapState, mapDispatch)(Home);
