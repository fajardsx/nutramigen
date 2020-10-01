import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { AsyncStorage } from "AsyncStorage";
import "./App.css";
import RouteApp from "./component/Route";
import { Container } from "react-bootstrap";

class App extends Component {
  componentDidMount() {
    this.resetDefault();
  }
  async resetDefault() {
    await AsyncStorage.setItem("PAGE", 0);
  }
  render() {
    return (
      <Container style={{ paddingLeft: 0, paddingRight: 0, marginLeft: 0, marginRight: 0 }}>
        <BrowserRouter>
          <RouteApp />
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
