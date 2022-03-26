import React from "react";
import "./HorizontalCard.css";

const HorizontalCard = ({ item }) => {
  const { name, img, category, description } = item;
  return (
    <div className="cardcom white small-h">
      <div className="card horizontal">
        <img className="card-img" src={img} alt={category} />
        <div className="product-detail">
          <p className="category">{category}</p>
          <p className="name">{name}</p>
          <div className="footer">{description}</div>
        </div> 
      </div>
    </div>
  );
};

export default HorizontalCard;
