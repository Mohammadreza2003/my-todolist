import React from "react";
import "./Home.css";
import "./Home";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

function Done(props) {
  let donee = " Number of dones" + " :" + " " + props.don.length;
  return (
    <>
      <div className={"list"}>
        <list>Done</list>

        {props.don.map((todo) => (
          <div className={"task"}>
            {todo}

            {props.faves.includes(todo) ? (
              <FavoriteIcon
                className={"favoritetwo"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteIcon>
            ) : (
              <FavoriteBorder
                className={"favoritetwo"}
                color="secondary"
                onClick={() => {
                  props.onFavePressed(todo);
                }}
              ></FavoriteBorder>
            )}
            <DeleteIcon
              className={"dele"}
              color="secondary"
              onClick={() => {
                props.onDeletePressed(todo);
              }}
            ></DeleteIcon>
          </div>
        ))}
         <p>{donee}</p>
      </div>

     
    </>
  );
}

export default Done;
