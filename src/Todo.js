import React from "react";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import "./Home.css";
import "./Home";
function Todo(props) {
  const [newDotext, setnewDotext] = useState("");
  const addDo = () => {
    if (newDotext === "") {
      alert("write something");
      return;
    }
    props.onAddTodo(newDotext);
  };
  
  const onchangevalue = (e) => {
    const value = e.target.value;
    setnewDotext(value);
  };
  let itemSize = " Number of jobs" + " :" + " " + props.toDoList.length;
  return (
    <>
      
        <div className={"list"}>
          <input onChange={onchangevalue} className={"input"}></input>
          <Button variant="contained" className={"btn"} onClick={addDo}>
            add
          </Button>

          {props.toDoList.map((todo) => (
            <div className={"task"}>
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
          <p>{itemSize}</p>
        </div>
      
    </>
  );
}

export default Todo;
