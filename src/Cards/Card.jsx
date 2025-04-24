import React from "react";
import "./Card.css";
const Card = ({ company }) => {
  return (
    <div className="item">
      <div>
        <img src={company.logo} alt={company.name} className="" />
      </div>
      <div>
        <h3>{company.name}</h3>
        <a href={company.link}>Go to airline</a>
      </div>
    </div>
  );
};

export default Card;
