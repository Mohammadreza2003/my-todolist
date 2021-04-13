import { useState } from 'react';
import './app.css';

function App() {
  const [newDotext,setnewDotext]=useState("");
const [toDoList,setToDoList]=useState([])
  const addDo=()=>{
   if(!newDotext) 
   alert("Write something")
  }
  const onchangevalue=(e)=>{
    const value =e.target.value;
    setnewDotext(value)
  }
const add=()=>{
  setToDoList([...toDoList,{
addDo:onchangevalue,
isDone:false,
isSelected:false
  }])
}
  const isDone=()=>{

  }
  const isSelected=()=>{

  }
  return (
    <div  className={"conteaner"}> 
    <div className ={"list"}>
    <list className={"li"}>To Do</list>
      <list className={"li"}>Selected</list>
      <list className={"li"}>Done</list>
    </div>
    <div className={"list"}>
      <input onChange={onchangevalue}></input>
      <button className={"btn"}onClick={addDo}>add</button>
      <div className={"task"}>
       
       
      </div>
    </div>
    </div>
  );
}

export default App;
