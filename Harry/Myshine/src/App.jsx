import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setshowbtn] = useState(false);
  const [todos, setTodos] = useState([
    {  id:0,title: "hey", desc: "i am good" },
    {
      id:1,
      title: "hello",
      desc: "what abt u",
    },
    { id:2,
      title: "nice",
      desc: "i am also good",
    },
  ]);
  const Todo  = ({ todo }) => {
    return (
      <>
     <div> 
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    );
  };

  //small componet that you don't want to make in component folder
  // const Todo=()=>{
  //   return(
  //     <>
  //     <div className='todo'>I am todo</div></>
  //   )
  // }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* only true k liye */}
      {/* {showbtn&&<button>it is clicked by another</button>} */}
      {showbtn ? (
        <button>my value is true</button>
      ) : (
        <button>my value is false</button>
      )}
      {todos.map((todo) => {
        return <Todo key={todo.id}todo={todo} />;
      })}
      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
