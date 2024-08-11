import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// importing loader
import Loader from "../components/loader/index.jsx";

// importing pages
import LoginPage from "../pages/login-page/index.jsx";
import LandingPage from "../pages/landing-page/index.jsx";

const navigationArray = [
  {
    label: "login-page",
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    label: "landing-page",
    path: "/landing-page",
    element: (
      <Suspense fallback={<Loader />}>
        <LandingPage />
      </Suspense>
    ),
  },
];

function AppRoutes() {
  return (
    <Routes>
      {navigationArray.map((item, index) => {
        return (
          <Route
            key={index}
            path={item?.path}
            element={item?.element}
            label={item?.label}
          />
        );
      })}
    </Routes>
  );
}

export default AppRoutes;
