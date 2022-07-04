import React from "react";
import RickCard from "../../components/case3/RickCard";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/errorBoundary/ErrorFallback";
import "./case3.css";

const Case3 = () => {
  return (
    <div className="caseContainer">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <RickCard />
      </ErrorBoundary>
    </div>
  );
};

export default Case3;
