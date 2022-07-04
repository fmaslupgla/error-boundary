import { useState } from "react";
import { Button } from "@mui/material";
import Bravo from "./Bravo";
import "./alpha.css";
import { ErrorBoundary } from "react-error-boundary";

const Alpha = () => {
  const [counter, setCounter] = useState(0);

  const resetComponentState = () => {
    setCounter(0);
  };

  return (
    <div className="aContainer">
      <h1>Alpha</h1>
      <h4> {counter}</h4>

      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Click
      </Button>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => (
          <div
            style={{ display: "flex", flexDirection: "column" }}
            role="alert"
          >
            <div>Oh no</div>
            <span>{error.message}</span>
            <button
              onClick={() => {
                // this next line is why the fallbackRender is useful
                resetComponentState();
                // though you could accomplish this with a combination
                // of the FallbackCallback and onReset props as well.
                resetErrorBoundary();
              }}
            >
              Try again
            </button>
          </div>
        )}
      >
        <Bravo />
      </ErrorBoundary>
    </div>
  );
};

export default Alpha;
