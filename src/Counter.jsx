import { useState , useEffect } from "react"

function Counter(){
  
  let [count,setCount] = useState(0);
  let [countx,setCountx] = useState(0);

  let increaseCount = ()=>{
    setCount(count+1);
  }
  let increaseCountx = ()=>{
    setCountx(countx+1);
  }

  useEffect(()=>{
    console.log("Aa gaya re bidu");
  },[countx])

  return (
    <>
    <h1>Count : {count}</h1>
    <button onClick={increaseCount}>+1</button>
    <br />
    <h1>Count : {countx}</h1>
    <button onClick={increaseCountx}>+1</button>
    </>
  )
}

export default Counter;