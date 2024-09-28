import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./ButtonsContainer";
import Display from "./Display";
function App() {
  let [calVal,setcalval]=useState("");
  const onclickbtn=(ButtonsName)=>{
  if(ButtonsName==="C"){
setcalval("")
  }
  else if(ButtonsName==="="){
  const result=eval(calVal);
  setcalval(result)

  }
  else{
    const newDisplayvalue=calVal+ButtonsName;
    setcalval(newDisplayvalue);
  }



    console.log(ButtonsName)}
  return (
    <div className={styles.calculator }>
     <Display displayValue={calVal} readonly></Display>
   <ButtonsContainer onclickbtn={onclickbtn
   }></ButtonsContainer>
    </div>
  )
}

export default App;
