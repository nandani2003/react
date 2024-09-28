import {React,useState} from 'react'
import Ticket from './Ticket';
import { genTicket,sum } from './oldHelper';
import Button from './Button';
export default function Lottery({num,wincon}) {
  
  let[ticket,setticket]=useState(genTicket(num));
  let isWinning=wincon(ticket);
  let buyticket=()=>{
    setticket(genTicket(num))
  }
 return (
    <div>
    <div>
    <div>
      <h1>lottery game</h1>
      <Ticket ticket={ticket}/>
     <Button action={buyticket}></Button>
    </div>
    <h3>{isWinning&&"You win"}</h3>
 </div>
    </div>
  )
}
