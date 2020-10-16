import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Routers, browserHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "./App.css";
import RouteApp from "./Route";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {
  updateCurrentOrentation,
  updateCurrentDirection,
  updateCurrentPage,
} from "./redux/actions/actions";
import history from "./component/history";
let that = null;

const App = (props) => {
  const handle = useFullScreenHandle();
  const [fullScreenMode, setFullScreenMode] = useState(false);

  useEffect(() => {
    if (window.innerWidth > window.innerHeight) {
      getOrientation("portrait");
    } else {
      getOrientation("landscape");
    }
    window.addEventListener(
      "orientationchange",
      function () {
        if (window.innerWidth > window.innerHeight) {
          getOrientation("portrait");
        } else {
          getOrientation("landscape");
        }
      },
      false
    );
    //resetDefault();

    //fullScreen();
  }, []);
  const reportChange = useCallback(
    (state, handle) => {
      if (handle === handle) {
        console.log("Screen 1 went to", state, handle);
        setFullScreenMode(state);
      }
    },
    [handle]
  );
  async function resetDefault() {
    await reactLocalStorage.set("PAGE", 0);
  }
  async function getOrientation(type) {
    console.log("Device Orientation ", type);
  }
  async function fullScreen() {
    handle.enter();
  }
  async function exitfullScreen() {
    handle.exit();
    setFullScreenMode(false);
  }
  return (
    <FullScreen handle={handle} onChange={reportChange}>
      <div className="App-BG">
        <Container
          style={{
            paddingLeft: 0,
            paddingRight: 0,
            marginLeft: 0,
            marginRight: "auto",
            height: "100vh",
            width: "100vw",
          }}>
          <Routers>
            <RouteApp />
          </Routers>
          {fullScreenMode == false && (
            <Button
              variant="tooglefullscreen"
              style={{ color: "#fff" }}
              onClick={fullScreen}></Button>
          )}
          {fullScreenMode == true && (
            <Button
              variant="tooglefullscreen closeType"
              style={{ color: "#fff" }}
              onClick={exitfullScreen}></Button>
          )}
        </Container>
      </div>
    </FullScreen>
  );
};

const mapStateToProps = (state) => {
  return {
    page: state.page,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updatePage: (data) => {
      dispatch(updateCurrentPage(data));
    },
    updateDirection: (data) => {
      dispatch(updateCurrentDirection(data));
    },
    updateOrientation: (data) => {
      dispatch(updateCurrentOrentation(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
