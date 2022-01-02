import React,{useContext} from "react";
import "./Home.css";
import "./Home";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import { themeContext } from "./App";
function Done(props) {
  let donee = " Number of dones" + " :" + " " + props.don.length;
  const theme = useContext(themeContext)
  return (
    <>
      <div className={"list"}>
        {props.don.map((todo) => (
          <div className={("task ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>
            {todo}

            {props.faves.includes(todo) ? (
              <FavoriteIcon
                className={"favoritetwo"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteIcon>
            ) : (
              <FavoriteBorder
                className={"favoritetwo"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteBorder>
            )}
            <DeleteIcon
              className={"dele"}
              color="secondary"
              onClick={() => {
                props.onDeletePressed(todo);
              }}
            ></DeleteIcon>
          </div>
        ))}
         <p className={theme.darkMode === "dark" ? "textDarkMode" : ""}>{donee}</p>
      </div>

     
    </>
  );
}

export default Done;
