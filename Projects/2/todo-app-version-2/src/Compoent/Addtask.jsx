import { useState } from "react";

function Apptask({onNewitem}){
const[todoname,settodoname]=useState("");
const[duedate,setduedate]=useState("");
let addchange=(event)=>{
  settodoname(event.target.value);
}

let addonchange =(event)=>{
  setduedate(event.target.value);
}
const handleaddbtnclick=()=>{
  onNewitem(todoname,duedate);
}

  return (
    <div className="container ">
    <div className="row my-row">
      <div className="col-6">
        <input type="text" placeholder="Enter your task here"value={todoname} name={todoname}onChange={addchange}/>
      </div>
      <div className="col-4">
        <input type="date" value={duedate} name={duedate} onChange={addonchange} />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success my-btn" onClick={handleaddbtnclick}>
          <BiMessageAdd/>
        </button>
      </div>
  </div>
  </div>
  );
}export default Apptask;