import React from 'react'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
export default function Todolist() {
  const[todos,settodos]=useState([{task:" sample" ,id:uuidv4(),isDone:false}]);
  const [newTodo, setNewTodo] = useState("");
  let updatelist=()=>{
settodos((prevtodo)=>{return[...prevtodo,{task:newTodo,id:uuidv4(),isDone:false}]});
setNewTodo("");
  }

  let deletetask=(id)=>{
   settodos((prevtodo)=>todos.filter((prevtodo)=>prevtodo.id!=id));
  } 
  let uppercase=(id)=>{
    // console.log(id);
    settodos((p)=>todos.map((todo)=>{
      if(todo.id==id){
         return{
       ...todo,
       task:todo.task.toUpperCase(),
      };
      }
     else{
      return todo;
     }
     }));}

  let markAsDone=(id)=>{
    // console.log(id);
    settodos((p)=>todos.map((todo)=>{
      if(todo.id==id){
         return{
       ...todo,
      isDone:true,
      };
      }
     else{
      return todo;
     }
     }));}

  return (
    <div>
      <input type="text"placeholder='add a task'value={newTodo}onChange={(e)=>{
     setNewTodo(e.target.value);
      }}/>
      <button onClick={updatelist}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <h6>Tasks needed to be done</h6>
      <ul>
       {
        todos.map((todo)=>(
          <li key={todo.id}>
            <span style={todo.isDone?{textDecoration:"line-through"}:{}}>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>deletetask(todo.id)}>delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={()=>uppercase(todo.id)}>Uppercase</button>
            <button onClick={()=>markAsDone(todo.id)}>task done</button>
            </li>
        ))
    
       }
      </ul>
{/* <button onClick={function upercase(){
settodos((p)=>todos.map((todo)=>{
 return{
  ...todo,
  task:todo.task.toUpperCase(),
 };
}));

}}>Upercase All</button> */}
<button onClick={function markalldone(){
settodos((p)=>todos.map((todo)=>{
 return{
  ...todo,
  isDone:true,
 };
}));

}}>Mark all done</button>
    </div>
  )
}
