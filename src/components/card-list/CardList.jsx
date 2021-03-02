import React from "react";
import Card from "../card/Card";
import "./cardList.css";

function CardList({ monsters }) {
  return (
    <div className="cardList">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
