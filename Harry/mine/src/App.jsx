import {React,useEffect,useState} from 'react'
import "./Styles.css"
import Navbar from './Nav';
function App(){
 const[cards,setcards] =useState([]);

  const data=async()=>{
  let a=await fetch("https://jsonplaceholder.typicode.com/posts");
  let data=await a.json();
  setcards(data);
  console.log(data)
 }
 useEffect(()=>{
  data();
 },[])
return(<>
  <Navbar></Navbar>
<div className='container'>
{cards.map ((card)=>{
  return <div key={card.id} className='card'>
    <h1>{card.title}</h1>
    <p>{card.body}</p>
    <span>By:Useerid:{card.userId}</span>
</div>
})}
</div>
</>
);
}
export default App;