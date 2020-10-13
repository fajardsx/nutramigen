import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
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
    resetDefault();

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
            width:'100vw'
          }}>
          <BrowserRouter>
            <RouteApp />
          </BrowserRouter>
          {fullScreenMode == false && (
            <Button
              variant="tooglefullscreen"
              style={{ color: "#fff", backgroundColor: "#f05a29", fontSize: 12 }}
              onClick={fullScreen}>
              Enter FullScreen
            </Button>
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
