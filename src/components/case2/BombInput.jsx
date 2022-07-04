import React, { useState, useRef } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../errorBoundary/ErrorFallback";
import "./bombInput.css";
import { TextField } from "@mui/material";

const BombInput = () => {
  const [username, setUsername] = useState("");
  const usernameRef = useRef(null);

  const Bomb = ({ username }) => {
    if (username === "bomb") {
      throw new Error("💥 CABOOM 💥");
    }
    return <h3>Hello {username}</h3>;
  };

  const resetUserHandler = () => {
    setUsername("");
    usernameRef.current.focus();
  };

  return (
    <div className="bombContainer">
      <div className="inputContainer">
        <h1> Username: </h1>
        <TextField
          variant="filled"
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </div>

      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={resetUserHandler}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default BombInput;
