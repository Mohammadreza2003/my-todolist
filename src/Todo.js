import React from "react";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Checkbox } from "@material-ui/core";
import { useState } from "react";
import "./Home.css";
import "./Home"
function Todo() {
  const [newDotext, setnewDotext] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [faves, setFaves] = useState([]);
  const [don, setDon] = useState([]);
  const [currentTab, setCurrentTab] = useState("doing");
  const addDo = () => {
    if (newDotext === "") {
      alert("write something");
      return;
    }
    if (!toDoList.includes(newDotext)) {
      const newList = [...toDoList, newDotext];
      setToDoList(newList);
    } else {
      alert("This has already been added");
    }
  };
  const toDo = () => {
    setCurrentTab("doing");
  };
  const onchangevalue = (e) => {
    const value = e.target.value;
    setnewDotext(value);
  };
  let itemSize = " Number of jobs" + " :" + " " + toDoList.length;
  return (
    <>
      <div className={"list"}>
        <input onChange={onchangevalue} className={"input"}></input>
        <Button variant="contained" className={"btn"} onClick={addDo}>
          add
        </Button>
        {currentTab === "doing" &&
          toDoList.map((todo) => (
            <div className={"task"}>
              {todo}
              <Checkbox
                className={"check"}
                color="secondary"
                checked={don.includes(todo)}
                onChange={() => {
                  setToDoList(toDoList.filter((t) => t !== todo));

                  setDon([...don, todo]);
                }}
              ></Checkbox>
              {faves.includes(todo) ? (
                <FavoriteIcon
                  className={"favorite"}
                  color="secondary"
                  onClick={() => {
                    setFaves(faves.filter((item) => item !== todo));
                  }}
                ></FavoriteIcon>
              ) : (
                <FavoriteBorder
                  className={"favorite"}
                  color="secondary"
                  onClick={() => {
                    const fav = [...faves, todo];
                    setFaves(fav);
                  }}
                ></FavoriteBorder>
              )}
              <p>{itemSize}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Todo;
