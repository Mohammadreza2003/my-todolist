import React from "react";
import { useState } from "react";
import "./Home.css";
import "./Home";
import DeleteIcon from "@material-ui/icons/Delete";

function Favourite() {
  const [faves, setFaves] = useState([]);
  const [currentTab, setCurrentTab] = useState("doing");
  const [delet, setDelet] = useState([]);
  const favourite = () => {
    setCurrentTab("favourite");
  };
  let fave = " Number of favorites" + " :" + " " + faves.length;
  return (
    <>
      {currentTab === "favourite" && (
        <div className={"list"}>
          <list>Favourite</list>
          {faves.map((todo) => (
            <div className={"task"}>
              {todo}
              <DeleteIcon
                className={"dele"}
                color="secondary"
                onClick={() => {
                  setFaves(faves.filter((t) => t !== todo));

                  setDelet([...delet, todo]);
                }}
              ></DeleteIcon>
            </div>
          ))}
        </div>
      )}
      <p>{fave}</p>
    </>
  );
}

export default Favourite;
