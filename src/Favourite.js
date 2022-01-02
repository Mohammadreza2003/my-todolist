import React,{useContext} from "react";
import "./Home.css";
import "./Home.js";
import DeleteIcon from "@material-ui/icons/Delete";
import { themeContext } from "./App";
function Favourite(props) {
  let fave = " Number of favorites" + " :" + " " + props.faves.length;
  const theme = useContext(themeContext)
  return (
    <>
      <div className={"list"}>
        {props.faves.map((todo) => (
          <div className={("task ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>
            {todo}
            <DeleteIcon
              className={"dele"}
              color="secondary"
              onClick={() => {
                props.onDeletePressed(todo);
              }}
            ></DeleteIcon>
          </div>
        ))}
        <p className={theme.darkMode === "dark" ? "textDarkMode" : ""}>{fave}</p>
      </div>
    </>
  );
}

export default Favourite;
