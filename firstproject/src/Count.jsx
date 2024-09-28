import React from 'react'
import { useState } from 'react'

export default function Count() {
 let[Count,setCount]=useState(0);
 let inCount=()=>{
   setCount(Count+1);
   console.log(Count);
 }
 
  
  return (
    <div>
      <h1>Count={Count}</h1>
      <button onClick={inCount}> increaseCount</button>
    </div>
 
  )
}
