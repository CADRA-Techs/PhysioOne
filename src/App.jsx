import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom";

const App = () => (
  <div className="container">
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navigation />
    </BrowserRouter>
    <navigation />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
