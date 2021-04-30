import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
