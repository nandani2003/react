import React, { useEffect, useState } from 'react'

export default function Joker() {
  let[joke,setjoke]=useState({})
  const URL="https://official-joke-api.appspot.com/random_joke"
  const getnewjoke=async()=>{
    let repose=await fetch(URL);
    let jsonResponse=await repose.json();
    console.log(jsonResponse);
    setjoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
  }
  useEffect(()=>{async function getfirstjoke() {
    let repose=await fetch(URL);
    let jsonResponse=await repose.json();
    console.log(jsonResponse);
    setjoke({setup:jsonResponse.setup,punchline:jsonResponse.punchline})
  }
  getfirstjoke();
  },[])
  return (
    <div>
      <h4>jokes</h4>
      <h2>{joke.setup}</h2>
      <h3>{joke.punchline}</h3>
      <button onClick={getnewjoke}>newjoke</button>
    </div>
  )
}
