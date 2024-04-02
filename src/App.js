import React, { useState } from "react";
import './App.css'

const Counter = () =>{
  const [cnt, Setcnt] = useState(0);
  console.log(cnt);

  return(
    <>
      
      <div className="box">
      <button onClick={()=> Setcnt(cnt + 1)}>+</button>
      <span>{cnt}</span>
      <button onClick={()=> (cnt > 0 ? Setcnt(cnt - 1) :"")}>-</button>
      </div>
      <div className="ReSet">
            <button onClick={()=> Setcnt(0)}>Reset</button>
      </div>

    </>
  )
}

export default Counter;
