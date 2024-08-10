// ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "./themes.jsx";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const initializeTheme = async () => {
      try {
        const deviceTheme = await window.electron.getDeviceTheme();
        setCurrentTheme(deviceTheme);
      } catch (error) {
        console.error("Failed to get device theme:", error);
        // Fallback to light theme if there's an error
        setCurrentTheme("light");
      }
    };

    initializeTheme();
  }, []);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
  };

  const themeObject = theme[currentTheme];

  return (
    <ThemeContext.Provider value={{ themeObject, toggleTheme }}>
      <StyledThemeProvider theme={themeObject}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
