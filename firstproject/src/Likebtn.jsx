import React, { useState } from 'react'

export default function Likebtn() {
 let[isliked,setisliked]=useState(false);
  let togglelike=()=>{
     setisliked(!isliked);
  };
   
  
  return (
    <div>
      <h1>states in react</h1>
      <p onClick={togglelike}>
        {isliked ? (
          <i className="fa fa-heart" aria-hidden="true"></i>
        ):(<i className="fa-regular fa-heart" ></i>)}</p>
    </div>
  );
}
