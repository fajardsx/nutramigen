import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import "./App.css";
import RouteApp from "./component/Route";
import { Container } from "react-bootstrap";

class App extends Component {
  componentDidMount() {
    this.resetDefault();
  }
  async resetDefault() {
    await reactLocalStorage.set("PAGE", 0);
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

export default App;
