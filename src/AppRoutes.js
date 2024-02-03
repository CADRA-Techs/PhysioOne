import React from "react";

const pathAppBase = "/";
// const pathPageLogin = "/login";

const pathHome = `/home`;
const home = React.lazy(() => import("./pages/home/home"));
const routeUserManagement = {
  path: pathHome,
  element: home,
};

const pathTeamOfDocs = "/doctors";
const teamOfDocs = React.lazy(() => import("./pages/teamOfDocs/TeamOfDocs"));
const routeTeamOfDocs = {
  path: pathTeamOfDocs,
  element: teamOfDocs,
};

const routes = [routeUserManagement, routeTeamOfDocs];

const AppRoutes = Object.freeze({
  routes,
  pathAppBase,
  pathHome,
  pathTeamOfDocs,
});

export default AppRoutes;
