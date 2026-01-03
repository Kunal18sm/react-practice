import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Weather() {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather"
  const API_KEY = import.meta.env.VITE_API_KEY ;
  const IMG_URL = import.meta.env.VITE_IMG_URL || "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let [weatherInfo,setWeatherInfo] = useState({
    city:"",
    humidity:"",
    pressure:"",
    temp:"",
    tempMax:"",
    tempMin:"",
    weather:""
  });

  let [error,setError] = useState(false);
  let [cityName, setCityname] = useState("");

  

  let updateWeatherInfo = (info) =>{
    setWeatherInfo(info);
  }

  let getWeatherInfo = async () => {
    try{
      let res = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
      let jsonResponse = await res.json();
      console.log(jsonResponse);
      let result = {
        city:cityName,
        humidity: jsonResponse.main.humidity,
        pressure: jsonResponse.main.pressure,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      }
      console.log(result);
      setError(false);
      updateWeatherInfo(result);
    } catch(err){
      setError(true);
    }
  }

  let handleInput = (event) => {
    setCityname(event.target.value);
  }

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(cityName);
    setCityname("");
    getWeatherInfo();
  }

  return (
    <>
      <h2> Search for Weather </h2>
      <form onSubmit={handleSubmit}>
        <TextField
          id="filled-search"
          label="City Name"
          type="search"
          variant="filled"
          value={cityName}
          onChange={handleInput}
        />
        <br />
        <br />
        <button type='submit' >Search</button>
      </form>

      <p>searching for {cityName}</p>
      {error ? <p style={{color:"red"}}>City not Found</p> : <p></p>}


      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={IMG_URL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {cityName}
          </Typography>
          <p>City : {weatherInfo.city}</p>
          <p>Temperature : {weatherInfo.temp}&deg;C</p>
          <p>humidity : {weatherInfo.humidity}</p>
          <p>pressure : {weatherInfo.pressure}</p>
          <p>weather : {weatherInfo.weather}</p>
        
          {/* <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography> */}
        </CardContent>
      
      </Card>
    </>
  )
}