import React, { useState } from 'react'

export default function CommentsForm() {
  let [formdata,setformdata]=useState({username:"",remarks:"",rating:5})
let handleinputchange=(event)=>{
  setformdata((formdata)=>
    {return{...formdata,[event.target.name]:event.target.value};})
}
let submit=(event)=>{
  console.log(formdata)
  event.preventDefault()
  setformdata({username:"",remarks:"",rating:5})
}
  return (
    <div>
      <h2>give me comments</h2>
      <form onSubmit={submit}>
        <label htmlfor='username'> username:</label>
    <input type="text" placeholder='username'name='username'value={formdata.username}onChange={handleinputchange}/><br /><br />
    <label htmlfor='remarks'> remarks:</label>
<textarea value={formdata.remarks}name='remarks'placeholder='add few remarks'onChange={handleinputchange}>remarks</textarea><br /><br />
<label htmlfor='rating'> rating:</label>
<input type="number"placeholder='rating'name='rating' min={1}max={5} value={formdata.rating}onChange={handleinputchange}/><br /><br />
<button >Add comments</button>
      </form>
    </div>
  )
}
