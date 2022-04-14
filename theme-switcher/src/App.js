import logo from "./logo.svg";
import "./App.css";
import ColorSelector from "./Components/ColorSelector";

//import json -> would be saved on db
import themeData from "./assets/themes.json";
import { useEffect, useState } from "react";
import FontSizeBar from "./Components/FontSizeBar";

function App() {
  const [themes, setThemes] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const setDefaultTheme = () => {
    // document.documentElement.style.setProperty("--background-color", "white");
    // document.documentElement.style.setProperty("--primary-color", "lightblue");
    // document.documentElement.style.setProperty("--text-color", "black");
    setTheme();
  };
  const setTheme = (
    backgroundColor = "white",
    primaryColor = "lightblue",
    isDark = "false"
  ) => {
    document.documentElement.style.setProperty(
      "--background-color",
      backgroundColor
    );
    document.documentElement.style.setProperty("--primary-color", primaryColor);
    document.documentElement.style.setProperty(
      "--text-color",
      isDark ? "white" : "black"
    );

    // if (isDark) {
    //   document.documentElement.style.setProperty("--text-color", "white");
    // } else document.documentElement.style.setProperty("--text-color", "black");
  };
  useEffect(() => {
    setThemes(themeData);
    // // get selected index from local storage
    // const index = 4;
    // setSelectedIndex(index);
  }, []);
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
  const selectTheme = (backgroundColor, primaryColor, isDark) => {
    setTheme(backgroundColor, primaryColor, isDark);
    localStorage.setItem(
      "theme",
      JSON.stringify({
        backgroundColor: backgroundColor,
        primaryColor: primaryColor,
        isDark: isDark,
      })
    );
  };
  return (
    <main>
      <div className="container">
        <h1>Theme switcher</h1>
        <h2>Font size</h2>
        <div className="fonts_container">
          <FontSizeBar />
        </div>
        <h2>Colors</h2>
        <div className="all_colors_container">
          {/* <ColorSelector /> */}
          {themes.map((theme, i) => (
            <ColorSelector
              key={i}
              name={theme.name}
              primaryColor={theme.primary}
              backgroundColor={theme.background}
              isDark={theme.isDark}
              selectTheme={selectTheme}
            />
          ))}
        </div>
        <button>Refrensh Page</button>
      </div>
    </main>
  );
}

export default App;
