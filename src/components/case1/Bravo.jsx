import { useState } from "react";
import { Button } from "@mui/material";
import Charlie from "./Charlie";
import Delta from "./Delta";
import "./bravo.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../errorBoundary/Fallback";

const Bravo = () => {
  const [counter, setCounter] = useState(0);
  if (counter === 3) throw new Error("Código 43");

  return (
    <div className="bContainer">
      <h1>Bravo</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>

      <div className="secondContainer">
        <ErrorBoundary fallback={<Fallback />}>
          <Charlie />
        </ErrorBoundary>

        <Delta />
      </div>
    </div>
  );
};

export default Bravo;
