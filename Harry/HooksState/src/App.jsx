import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [color, setcolor ] = useState(1)

//run on certain value change
useEffect(()=>{
alert("count is changed")
setcolor(color+1)
},[count])

  return (
    <>
  {/* <Navbar color={"blue"+color} ></Navbar> */}
      <div>
        The count is{count}
       </div>
       <button onClick={()=>{
        setCount(count+1)
       }}>update count</button>

    </>
  )
}

export default App;
