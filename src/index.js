import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Provider } from "react-redux";
import reducer from "./reducers";
import { createStore } from "redux";
import middleware from "./middleware";
import { handleInitialData } from "./actions/shared";

const store = createStore(reducer, middleware);

//Initial data before react render
store.dispatch(handleInitialData());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
