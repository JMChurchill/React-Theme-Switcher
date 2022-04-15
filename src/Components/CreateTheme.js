import React, { useState } from "react";
import CustomInput from "./CustomInput";
import styles from "./CreateTheme.module.css";
import CustomButton from "./CustomButton";
import themeData from "../assets/themes.json";
import { useNavigate } from "react-router-dom";

// color palette
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import CustomInputColor from "./CustomInputColor";

const CreateTheme = () => {
  const [name, setName] = useState();
  const [isDark, setIsDark] = useState(false);
  const [primaryColor, setPrimaryColor] = useColor("hex", "#121212");
  //   const [backgroundColor, setBackgroundColor] = useState();
  const [backgroundColor, setBackgroundColor] = useColor("hex", "#ffffff");
  //   const [buttonTextColor, setButtonTextColor] = useState();
  const [buttonTextColor, setButtonTextColor] = useColor("hex", "#ffffff");

  console.log(primaryColor);

  //color palette
  const [color, setColor] = useColor("hex", "#121212");
  const [showPrimaryPalette, setShowPrimaryPalette] = useState(false);
  const [showBackgroundPalette, setShowBackgroundPalette] = useState(false);
  const [showButtonTextPalette, setShowButtonTextPalette] = useState(false);

  let navigate = useNavigate();

  return (
    <>
      <h2>Create Theme</h2>
      <div className={styles.container}>
        <h3>Theme Name</h3>
        <CustomInput setValue={setName} />
        <h3>Primary</h3>
        <CustomInputColor
          value={primaryColor.hex}
          setValue={setPrimaryColor}
          setshowPallete={() => setShowPrimaryPalette(!showPrimaryPalette)}
        />
        {showPrimaryPalette ? (
          <ColorPicker
            width={456}
            height={228}
            color={primaryColor}
            onChange={setPrimaryColor}
            hideHSV
            dark
          />
        ) : (
          <></>
        )}
        <h3>Background</h3>
        <CustomInputColor
          value={backgroundColor.hex}
          setValue={setBackgroundColor}
          setshowPallete={() =>
            setShowBackgroundPalette(!showBackgroundPalette)
          }
        />
        {showBackgroundPalette ? (
          <ColorPicker
            width={456}
            height={228}
            color={backgroundColor}
            onChange={setBackgroundColor}
            hideHSV
            dark
          />
        ) : (
          <></>
        )}

        <h3>Button Text</h3>
        <CustomInputColor
          value={buttonTextColor.hex}
          setValue={setButtonTextColor}
          setshowPallete={() =>
            setShowButtonTextPalette(!showButtonTextPalette)
          }
        />
        {showButtonTextPalette ? (
          <ColorPicker
            width={456}
            height={228}
            color={buttonTextColor}
            onChange={setButtonTextColor}
            hideHSV
            dark
          />
        ) : (
          <></>
        )}
        {/* <CustomInput setValue={setButtonTextColor} /> */}
        <h3>Light/Dark</h3>
        <div onChange={(e) => setIsDark(e.target.value)}>
          <input
            type="radio"
            id="light"
            name="mode"
            value={false}
            defaultChecked
          />
           <label htmlFor="light">Light</label>
            <input type="radio" id="dark" name="mode" value={true} /> 
          <label htmlFor="dark">Dark</label> 
        </div>
      </div>
      <CustomButton
        text={"Create color"}
        onClick={() => {
          //   console.log(isDark);
          //   console.log(primaryColor);
          //   console.log(backgroundColor);
          //   console.log(buttonTextColor);
          let newTheme = {
            name: name,
            primary: primaryColor.hex,
            background: backgroundColor.hex,
            buttonText: buttonTextColor.hex,
            isDark: isDark,
          };
          //   console.log(newTheme);
          //   themeData.push(newTheme);
          //   console.log(themeData);

          const jsonData = JSON.stringify(themeData);
          let allThemes = JSON.parse(localStorage.getItem("allThemes"));
          allThemes = allThemes.themeData;
          allThemes.push(newTheme);
          console.log(allThemes);
          // save to local storage
          localStorage.setItem(
            "allThemes",
            JSON.stringify({
              themeData: allThemes,
            })
          );
          navigate("/");
        }}
      />
    </>
  );
};

export default CreateTheme;
