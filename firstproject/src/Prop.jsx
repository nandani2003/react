import "./Prop.css";
import React from 'react';
function Prop({title,desc=1,features}){
const list = features.map((feature)=><li>{feature}</li>);

return(
  <>
  <div className="Pro">
  <h3>{title }</h3>
  <h5>{desc}</h5>
  <p>{list}</p>
   {/* <p>{option2.c}</p> */}
  </div>
  </>
)

}
export default Prop;