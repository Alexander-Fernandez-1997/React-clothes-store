import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { AppRouter } from "./Routers/AppRoutes";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
