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
      <Todo />
      <Done />
      <Favourite />
      <Sponsor />
    </div>
  );
}

export default Home;
