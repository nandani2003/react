import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [name, setname] = useState("Harry")
  // const handle=(e)=>{
  //   setname(e.target.value)
  // }


  const[form,setform]=useState({name: "",phone:""})
  const handlechange=(e)=>{
    setform({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div>
        <button onClick={()=>{
          alert("clicked")
        }}>button</button></div>
        <div className='red'onMouseOver={()=>{
          alert("mouseove")
        }}>
        hello
    </div>
    {/* <input type="text" value={name} onChange={handle} /> */}
    <input type="text" name="name" value={form.name?form.name:""} onChange={handlechange} />
    <input type="number" name="phone" value={form.phone?form.phone:""} onChange={handlechange}/>
    </>
  )
}

export default App
