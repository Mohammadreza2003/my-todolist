import React from "react";
import { useState } from "react";
import "./Home.css";
import "./Home.js";
import DeleteIcon from "@material-ui/icons/Delete";

function Favourite(props) {
  
  
  let fave = " Number of favorites" + " :" + " " + props.faves.length;
  return (
    <>
      
        <div className={"list"}>
          <list>Favourite</list>
          {props.faves.map((todo) => (
            <div className={"task"}>
              {todo}
              <DeleteIcon
                className={"dele"}
                color="secondary"
                onClick={() => {
                  props.onDeletePressed(todo);
                }}
              ></DeleteIcon>
            </div>
          ))}
          <p>{fave}</p>
        </div>
      
      
    </>
  );
}

export default Favourite;
