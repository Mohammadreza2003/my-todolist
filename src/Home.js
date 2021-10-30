import React from "react";
import { useState } from "react";
import "./Home.css";
import Button from "@material-ui/core/Button";
import Todo from "./Todo";
import Done from "./Done";
import Favourite from "./Favourite";
import Welcome from "./Welcome";
import Sponsor from "./Sponsor";
function Home() {
  const [currentTab, setCurrentTab] = useState("doing");
  const [toDoList, setToDoList] = useState([]);
  const [faves, setFaves] = useState([]);
  const [don, setDon] = useState([]);
  const [delet, setDelet] = useState([]);

  const toDo = () => {
    setCurrentTab("doing");
  };

  const favourite = () => {
    setCurrentTab("favourite");
  };

  const done = () => {
    setCurrentTab("done");
  };

  return (
    <div className={"conteaner"}>
      <div className={"list"}>
        <Welcome name="mammad" />
        <Button
          className={currentTab === "doing" ? "thistab" : ""}
          onClick={toDo}
        >
          To Do
        </Button>
        <Button
          className={currentTab === "done" ? "thistab " : ""}
          onClick={done}
        >
          Done
        </Button>
        <Button
          className={currentTab === "favourite" ? "thistab" : ""}
          onClick={favourite}
        >
          Favourite
        </Button>
      </div>
      {currentTab === "doing" &&(
        <Todo
          onDonePressed={(todo) => {
            setToDoList(toDoList.filter((t) => t !== todo));

            setDon([...don, todo]);
          }}
          onFavePressed={(todo) => {
            if (faves.includes(todo)) {
              setFaves(faves.filter((item) => item !== todo));
            } else {
              const fav = [...faves, todo];
              setFaves(fav);
            }
          }}
          faves={faves}
          toDoList={toDoList}
          onAddTodo={(newTodo) => {
            if (!toDoList.includes(newTodo)) {
              const newList = [...toDoList, newTodo];
              setToDoList(newList);
            } else {
              alert("This has already been added");
            }
          }}
        />
      )}
      {currentTab === "done" && (
        <Done
          onFavePressed={(todo) => {
            if (faves.includes(todo)) {
              setFaves(faves.filter((item) => item !== todo));
            } else {
              const fav = [...faves, todo];
              setFaves(fav);
            }
          }}
          onDeletePressed={(todo) => {
            setDon(don.filter((t) => t !== todo));

            setDelet([...delet, todo]);
          }}
          faves={faves}
          don={don}
        />
      )}

      {currentTab === "favourite" && (
        <Favourite
          onDeletePressed={(todo) => {
            setFaves(faves.filter((t) => t !== todo));

            setDelet([...delet, todo]);
          }}
          faves={faves}
        />
      )}
      <Sponsor />
    </div>
  );
}

export default Home;
