import React from "react";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Checkbox } from "@material-ui/core";
import { useState,useContext } from "react";
import { themeContext } from "./App";
import "./Home.css";
import "./Home";
import "./Darkmode.css";
function Todo(props) {
  const [newDotext, setnewDotext] = useState("");
  const theme = useContext(themeContext)
  const addDo = () => {
    if (newDotext === "") {
      alert("write something");
      return;
    }
    props.onAddTodo(newDotext);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
     addDo()
    }
  };

  const onchangevalue = (e) => {
    const value = e.target.value;
    setnewDotext(value);
  };
  let itemSize = " Number of jobs" + " :" + " " + props.toDoList.length;
  return (
    <>
      <div className={"list"}>
        <input onChange={onchangevalue} className={"input"}  onKeyDown={handleKeyDown}></input>
        <button variant="contained" className={(" btn")+( theme.darkMode === "dark" ? " buttonDarkMode" : " ")} onClick={addDo}>
          add
        </button>

        {props.toDoList.map((todo) => (
          <div className={("task ") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>
            {todo}
            <Checkbox
              className={"check"}
              color="secondary"
              onChange={() => {
                props.onDonePressed(todo);
              }}
            ></Checkbox>
            {props.faves.includes(todo) ? (
              <FavoriteIcon
                className={"favorite"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteIcon>
            ) : (
              <FavoriteBorder
                className={"favorite"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteBorder>
            )}
          </div>
        ))}
        <p className={theme.darkMode === "dark" ? "textDarkMode" : ""}>{itemSize}</p>
      </div>
    </>
  );
}

export default Todo;
