import React from "react";
import { Route } from "react-router-dom";

import { AnimatedSwitch } from "react-router-transition";
import { reactLocalStorage } from "reactjs-localstorage";
import { connect } from "react-redux";

import "./App.css";
import { ROUTE_KEY } from "./config/ROUTE_KEY";
import Home from "./pages/home";
import Constant from "./config/Constant";
import history from "./component/history";

import page3 from "./pages/page3";
import page4 from "./pages/page4";
import page5 from "./pages/page5";
import page4_1 from "./pages/page4_1";
import page5_1 from "./pages/page5_1";
import Page2 from "./pages/page2";
import withPageView from "./pages/withPagesView";
const RouteApp = (props) => {
  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      height: "100vh",
      width: "100vw",
      transform: `scale(${styles.scale}) translateX(${styles.translateX}px)  translateY(${styles.translateY}px)`,
    };
  }

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0, scale: 1, translateX: 0, translateY: 1024 }}
      atLeave={{
        opacity: 0,
        scale: 1,
        translateX: props.direction === "left" ? -1024 : 1024,
        translateY: 0,
      }}
      atActive={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
      mapStyles={mapStyles}>
      <Route exact path={ROUTE_KEY[Constant.PAGE_HOME].PATH} component={withPageView(Home)} />
      {/* <Route path={ROUTE_KEY[Constant.PAGE_2].PATH} component={Page2} /> */}
      <Route path={ROUTE_KEY[Constant.PAGE_3].PATH} component={withPageView(page3)} />
      <Route path={ROUTE_KEY[Constant.PAGE_4].PATH} component={withPageView(page4_1)} />
      <Route path={ROUTE_KEY[Constant.PAGE_5].PATH} component={withPageView(page4)} />
      <Route path={ROUTE_KEY[Constant.PAGE_6].PATH} component={withPageView(page5_1)} />
      <Route path={ROUTE_KEY[Constant.PAGE_7].PATH} component={withPageView(page5)} />
    </AnimatedSwitch>
  );
};
// PAGE NAVI
export const NaviNext = async (props) => {
  let current = await reactLocalStorage.get("PAGE");
  console.log("Page ", current);
  if (Number(current) === Constant.MAX_PAGE) return;
  let nextPage = Number(current) + 1;
  console.log("nextPage ", nextPage);
  let getRoute = ROUTE_KEY.find((res) => {
    return res.KEY === nextPage;
  });
  await reactLocalStorage.set("PAGE", nextPage);
  if (getRoute) {
    props.history.push(getRoute.PATH);
  }
};
export const NaviPrev = async (props) => {
  let current = await reactLocalStorage.get("PAGE");
  console.log("Page ", current);
  if (Number(current) === 0) return;
  let nextPage = Number(current) - 1;
  console.log("nextPage ", nextPage);
  let getRoute = ROUTE_KEY.find((res) => {
    return res.KEY === nextPage;
  });
  await reactLocalStorage.set("PAGE", nextPage);
  if (getRoute) {
    props.history.push(getRoute.PATH);
  }
};
export const NaviGoback = async (props) => {
  let current = await reactLocalStorage.get("PAGE");
  console.log("Page ", current);
  if (Number(current) === 0) return;
  let nextPage = Number(current) - 1;
  console.log("nextPage ", nextPage);
  await reactLocalStorage.set("PAGE", nextPage);
  props.history.goBack();
};

const mapStateToProps = (state) => {
  return {
    direction: state.direction,
  };
};
export default connect(mapStateToProps)(RouteApp);
