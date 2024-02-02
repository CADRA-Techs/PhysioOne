import React from "react";

const pathAppBase = "/";
// const pathPageLogin = "/login";

const pathHome = `/home`;
const home = React.lazy(() => import("./pages/home/home"));
const routeUserManagement = {
  path: pathHome,
  element: home,
};

const routes = [routeUserManagement];

const AppRoutes = Object.freeze({
  routes,
  pathAppBase,
  pathHome,
});

export default AppRoutes;
