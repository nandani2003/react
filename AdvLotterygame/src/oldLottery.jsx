import React, { useState } from 'react'
import { genTicket,sum } from './oldHelper';
export default function Lottery() {
  let[ticket,setticket]=useState(genTicket(3));
  let isWinning=sum(ticket)===15;
  let buyticket=()=>{
    setticket(genTicket(3))
  }
  return (
    <div>
    <div>
      <h1>lottery game</h1>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
      <br /><br />
      <button onClick={buyticket}>buy new ticket</button>
    </div>
    <h3>{isWinning&&"You win"}</h3>
    </div>
  )
}
