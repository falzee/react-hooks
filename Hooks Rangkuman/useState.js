import React, { useState } from "react";


export default function StateTutorial(){
  const [color,setColor] = useState("Black")
  const change = () => setColor("Yellow")
  return (
    <div>
    <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={change}
      >Change</button>
      </div>
  );
};
