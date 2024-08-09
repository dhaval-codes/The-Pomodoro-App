import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/login-page/index.jsx";

const navigationArray = [
  {
    label: "login-page",
    path: "/",
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <LoginPage />
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
