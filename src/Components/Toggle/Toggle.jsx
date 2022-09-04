import React, { useState } from "react";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import "./Toggle.css";
const Toggle = () => {
  const [dark, setDark] = useState(false);
  if (window.localStorage.getItem("color-background")) {
      document.documentElement.style.setProperty("--balck", localStorage.getItem("color-font"));
      document.querySelector("body").style.background =localStorage.getItem("color-background")
  }
  const handler = () => {
    setDark(!dark);
    if (!dark) {
      document.querySelector("body").style.background = "black";
      document.documentElement.style.setProperty("--balck", "white");
      window.localStorage.setItem("color-background", "black");
      window.localStorage.setItem("color-font", "white");
    } else {
        document.documentElement.style.setProperty("--balck", "#242D49");
        document.querySelector("body").style.background = "white";
        window.localStorage.setItem("color-background", "#white");
        window.localStorage.setItem("color-font", "#242D49");
    }
  };
  return (
    <div className="toggle">
      <Moon />
      <Sun />
      <div className={localStorage.getItem("color-background") === 'black' ? "btn dark" : "btn"} onClick={handler}></div>
    </div>
  );
};

export default Toggle;
