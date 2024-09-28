import React, { useState } from 'react'

  export default function Button() {
  const[lotteryno,setlotteryno]=useState('');
   const[won,setwon]=useState('')
   function genlot(){
  const newno=Math.floor(Math.random() * 900) + 100;
  setlotteryno(newno)
  check(newno)
}
   function check(lotteryno){
    if(lotteryno){
      const sum = lotteryno.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
      //tostring convert no into string
      //split convert it into individual elements in an array['1',9,'5']
      //reduce function to add all the elements in the array
      // The 0 at the end is the initial value of the accumulator.
      /*a is initialized to 0 (the initial value)
b is the first element of the array, '1'
parseInt(a) + parseInt(b) is 0 + 1 = 1
a is updated to 1
b is the second element of the array, '9'
parseInt(a) + parseInt(b) is 1 + 9 = 10
a is updated to 10
b is the third element of the array, '5'
parseInt(a) + parseInt(b) is 10 + 5 = 15
a is updated to 15

*/
      if (sum === 15) {
        setwon('Congratulations, you won!');
      } else {
        setwon('try again');
      }
    }
   }
  return (
    <div>
      <h1>{lotteryno}</h1>
      <h2>{won}</h2>
      <button onClick={genlot}>new Lottery no</button>
    </div>
  )
}
