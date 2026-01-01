import { useState } from "react"

function Ludo(){

  let [colors,setcolors] = useState({red:1, blue:1, yellow:1, green:1});
  let [arr,setarr] = useState(["noMoves"])

  let updateArr = () => {
    setarr([...arr,"blue"]
    )
  }

  let updateBlue = () => {
    setcolors({ ...pre, blue:pre.blue + 1}
    )
  }
  
  return (
    <div>
      <p>Game Starts</p>
      <div>
        <p>{arr}</p>
        <p>Blue : {colors.blue}</p>
        <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
        {/* <p>Red : {colors.red}</p>
        <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
        <p>Yellow : {colors.yellow}</p>
        <button onClick={updateYellow} style={{backgroundColor:"yellow" , color:"black"}}>+1</button>
        <p>Green : {colors.green}</p>
        <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button> */}
      </div>
    </div>
  )
}

export default Ludo;