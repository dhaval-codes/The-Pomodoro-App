import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "./utils/themes/themeContext.js";

const root = createRoot(document.body);
root.render(
  <ThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
);
