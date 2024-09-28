import React, { useState } from 'react'

export default function Form() {
let [formdata,setformdata]=useState({fullname:"",email:"",contactno:""})
  let handleinputchange=(event)=>{
  setformdata((formdata)=>{
   return{...formdata,[event.target.name]:event.target.value};
  })
  }
  let submithandle=(event)=>
  {
    event.preventDefault()
    console.log(formdata)
    setformdata({fullname:"",email:"",contactno:""})
  }
  return (
    <div>
      <form onSubmit={submithandle} >
        <label htmlFor="fullname">Full name</label>
        <input type='text' value={formdata.fullname} onChange={handleinputchange} id='fullname' name='fullname'></input>
        <br></br>
        <label htmlFor="email">email</label>
        <input type='email' value={formdata.email} onChange={handleinputchange} id='email'name='email'></input>
        <br />
        <label htmlFor="contactno">contact</label>
        <input type='number' value={formdata.contactno} onChange={handleinputchange} id='contactno'name='contactno'></input>
<button type='submit'>Submit</button>
      </form>
    </div>
  )
}
