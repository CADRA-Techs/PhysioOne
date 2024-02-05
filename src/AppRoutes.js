import React from "react";

const pathAppBase = "/";
// const pathPageLogin = "/login";

const pathHome = "/";
const home = React.lazy(() => import("./pages/home/home"));
const routeUserManagement = {
  path: pathHome,
  element: home,
  name: "Home",
};

const pathTeamOfDocs = "/doctors";
const teamOfDocs = React.lazy(() => import("./pages/teamOfDocs/TeamOfDocs"));
const routeTeamOfDocs = {
  path: pathTeamOfDocs,
  element: teamOfDocs,
  name: "Doctors",
};

const pathAbout = "/about";
const about = React.lazy(() => import("./pages/about/About"));
const routeAbout = {
  path: pathAbout,
  element: about,
  name: "About",
};

const pathServices = "/services";
const services = React.lazy(() => import("./pages/services/Services"));
const routeServices = {
  path: pathServices,
  element: services,
  name: "Services",
};

const pathContact = "/contact";
const contactus = React.lazy(() => import("./pages/contact/Contact"));
const routeContact = {
  path: pathContact,
  element: contactus,
  name: "Contact Us",
};

const routes = [
  routeUserManagement,
  routeTeamOfDocs,
  routeAbout,
  routeServices,
  routeContact,
];

const AppRoutes = Object.freeze({
  routes,
  pathAppBase,
  pathHome,
  pathTeamOfDocs,
  pathAbout,
  pathServices,
  pathContact,
});

export default AppRoutes;
