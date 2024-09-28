import React from 'react'
import styles from './Foodinput.module.css'
export default function Foodinput({handleonchange}) {
  return (
    <div>
      <input type="text" className={styles.foodInput} placeholder='enter fooditem here' onChange={handleonchange}/>
    </div>
  )
}
