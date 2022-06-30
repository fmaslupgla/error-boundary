import { useState } from "react";
import { Button } from "@mui/material";
import Charlie from "./Charlie";
import Delta from "./Delta";
import './bravo.css'

const Bravo = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="bContainer">
      <h1>Bravo</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>Haz algo</Button>

      <div className="secondContainer">
        <Charlie />

        <Delta />
      </div>
    </div>
  );
};

export default Bravo;