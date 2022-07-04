import React, { useEffect, useState } from "react";
import { Avatar } from "@mui/material";
import "./rickCard.css";
import { useErrorHandler } from "react-error-boundary";

const RickCard = () => {
  const [data, setData] = useState([]);
  const handleError = useErrorHandler();
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch(handleError);
  }, []);

  return (
    <div className="rickContainer">
      <Avatar
        alt="Remy Sharp"
        src={data.image}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{data.name}</h3>
      <h4>{data.species}</h4>
      <h4>{data.status}</h4>
    </div>
  );
};

export default RickCard;
