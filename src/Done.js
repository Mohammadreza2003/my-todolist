import React from "react";
import { useState } from "react";
import "./Home.css";
import "./Home"
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

function Done() {
  const [faves, setFaves] = useState([]);
  const [don, setDon] = useState([]);
  const [currentTab, setCurrentTab] = useState("doing");
  const [delet, setDelet] = useState([]);
  const done = () => {
    setCurrentTab("done");
  };
  let donee = " Number of dones" + " :" + " " + don.length;
  return (
    <>
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
                color="secondary"
                onClick={() => {
                  setDon(don.filter((t) => t !== todo));

                  setDelet([...delet, todo]);
                }}
              ></DeleteIcon>
              <p>{donee}</p>
            </div>
          ))}
      </div>
    </>
  );
}

export default Done;
