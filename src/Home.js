import React from "react";
import { useState, useContext } from "react";
import "./Home.css";
import Todo from "./Todo";
import Done from "./Done";
import Favourite from "./Favourite";
import Welcome from "./Welcome";
import Sponsor from "./Sponsor";
import { themeContext } from "./App";
import { Link } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
function Home() {
  const [currentTab, setCurrentTab] = useState("doing");
  const [toDoList, setToDoList] = useState([]);
  const [faves, setFaves] = useState([]);
  const [don, setDon] = useState([]);
  const [delet, setDelet] = useState([]);
  const theme = useContext(themeContext)
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
    <div className={(" conteaner") + (theme.darkMode === "dark" ? " conteaner-darkmode" : " ")}>
      <Link className={"icon-setting"} to="/Settings">
        {" "}
        <SettingsIcon className={"back"} color="secondary" />
      </Link>
      <p className={("text-setting") + (theme.darkMode === "dark" ? " textDarkMode" : " ")}>Setting</p>
      <div className={"list"}>
        <Welcome name="mammad" />
        <button
          className={'tab ' + (currentTab === "doing" ? "thistab " : " ") + (theme.darkMode === "dark" ? " buttonDarkMode" : " ")}
          onClick={toDo}
        >
          To Do
        </button>
        <button
          className={'tab ' + (currentTab === "done" ? "thistab " : " ") + (theme.darkMode === "dark" ? " buttonDarkMode" : " ")}
          onClick={done}
        >
          Done
        </button>
        <button
          className={'tab ' + (currentTab === "favourite" ? "thistab " : " ") + (theme.darkMode === "dark" ? " buttonDarkMode" : "  ")}
          onClick={favourite}
        >
          Favourite
        </button>
      </div>
      {currentTab === "doing" && (
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
