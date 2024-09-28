import React from 'react'
import SearchBox from './SearchBox'
import Infobox from './Infobox'
import { useState } from 'react'

export default function Wheather() {
  const[weatherInfo,setWeatherinfo]=useState({
    city:"Delhi",
    feels_like: 298.01,
    humidity: 88,
    temp: 297.25,
    tempMax: 297.25,
    tempMin: 297.25,
    weather: "haze",
  })
  let updateinfo=(newinfo)=>{
    setWeatherinfo(newinfo);
  }
  return (
    <div>
      <h3>wheather App by Nandani</h3>
      <SearchBox updateinfo={updateinfo} ></SearchBox>
<Infobox info={weatherInfo}></Infobox>
    </div>
  )
}
