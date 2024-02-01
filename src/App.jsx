import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Navbar from "./pages/home/navbar";
import Contact from "./pages/home/contact/contact";
const App = () => (
  <div className="">
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navbar/><br/><br/><br/><br/><br/>
      <Navigation/>
    </BrowserRouter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
