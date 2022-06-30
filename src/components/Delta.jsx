import { useState } from "react";
import DeltaJr from "./DeltaJr";
import { Button } from "@mui/material";
import './delta.css'

const Delta = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="dContainer">
      <h1>Delta</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>Haz algo</Button>

      <DeltaJr />
    </div>
  );
};

export default Delta;