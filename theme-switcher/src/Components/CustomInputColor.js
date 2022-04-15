import React from "react";
import styles from "./CustomInputColor.module.css";

const CustomInputColor = ({
  value,
  password = false,
  name,
  setValue,
  placeholder,
  fill = false,
  setshowPallete,
}) => {
  return (
    <div className={styles.container} onClick={setshowPallete}>
      <div
        className={styles.selected_color}
        style={{ backgroundColor: `${value}` }}
      ></div>

      <input
        className={styles.primary}
        placeholder={placeholder}
        style={fill ? { margin: "0.5rem 0", width: "100%" } : {}}
        // {password?}
        value={value}
        type={password ? "password" : "text"}
        name={name}
        disabled={true}

        // onChange={(e) => setValue("hex", e.target.value)} //TODO: fix
      />
    </div>
  );
};

export default CustomInputColor;
