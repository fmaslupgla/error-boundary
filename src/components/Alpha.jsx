import { useState } from "react";
import { Button } from "@mui/material";
import Bravo from "./Bravo";
import "./alpha.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./errorBoundary/Fallback";

const Alpha = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="aContainer">
      <h1>Alpha</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>
      <ErrorBoundary fallback={<Fallback />}>
        <Bravo />
      </ErrorBoundary>
    </div>
  );
};

export default Alpha;
