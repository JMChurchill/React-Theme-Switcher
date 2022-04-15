import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import json -> would be saved on db
import themeData from "../assets/themes.json";
import ColorSelector from "./ColorSelector";
import CustomButton from "./CustomButton";

import styles from "./AllThemes.module.css";

import { MdAdd } from "react-icons/md";

const AllThemes = () => {
  const [themes, setThemes] = useState([]);
  let navigate = useNavigate();
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
    //would use database
    //check local storage for allThemes
    let allThemes = JSON.parse(localStorage.getItem("allThemes"));
    console.log("all the themes!", allThemes);
    if (!allThemes) {
      console.log("accessed from json");
      setThemes(themeData);
      localStorage.setItem(
        "allThemes",
        JSON.stringify({
          themeData,
        })
      );
    } else {
      console.log("accessed from local storage");
      setThemes(allThemes.themeData);
    }

    // // get selected index from local storage
    // const index = 4;
    // setSelectedIndex(index);
  }, []);
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
    <>
      <h2>Colors</h2>
      <div className={styles.all_colors_container}>
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
        <CustomButton
          text={<MdAdd />}
          type={5}
          onClick={() => {
            navigate("/create");
          }}
        />
      </div>
    </>
  );
};

export default AllThemes;
