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

const pathAbout = "/about";
const about = React.lazy(() => import("./pages/about/About"));
const routeAbout = {
  path: pathAbout,
  element: about,
};

const pathServices = "/services";
const services = React.lazy(() => import("./pages/services/Services"));
const routeServices = {
  path: pathServices,
  element: services,
};

const routes = [
  routeUserManagement,
  routeTeamOfDocs,
  routeAbout,
  routeServices,
];

const AppRoutes = Object.freeze({
  routes,
  pathAppBase,
  pathHome,
  pathTeamOfDocs,
  pathAbout,
  pathServices,
});

export default AppRoutes;
