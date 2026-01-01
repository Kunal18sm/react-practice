import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';



export default function Weather() {
  let [cityName, setCityname] = useState("");

  let handleInput = (event) => {
    setCityname(event.target.value);
  }

  let handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(cityName);
    setCityname("");

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
    </>
  )
}