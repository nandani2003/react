import React, { useState,useEffect } from 'react'

export default function Counter() {
let[countx,setcountx]=useState(0)
let[county,setcounty]=useState(0)
useEffect(function printsomething()  {
  console.log('your count is inc by +1')
},[]) 

  let countincx=()=>{
setcountx(countx+=1)
  }
  let countincy=()=>{
    setcounty(county+=1)
      }
  return (
    <div>
      <h4>countx={countx}
        <button onClick={countincx}>increase</button></h4>
        <h4>county={county}
        <button onClick={countincy}>increase</button></h4>
    </div>
  )
}
