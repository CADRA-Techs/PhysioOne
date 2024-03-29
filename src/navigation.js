import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Error404 from "./pages/error404/Error404";
import TopHeader from "./components/topHeader/TopHeader";

function Navigation() {
  return (
    <Suspense
      fallback={
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      }
    >
      <TopHeader />
      <Navbar />
      <Routes>
        {AppRoutes.routes.map((route, idx) => {
          return route.element ? (
            <Route
              key={idx}
              exact
              path={route.path}
              element={<route.element />}
            />
          ) : null;
        })}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Navigation;
