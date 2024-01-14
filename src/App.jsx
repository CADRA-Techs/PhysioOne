import React from "react";
import "./index.css";
import AppRoutes from "./AppRoutes";
import Navigation from "./navigation";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div className="container">
    <BrowserRouter basename={AppRoutes.pathAppBase}>
      <Navigation />
    </BrowserRouter>
  </div>
);
