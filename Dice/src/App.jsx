import React from "react";  
import Landing from "./components/Landing.jsx"
import Game from "./components/Game.jsx"
import { useState } from "react";
function App(){
  const[play,setplay]=useState(false);
    const toggle=()=>{
        setplay((prev)=>!prev);
    };
  return (
    <div>
     {play?<Game/>:<Landing  Clicked={toggle}/>}
    </div>
  )
}
export default App;