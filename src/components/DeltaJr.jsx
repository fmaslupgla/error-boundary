import { useState } from "react";
import { Button } from "@mui/material";
import './deltajr.css'

const DeltaJr = () => {
  const [counter, setCounter] = useState(0);
  if (counter === 3) throw new Error("Código 43");

  return (
      <div className="djContainer">
        <h1>Delta jr</h1>
        <h4> {counter}</h4>

        <Button variant="contained" onClick={() => setCounter(counter + 1)}>Haz algo</Button>
      </div>
  );
};

export default DeltaJr;