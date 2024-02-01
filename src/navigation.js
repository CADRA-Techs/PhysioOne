import React, { Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import Navbar from './pages/home/navbar'
import Contact from "./pages/home/contact/contact";

function Navigation() {
  const navigate = useNavigate();
  return (
    <Suspense fallback={<div></div>}>
      <Routes>
        {AppRoutes.routes.map((route, idx) => {
          return route.element ? (
            <Route key={idx} path={route.path} element={<route.element />} />
          ) : null;
        })}
        <Route path="*" element={<div>404 Page Not Found</div>} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      
    </Suspense>
  );
}

export default Navigation;
