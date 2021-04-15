import React from 'react';
import { useState } from 'react';
import './app.css';
import { Checkbox } from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';


function App() {
  const [newDotext,setnewDotext]=useState("");
const [toDoList,setToDoList]=useState([])
  const addDo=()=>{
    const newList = [...toDoList, newDotext];
    setToDoList(newList);
    if(!newDotext) 
    alert("Write something")
  }
  
  
  const onchangevalue=(e)=>{
    const value =e.target.value;
    setnewDotext(value)
  }
 
  
  return (
    <div  className={"conteaner"}> 
    <div className ={"list"}>
    <list className={"li"}>To Do</list>
      <list className={"li"}>Favourite</list>
      <list className={"li"}>Done</list>
    </div>
    <div className={"list"}>
      <input onChange={onchangevalue} className={"input"}></input>
      <Button variant="contained" color="secondary" className ={"btn"}  onClick={addDo}>
        add
        </Button>
    {toDoList.map(item=>
       <div className={"task"}>
      {item}
      <Checkbox className={"check"} color="secondary"></Checkbox> 
      <FavoriteBorder className={"favorite"} color="secondary"></FavoriteBorder>
      </div>
      )} 
    </div>
    </div>
  );
}

export default App;
