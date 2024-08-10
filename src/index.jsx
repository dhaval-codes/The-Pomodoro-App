import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

const root = createRoot(document.body);
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
