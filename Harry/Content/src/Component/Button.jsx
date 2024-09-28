import React from 'react'
import Component1 from './Component1'
import { counterContext } from './Global/Globalcontext';
import { useContext } from 'react';
export default function Button() {
  const value=useContext(counterContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}><span> <Component1></Component1></span>click</button>
     
    </div>
  )
}
