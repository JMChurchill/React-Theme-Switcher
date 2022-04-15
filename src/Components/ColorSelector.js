import React from "react";
import styles from "./ColorSelector.module.css";

const ColorSelector = ({
  name,
  primaryColor,
  backgroundColor,
  isDark,
  selectTheme,
}) => {
  return (
    <div
      className={styles.color_container}
      onClick={() => selectTheme(backgroundColor, primaryColor, isDark)}
    >
      <div
        className={styles.primary_color}
        style={{ backgroundColor: primaryColor }}
      >
        <div
          className={styles.secondary_color}
          style={{ backgroundColor: backgroundColor }}
        >
          <p
            className={styles.text_color}
            style={{ color: isDark ? "white" : "black" }}
          >
            abc
          </p>
          <p
            className={styles.hidden}
            style={
              isDark
                ? {
                    backgroundColor: "rgba(255, 255, 255, 0.75)",
                    color: "black",
                  }
                : {}
            }
          >
            Select
          </p>
        </div>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ColorSelector;
