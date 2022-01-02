import React,{useContext} from "react";
import { themeContext } from "./App";
function Welcome(props) {
  const theme = useContext(themeContext)
  return (
    <>
      <h1 className={theme.darkMode === "dark" ? "textDarkMode" : ""}>Hi, welcome,{props.name}</h1>
    </>
  );
}

export default Welcome;
