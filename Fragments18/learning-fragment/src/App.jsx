import'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import FoodItems from './components/Fooditem';
import Errormsg from './Errormsg';
import './Design.css';
import Container from './components/Container';
import Foodinput from './components/Foodinput';
// let listitem=[];
let listitem=['Dokha','Green vegetable','Roti','Salad','Diary products','gramflour']
function App() {
  const handleonchange=(e)=>console.log(e.target.value);
return (
  <>
<Container><h1 className='Heading'>Healthy Food</h1>
{/* 1.if-else2.{listitem.length===0?<h3>i m hungry</h3>:null} 3.
listitem.length===0 && <h3>I am hungry</h3>
}*/} 
<Foodinput handleonchange={handleonchange}></Foodinput>
<Errormsg items={listitem}></Errormsg>
<FoodItems items={listitem}></FoodItems>
</Container>
{/* <Container><p>above is the list
   of Healthy food that are good for your health</p></Container> */}
</>);
}
export default App;
