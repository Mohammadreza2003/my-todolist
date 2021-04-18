import React from "react";
import { useState } from "react";
import "./app.css";
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

function App() {
  const [newDotext, setnewDotext] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [faves, setFaves] = useState([]);
  const addDo = () => {
    const newList = [...toDoList, newDotext];
    setToDoList(newList);
    if (!newDotext) alert("Write something");
  };

  const onchangevalue = (e) => {
    const value = e.target.value;
    setnewDotext(value);
  };
  console.log(faves);
  return (
    <div className={"conteaner"}>
      <div className={"list"}>
        <list className={"li"}>To Do</list>
        <list className={"li"}>Favourite</list>
        <list className={"li"}>Done</list>
      </div>
      <div className={"list"}>
        <input onChange={onchangevalue} className={"input"}></input>
        <Button
          variant="contained"
          color="secondary"
          className={"btn"}
          onClick={addDo}
        >
          add
        </Button>
        {toDoList.map((todo) => (
          <div className={"task"}>
            {todo}
            <Checkbox className={"check"} color="secondary"></Checkbox>
            {todo.includes(todo) ? (
              <FavoriteBorder
                className={"favorite"}
                color="secondary"
                onClick={() => {
                  const fav = [...faves, todo];
                  setFaves(fav);
                }}
              ></FavoriteBorder>
            ) : (
              <FavoriteIcon></FavoriteIcon>
            )}

            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
