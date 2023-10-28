import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const store = configureStore({
  reducer: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
