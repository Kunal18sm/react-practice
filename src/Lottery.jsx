import { useState } from "react";




function randomNum(n) {
  let arr = [];
  for(let i=0; i<n; i++){
    arr[i] = Math.floor(Math.random() * 9);
  }
  return arr ;
}

function Lottery() {
  let [num , setnum] = useState([0,0,0]);

  let makeLottery = ()=>{
    setnum(randomNum(3))
    
  }
  return (

    <>
      <h1>Lottery</h1>
      <span style={{display:"flex", justifyContent:"center"}}>
        {
          num.map((n)=>{
            return <h1>{n}</h1>
          })
        }
      </span>
      <button onClick={makeLottery}>create ticket</button>
    </>
  )
}

export default Lottery;