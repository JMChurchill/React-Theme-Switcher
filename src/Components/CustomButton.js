import React from "react";
import styles from "./CustomButton.module.css";

const CustomButton = ({ text, type = 1, onClick, fill = false }) => {
  if (type === 4) {
    return (
      <button
        className={styles.icon}
        style={fill ? { width: "100%", minWidth: 0, maxWidth: "12rem" } : {}}
        onClick={() => onClick()}
      >
        {text}
      </button>
    );
  } else if (type === 5) {
    return (
      <button
        className={styles.floating_icon}
        style={fill ? { width: "100%", minWidth: 0, maxWidth: "12rem" } : {}}
        onClick={() => onClick()}
      >
        {text}
      </button>
    );
  }
  return (
    <button
      className={type == 1 ? styles.primary : styles.secondary}
      style={fill ? { width: "100%", minWidth: 0, maxWidth: "12rem" } : {}}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default CustomButton;
