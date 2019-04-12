import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import cartReducer from "./components/reducers/cartReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import axios from "axios";

const store = createStore(cartReducer);
console.log(store.getState());

const action = {
  type: "changeState",
  payload: {
    newState: "New state"
  }
};

store.dispatch(action);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
