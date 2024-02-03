import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import Navbar from "./pages/home/navbar";
import Contact from "./pages/contact/contact";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div>
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navigation />
    </BrowserRouter>
  </div>
);
