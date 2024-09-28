import Todoitem from "./Task";
import "./Todoitems.css";
const Todoitems=({todoitems,ondeleteClick})=>{
return <div className="todo_item"> 
{todoitems.map(item => <Todoitem key={item.duedate}tododate={item.duedate} todoname={item.todoname} ondeleteClick={ondeleteClick}></Todoitem>)}

  </div>;
};export default Todoitems;