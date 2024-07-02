// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeContext = createContext();

const themes = {
  dark: {
    name: "dark",
    background: "#000000",
    text: "#ffffff",
    hihlightedText: "#ffc0cb",
    brandName: "#ffc0cb",
    hamburgerBackground: "#ffc0cb",
    hamburgerBars: "#000000",
    videoSrc: `${process.env.PUBLIC_URL}/media3.mp4`,
    homeH1MarginControl: "-1rem",
  },
  light: {
    name: "light",
    background: "#ffc0cb",
    text: "#333333",
    hihlightedText: "#8b0000",
    brandName: "#000000",
    hamburgerBackground: "#000000",
    hamburgerBars: "#ffffff",
    videoSrc: `${process.env.PUBLIC_URL}/media2.mp4`,
    homeH1MarginControl: "1rem",
  },
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme === "dark" ? themes.dark : themes.light);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === themes.dark ? themes.light : themes.dark;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === themes.dark ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
