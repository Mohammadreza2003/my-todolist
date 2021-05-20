import React from "react";
import { useState } from "react";
import "./app.css";
import { Checkbox } from "@material-ui/core";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

function App() {
  const [newDotext, setnewDotext] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const [faves, setFaves] = useState([]);
  const [don, setDon] = useState([]);
  const [currentTab, setCurrentTab] = useState("doing");
  const [delet, setDelet] = useState([]);

  const addDo = () => {
    if (newDotext == "") {
      return;
    }
    if (!toDoList.includes(newDotext)) {
      const newList = [...toDoList, newDotext];
      setToDoList(newList);
    }
  };
  const toDo = () => {
    setCurrentTab("doing");
  };

  const favourite = () => {
    setCurrentTab("favourite");
  };

  const done = () => {
    setCurrentTab("done");
  };
  const onchangevalue = (e) => {
    const value = e.target.value;
    setnewDotext(value);
  };

  console.log(faves);
  return (
    <div className={"conteaner"}>
      <div className={"list"}>
        <Button className={"li"} onClick={toDo}>
          To Do
        </Button>
        <Button className={"li"} onClick={favourite}>
          Favourite
        </Button>
        <Button className={"li"} onClick={done}>
          Done
        </Button>
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
            </div>
          ))}
      </div>
      <div className={"list"}>
        <list>Done</list>
        {currentTab === "done" &&
          don.map((todo) => (
            <div className={"task"}>
              {todo}

              {faves.includes(todo) ? (
                <FavoriteIcon
                  className={"favoritetwo"}
                  color="secondary"
                  onClick={() => {
                    setFaves(faves.filter((item) => item !== todo));
                  }}
                ></FavoriteIcon>
              ) : (
                <FavoriteBorder
                  className={"favoritetwo"}
                  color="secondary"
                  onClick={() => {
                    const fav = [...faves, todo];
                    setFaves(fav);
                  }}
                ></FavoriteBorder>
              )}
              <DeleteIcon
                className={"dele"}
                color="primary"
                onClick={() => {
                  setDon(don.filter((t) => t !== todo));

                  setDelet([...delet, todo]);
                }}
              ></DeleteIcon>
            </div>
          ))}
      </div>
      <div className={"list"}>
        <list>Favourite</list>
        {currentTab === "favourite" &&
          faves.map((todo) => (
            <div className={"task"}>
              {todo}
              <DeleteIcon
                className={"dele"}
                color="primary"
                onClick={() => {
                  setFaves(faves.filter((t) => t !== todo));

                  setDelet([...delet, todo]);
                }}
              ></DeleteIcon>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
