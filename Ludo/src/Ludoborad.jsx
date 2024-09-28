import React from 'react'
import { useState } from 'react'

export default function Ludoborad() {
const[moves,setmoves]=useState({ blue: 0,red:0,yellow:0,green:0})
let[arr,setarr]=useState([0]);
let updateblue=()=>{
  // moves.blue+=1;
  setmoves((prevmove)=>{
    return{...moves,blue:moves.blue+1};
})
// arr.push("blue move");
setarr((prevarr)=>{
  return[...prevarr,"blue moves"]});
console.log(arr);
}

let updateyellow=()=>{
  // moves.blue+=1;
  setmoves((prevmove)=>{
    return{...moves,yellow:moves.yellow+1};
})
}

let updatered=()=>{
  // moves.blue+=1;
  setmoves((prevmove)=>{
    return{...moves,red:moves.red+1};
})
}
let updategreen=()=>{
  // moves.blue+=1;
  setmoves((prevmove)=>{
    return{...moves,green:moves.green+1};
    //obj ki key ki value change nhi hoti isliye copy ko bhejti h 
})
}

  return (
    <div>
      <p>game begins</p>
      <p>{arr}</p>
      <div className="board">
<p>Blue moves={moves.blue}</p>
<button style={{backgroundColor:"blue"}} onClick={updateblue}>+1</button>
<p>Yellow moves={moves.yellow}</p>
<button style={{backgroundColor:"yellow"}} onClick={updateyellow}>+1</button>
<p>Green moves={moves.green}</p>
<button style={{backgroundColor:"green"}}onClick={updategreen}>+1</button>
<p>Red moves={moves.red}</p>
<button style={{backgroundColor:"red"}}onClick={updatered}>+1</button>
      </div>
    </div>
  )
}
