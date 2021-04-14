import { Checkbox } from '@material-ui/core';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import { useState } from 'react';
import './app.css';

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
      <input onChange={onchangevalue}></input>
      <button className={"btn"}onClick={addDo}>add</button>
      
    {toDoList.map(item=> <div className={"task"}>{item}</div>)} 
    <Checkbox className={"check"}></Checkbox> 
    <FavoriteBorder className={"favorite"}></FavoriteBorder>

    </div>
    </div>
  );
}

export default App;
