import React from'react'
import { useEffect } from 'react';

const Navbar=({color})=>
  {
   //run on first render 
useEffect(()=>{
  alert("hey run on first render")
  },[])
  //run on every render 
  useEffect(()=>{
    alert("hey run on  every render")
    })
  //run on certain value change
  useEffect(()=>{
  alert("color is changed")
  },[color])
  useEffect(()=>{
    alert("hey welcome")
    return()=>{
      alert("hey compononent is unmounted")}
  },[])
  return (<div>
    Hello I am Navbar and my color is {color}
  </div>)
}
export default Navbar;