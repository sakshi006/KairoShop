import React from "react";
import "./HorizontalCard.css";
import { useFilter } from "../../context";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ item }) => {
  const { dispatch } = useFilter();
  const navigate = useNavigate();

  const { name, img, categoryName, description } = item;
  return (
    <div
      className="cardcom white small-h"
      onClick={() => {
        navigate("/productlist");
        dispatch({ type: categoryName.toUpperCase() });
      }}
    >
      <div className="card horizontal">
        <img className="card-img" src={img} alt={categoryName} />
        <div className="product-detail">
          <p className="category">{categoryName}</p>
          <p className="name">{name}</p>
          <div className="footer">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
