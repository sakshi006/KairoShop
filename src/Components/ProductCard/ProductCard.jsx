import React from "react";
import "./ProductCard.css";

import { AiTwotoneStar } from "react-icons/ai";

const ProductCard = ({
  item: {
    author,
    img,
    isBestSeller,
    title,
    originalPrice,
    price,
    rating,
  },
}) => {

  const calcPercentage = (price, originalPrice) =>
  Math.floor(Math.abs((price / originalPrice) * 100 - 100));

  return (
    <div className="grid-item">
      <div className="card-ecom card-badge">
        {isBestSeller ? <span className="update-badge">BestSeller</span> : null}
        <span className="fav">
          <i className="fas fa-heart"></i>
        </span>
        <img className="product-card-image" src={img} alt={title} />
        <div className="product-detail">
          <strong>{title}</strong>
          <p>{author}</p>

          <div className="footer">
            <p className="price">
              Rs.{price}
              <span className="old-price">Rs.{originalPrice}</span>
              <span className="discount"> {calcPercentage(price, originalPrice)}% </span>
            </p>
              <span className={rating>3.4?"green-rate rating":"red-rate rating"}>{rating}<AiTwotoneStar/></span>
          </div>
          <button className="btn cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;