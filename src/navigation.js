import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Home from "./pages/home/home";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/about/about";
import Services from "./pages/services/services";

function Navigation() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div></div>}>
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
        <Route path="*" element={<div>404 Page Not Found</div>} />
        <Route path="/" element={<Home />} />
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element = {<About/>} />
        <Route path="/services" element = {<Services/>}/>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default Navigation;
