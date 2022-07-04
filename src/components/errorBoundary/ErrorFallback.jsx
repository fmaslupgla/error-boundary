import React from "react";
import Button from "@mui/material/Button";
import "./errorFallback.css";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  const logError = () => {
    console.log({error});
  };
  return (
    <div className="errorContainer" role="alert">
      {logError()}
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <Button
        style={{ backgroundColor: "red" }}
        variant="outline"
        onClick={resetErrorBoundary}
      >
        {" "}
        Intentar de nuevo
      </Button>
    </div>
  );
};

export default ErrorFallback;
