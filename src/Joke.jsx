import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


import { useEffect, useState } from "react";

export default function Joke() {

  let jokeURL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState("");

  const getJoke = async () => {
    let response = await fetch(jokeURL);
    let jsonRes = await response.json();
    console.log(jsonRes);
    setJoke(jsonRes.setup);
  }

  useEffect(() => { getJoke() }, [])


  let makeJoke = () => {
    getJoke();
  }

  return (
    <>
      <h2>Joke : {joke}</h2>
      <button onClick={makeJoke}>Make</button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </>
  )
}