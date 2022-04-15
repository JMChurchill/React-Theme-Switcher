import logo from "./logo.svg";
import "./App.css";
import ColorSelector from "./Components/ColorSelector";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//import json -> would be saved on db
import themeData from "./assets/themes.json";
import { useEffect, useState } from "react";
import FontSizeBar from "./Components/FontSizeBar";
import CustomButton from "./Components/CustomButton";
import AllThemes from "./Components/AllThemes";
import CreateTheme from "./Components/CreateTheme";

function App() {
  const setDefaultTheme = () => {
    setTheme();
  };
  const setTheme = (
    backgroundColor = "white",
    primaryColor = "lightblue",
    isDark = false
  ) => {
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
      "--text-color",
      isDark ? "#c9d1d9" : "black"
    );
    document.documentElement.style.setProperty(
      "--items-container",
      isDark ? "rgba(255, 255, 255, 0.1)" : "rgb(0, 0, 0, 0.05)"
    );
  };

  useEffect(() => {
    //get themes from local storage
    let theme = JSON.parse(localStorage.getItem("theme"));
    console.log(theme);

    //set themes
    if (!theme) {
      setDefaultTheme();
    } else {
      try {
        setTheme(theme.backgroundColor, theme.primaryColor, theme.isDark);
      } catch (err) {
        setDefaultTheme();
      }
    }
  });

  return (
    <Router>
      <main>
        <div className="container">
          <h1>Theme switcher</h1>
          <h2>Font size</h2>
          <div className="fonts_container">
            <FontSizeBar />
          </div>
          <Routes>
            <Route path="/" element={<AllThemes />} />
            <Route path="/create" element={<CreateTheme />} />
            {/* <AllThemes /> */}
          </Routes>
          <h1>Site Controls</h1>
          <CustomButton
            text={"Refresh"}
            onClick={() => window.location.reload()}
          />
          <CustomButton
            text={"Clear Local Storage"}
            type={2}
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          />
        </div>
      </main>
    </Router>
  );
}

export default App;
