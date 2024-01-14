import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

function Navigation() {
  return (
    <Suspense fallback={<div></div>}>
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
        <Route exact path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Suspense>
  );
}

export default Navigation;
