import { useState } from "react";
import { Button } from "@mui/material";
import CharlieJr from "./CharlieJr";
import "./charlie.css"

const Charlie = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="cContainer">
      <h1>Charlie</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>Haz algo</Button>
      <CharlieJr />
    </div>
  );
};

export default Charlie;