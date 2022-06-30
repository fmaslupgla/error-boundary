import { useState } from "react";
import { Button } from "@mui/material";
import "./charlieJr.css"

const CharlieJr = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="cjContainer">
      <h1>Charlie jr</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>Haz algo</Button>
    </div>
  );
};

export default CharlieJr;