import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./pages/home/navbar";

const App = () => (
  <div className="">
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navbar/>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
