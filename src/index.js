import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configStore from "./redux/configStore";
import { PersistGate } from "redux-persist/integration/react";

const { store, presistor } = configStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={presistor}>
      <div className="App-header">
        <App />
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
/*
<Provider store={store}>
    <PersistGate loading={null} persistor={presistor}>
      <div className="App-header"></div>
    </PersistGate>
  </Provider>
  */
