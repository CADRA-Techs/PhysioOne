import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import Navbar from "./pages/home/navbar";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div className="">
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navbar/><br/><br/><br/><br/><br/>
      <Navigation/>
    </BrowserRouter>
  </div>
);
