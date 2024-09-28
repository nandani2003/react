function Random(){
  let myrandom=Math.random()*100;
  return <h1 style={{'background-color':'#776691'}}>your num is {Math.round(myrandom)}</h1>
}export default Random;