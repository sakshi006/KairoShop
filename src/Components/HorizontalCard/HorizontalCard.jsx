import React from "react";
import "./HorizontalCard.css";

const HorizontalCard = ({ item }) => {
  const { name, img, category, description } = item;
  return (
    <div className="cardcom white">
      <div className="card horizontal">
        <img className="card-img" src={img} alt={category} />
        <div className="product-detail">
          <h3>{category}</h3>
          <h2>{name}</h2>
          <div className="footer">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
