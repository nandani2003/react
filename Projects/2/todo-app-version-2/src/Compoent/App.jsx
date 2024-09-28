import Appname from "./Appname";
import Apptask from "./Addtask";
import Todoitems from "./Todoitems";
import Welcome from "./Welcome";
import './App.css';
import { useState } from "react";
function App() {

let[todoitems,settodoitems]=useState([])
let onNewitem=(todoname,duedate)=>{
  settodoitems([...todoitems, { todoname: todoname, duedate: duedate }])
}
const handledeleteitem=(tododate)=>{
const newTodoitems=todoitems.filter(item=>item.duedate!==tododate);
settodoitems(newTodoitems);

}

  return (
    <center className="todo-container">
     <Appname/>
<Apptask onNewitem={onNewitem}></Apptask>
{todoitems.length===0&&<Welcome ></Welcome>}
<Todoitems todoitems={todoitems}ondeleteClick={handledeleteitem}></Todoitems>
   </center>
  );
}
export default App;
