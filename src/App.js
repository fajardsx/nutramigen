import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "./App.css";
import RouteApp from "./Route";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import {
  updateCurrentOrentation,
  updateCurrentDirection,
  updateCurrentPage,
} from "./redux/actions/actions";

let that = null;

class App extends Component {
  constructor(props) {
    super(props);
    that = this;
  }

  componentDidMount() {
    window.addEventListener(
      "orientationchange",
      function () {
        if (window.innerWidth > window.innerHeight) {
          that.getOrientation("portrait");
        } else {
          that.getOrientation("landscape");
        }
      },
      false
    );
    this.resetDefault();
  }
  async resetDefault() {
    await reactLocalStorage.set("PAGE", 0);
  }
  async getOrientation(type) {
    console.log("Device Orientation ", type);
  }
  render() {
    return (
      <Container
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: "auto",
          height: "100vh",
        }}>
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
      </Container>
    );
  }
}

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
