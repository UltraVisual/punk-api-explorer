import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";


ReactDOM.render(
  <Provider store={ store }>
    <App title="Beer List" message="Please select from the list below:" />
  </Provider>,
  document.getElementById("root")
);