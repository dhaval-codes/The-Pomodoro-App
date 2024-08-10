import React from "react";
import AppRoutes from "./utils/routes.jsx";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/utils/theme.jsx";
import { useSelector } from "react-redux";

export default function App() {
  const selectedTheme = useSelector((store) => {
    return store?.theme?.theme;
  });

  return (
    <ThemeProvider theme={{ theme, ...theme[selectedTheme] }}>
      <AppRoutes />
    </ThemeProvider>
  );
}
