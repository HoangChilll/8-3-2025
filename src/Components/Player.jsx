import { useState } from "react";

export default function Player(){
   const [playerName,setPlayerName]=useState(null);
   const [sumitted,setSumitted]=useState(false);
   function handleChange(event){
    setSumitted(false);
    setPlayerName(event.target.value);
   }
   function handleClick(){
    setSumitted(true);
   }
   return(
   <section id="player">
   <h2>WELCOME {sumitted ?playerName:""}</h2>
   <div>
   <input type="text" value={playerName} onChange={handleChange}></input>
   <button onClick={handleClick}>set name</button>
   </div>
   </section>
   )
}