import { useState } from "react";
import DeltaJr from "./DeltaJr";
import { Button } from "@mui/material";
import "./delta.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "../errorBoundary/Fallback";

const Delta = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="dContainer">
      <h1>Delta</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>
      <ErrorBoundary fallback={<Fallback />}>
        <DeltaJr />
      </ErrorBoundary>
    </div>
  );
};

export default Delta;
