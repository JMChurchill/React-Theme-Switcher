import React, { useEffect, useState } from "react";
import styles from "./FontSizeBar.module.css";
const FontSizeBar = () => {
  const [selected, setSelected] = useState();
  const changeSelectedFont = (size) => {
    setSelected(size);
    localStorage.setItem("fontSize", size);
    document.documentElement.style.setProperty("--font-size", size);
  };

  useEffect(() => {
    let fontSize = localStorage.getItem("fontSize");
    if (fontSize) {
      setSelected(fontSize);
      document.documentElement.style.setProperty("--font-size", fontSize);
    } else {
      document.documentElement.style.setProperty("--font-size", "18px");
      setSelected("18px");
    }
  }, []);

  const fontSizes = ["12px", "14px", "16px", "18px", "20px", "22px", "24px"];

  return (
    <div className={styles.container}>
      {fontSizes.map((size, i) => {
        if (i == 0) {
          return (
            <React.Fragment key={i}>
              <div
                className={styles.bar_end}
                aria-current={selected == size ? "true" : false}
                onClick={() => changeSelectedFont(size)}
              ></div>
              <div className={styles.bar_center}></div>
            </React.Fragment>
          );
        } else if (i == fontSizes.length - 1) {
          return (
            <div
              key={i}
              className={styles.bar_end}
              aria-current={selected == size ? "true" : false}
              onClick={() => changeSelectedFont(size)}
            ></div>
          );
        } else {
          return (
            <React.Fragment key={i}>
              <div
                className={styles.bar_position}
                aria-current={selected == size ? "true" : false}
                onClick={() => changeSelectedFont(size)}
              ></div>
              <div className={styles.bar_center}></div>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

export default FontSizeBar;
