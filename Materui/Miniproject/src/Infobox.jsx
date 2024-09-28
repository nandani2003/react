import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function Infobox({info}) {
  const HOT_URL="https://images.unsplash.com/photo-1607705037821-360766282118?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  const COLD_URL="https://images.unsplash.com/photo-1631205870679-9946c2265a96?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL="https://images.unsplash.com/photo-1567367975896-5a54e8542ddb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="Infobox">
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>150?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80?<ThunderstormIcon/>:info.temp>150?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary"component="span">
         <p>Temperature={info.temp}&deg;C </p>
         <p>Humidity={info.humidity}&deg;C</p>
         <p>Min Temp={info.tempMin}&deg;C</p>
         <p>Max Temp={info.tempMax}&deg;C</p>
         <p>The weather can be described as <i>{info.weather}</i> and feels like={info.feels_like
         }&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
