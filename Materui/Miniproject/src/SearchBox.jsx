import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function SearchBox({updateinfo}) {
   let [city,setCity]=useState("");
   let[error,seterror]=useState(false);
  const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const  API_KEY="f8af24812d553244dc8fffc001f03e6b " ;
   let getWheatherInfo=async()=>{
    try{
      let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
   let jsonResponse=await response.json();
   let result={
    city:city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax:jsonResponse.main.temp_max,
    humidity:jsonResponse.main.humidity,
    feels_like:jsonResponse.main.feels_like,
    weather:jsonResponse.weather[0].description,
   };
   console.log(result);
   return result;
   }catch(err){
    throw err;
   }
    }
  let handlechange=(evt)=>{
    setCity(evt.target.value);
  }
  let handlesubmit=async(evt)=>{
    try{
      evt.preventDefault();
    console.log(city);
    setCity("")
    let newinfo=await getWheatherInfo();
    updateinfo(newinfo);
    }
    catch(err){
      seterror(true);
    }  
  };
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  return (
    <div>
      <form onSubmit={handlesubmit}>
    <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
    <br /><br />
    <Button variant="contained" type='submit'>Search</Button>
    {error && <p style={{color:"red"}}>no such place exist in our db</p> }
    </form>
    <br />
    </div>
    
  )
}
